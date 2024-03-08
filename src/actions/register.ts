"use server";

import { getUserByEmail } from "@/data/user";
import { db } from "@/db";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import * as z from "zod";

export async function register(fields: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(fields);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password } = validatedFields.data;
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return { success: "Registered" };
}
