import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const events = await prisma.event.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(events);
}

export async function POST(req: Request) {
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
