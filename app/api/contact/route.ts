import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const created = await prisma.contactMessage.create({
    data: {
      name: String(body.name ?? ""),
      email: String(body.email ?? ""),
      subject: String(body.subject ?? ""),
      message: String(body.message ?? ""),
    },
  });

  return NextResponse.json(created, { status: 201 });
}
