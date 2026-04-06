import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, "Password too short")
  .max(64, "Password too long")
  .regex(/[A-Z]/, "Must include uppercase letter")
  .regex(/[a-z]/, "Must include lowercase letter")
  .regex(/[0-9]/, "Must include number")
  .regex(/[^A-Za-z0-9]/, "Must include special character");

export const signupInputSchema = z
  .object({
    fullname: z.string().trim().min(2).max(50),

    username: z
      .string()
      .trim()
      .min(3)
      .max(20)
      .regex(/^[a-zA-Z0-9_]+$/)
      .transform((v) => v.toLowerCase())
      .refine(
        (v) => !["admin", "support", "root"].includes(v),
        "Username not allowed",
      ),

    email: z
      .string()
      .email()
      .transform((v) => v.toLowerCase())
      .optional(),

    phoneNumber: z
      .string()
      .regex(/^\+?[1-9]\d{7,14}$/)
      .optional(),

    password: passwordSchema,

    dateOfBirth: z
      .string()
      .min(1, "Date of birth is required")
      .transform((val) => new Date(val)),

    gender: z
      .string()
      .transform((val) => Number(val))
      .refine((val) => [0, 1, 2].includes(val), {
        message: "Invalid gender",
      })
      .default(2),
  })
  .refine((data) => data.email || data.phoneNumber, {
    path: ["email"],
    message: "Either email or phone number is required",
  });
