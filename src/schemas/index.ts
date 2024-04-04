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
  email: z
    .string()
    .min(1, {
      message: "Please enter your email address",
    })
    .email({
      message: "Please enter a valid email address",
    }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[0-9]/, {
      message: "Password must contain at least one number",
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
