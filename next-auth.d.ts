import NextAuth, { DefaultSession } from "next-auth";

export type UserExtended = DefaultSession["user"] & {
  role: "ADMIN" | "USER";
};

declare module "next-auth" {
  interface Session {
    user: UserExtended;
  }
}
