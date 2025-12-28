import * as z from "zod";

const loginSchema = z.object({
  username: z
    .string()
    .toLowerCase()
    .min(10, "Username must be at least 10 characters.")
    .max(32, "Username must be at most 32 characters."),

  password: z
    .string()
    .min(10, "Password must be at least 10 characters.")
    .max(20, "Password must be at most 32 characters."),
});

export default loginSchema;
