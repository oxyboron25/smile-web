import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Please enter a name"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .regex(/^[0-9]+$/, "Only numbers are allowed")
    .min(10, "Please enter a valid contact number"),
  linkedin: z.string().url("Please enter a valid LinkedIn profile"),
});
