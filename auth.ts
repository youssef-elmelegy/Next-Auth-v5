import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "./lib/db";
import NextAuthConfig from "./app/auth.config";

import { getUserById } from "@/data/user";
import { date } from "zod";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  handlers,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async session({ session, token }) {
      console.log("session", session, token);

      if (token.sub && token.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as "ADMIN" | "USER";
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    },
  },

  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...NextAuthConfig,
});
