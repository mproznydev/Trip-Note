import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Please enter your email address",
  }),
  password: z.string().min(1, {
    message: "Please enter your password",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Please enter your email address",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});

export const RegisterFormSchema = RegisterSchema.extend({
  confirmPassword: z.string().min(1, {
    message: "Please confirm your password",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});
