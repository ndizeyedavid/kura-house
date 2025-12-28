import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

let prismaClient: PrismaClient | undefined;

function getPrismaClient() {
  if (prismaClient) return prismaClient;

  prismaClient = global.prisma ?? new PrismaClient();
  if (process.env.NODE_ENV !== "production") global.prisma = prismaClient;
  return prismaClient;
}

export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    const client = getPrismaClient();
    return (client as any)[prop];
  },
});
