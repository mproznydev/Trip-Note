"use server";

import { signIn } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { db } from "@/db";
import { DEFAULT_REDIRECT_ON_LOGIN } from "@/routes";
import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import * as z from "zod";

export async function register(fields: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(fields);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await db.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
  } catch {
    return { error: "Something went wrong!" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_REDIRECT_ON_LOGIN,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "Something went wrong!" };
    }

    throw error;
  }

  return { success: "Account created successfully!" };
}
