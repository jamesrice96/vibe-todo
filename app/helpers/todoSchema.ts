import { z } from "zod";

export const todoFormSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be less than 100 characters"),
  description: z
    .string()
    .max(500, "Description must be less than 500 characters")
    .optional(),
  completionDate: z.date({
    error: "Completion date is required",
  }),
});

export type TodoFormSchema = z.infer<typeof todoFormSchema>;
