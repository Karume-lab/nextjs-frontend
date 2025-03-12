import { z } from "zod";

const Z_Password = z.string({ required_error: "Please enter your password" });
const Z_Email = z
  .string({ required_error: "Please enter your email." })
  .email({ message: "Please enter a valid email" });

export const signInSchema = z.object({
  email: Z_Email,
  Z_Password,
});

export const signUpSchema = z
  .object({
    first_name: z.string().min(1, "Please enter your first name."),
    last_name: z.string().min(1, "Please enter your last name."),
    email: Z_Email,
    password: Z_Password,
    re_password: Z_Password,
  })
  .refine((data) => data.password === data.re_password, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const resetPasswordSchema = z
  .object({
    password: Z_Password,
    confirmPassword: Z_Password,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});
