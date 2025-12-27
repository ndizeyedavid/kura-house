import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);
const isAdminApiRoute = createRouteMatcher([
  "/api/messages(.*)",
  "/api/uploads(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const needsAdmin = isAdminRoute(req) || isAdminApiRoute(req);
  if (!needsAdmin) return;

  auth.protect();

  const adminUserIds = (process.env.ADMIN_USER_IDS ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (adminUserIds.length === 0) return;

  const { userId } = await auth();
  const isAllowed = !!userId && adminUserIds.includes(userId);

  if (isAllowed) return;

  if (isAdminApiRoute(req)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  return NextResponse.redirect(new URL("/", req.url));
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)", "/(api|trpc)(.*)"],
};
