import { z } from "zod"

export const loginSchema = z.object({
  login: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long")
})

export type TLoginSchema = z.infer<typeof loginSchema>
