import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";

import authConfig from "@/auth.config";
import { db } from "@/db";

/*
  Use Prisma adapter and force JWT strategy instead of database one
  The reason for that is Prisma does not work on the edge by default
*/
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  callbacks: {
    async session({ session, token }) {
      console.log(session.user.id, token.sub);

      if (token.sub) {
        session.user.id = token.sub;
      }

      return session;
    },
  },
  ...authConfig,
});
