import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (Id: string) => {
  try {
    const user = await db.user.findUnique({ where: { Id } });
    return user;
  } catch {
    return null;
  }
};
