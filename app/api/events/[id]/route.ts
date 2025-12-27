import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type Params = {
  params: { id: string };
};

export async function GET(_req: Request, { params }: Params) {
  const event = await prisma.event.findFirst({
    where: { id: params.id, status: "PUBLISHED" },
  });

  if (!event) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(event);
}
