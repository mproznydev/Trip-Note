"use server";

import { LoginSchema } from "@/schemas";
import * as z from "zod";

export async function login(data: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(data);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  return { success: "Logged in" };
}
