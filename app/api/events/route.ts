import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const events = await prisma.event.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(events);
}

export async function POST(req: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const adminUserIds = (process.env.ADMIN_USER_IDS ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (adminUserIds.length > 0 && !adminUserIds.includes(userId)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json();

  const created = await prisma.event.create({
    data: {
      title: String(body.title ?? ""),
      category: String(body.category ?? ""),
      dateTime: new Date(String(body.dateTime)),
      location: String(body.location ?? ""),
      coverImageUrl: body.coverImageUrl ? String(body.coverImageUrl) : null,
      shortSummary: String(body.shortSummary ?? ""),
      fullDescription: String(body.fullDescription ?? ""),
      status: "PUBLISHED",
    },
  });

  return NextResponse.json(created, { status: 201 });
}
