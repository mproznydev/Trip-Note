/*
  Create global prisma client instance in development environments
  It prevents creating multiple Prisma clients
  Otherwise every time Hot Module Replacement runs it creates another instance
*/

import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
