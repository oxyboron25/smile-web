import { z } from "zod";

export const memberSchema = z.object({
  role: z.string().min(1, "Select a role"),
  customRole: z.string().optional(),
  countryCode: z.string().optional(),
  name: z.string().min(1, "Please enter a name"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .regex(/^[0-9]+$/, "Only numbers are allowed")
    .min(10, "Please enter a valid contact number"),
  linkedin: z.string().url("Please enter a valid LinkedIn profile"),
  discipline: z.string().min(1, "Please select one option"),
  study: z.string().min(1, "Please select one option"),

  // File uploads
  resume: z
    .any()
    .refine((files) => files?.length > 0, "Please upload a valid document"),
  proof_of_association: z
    .any()
    .refine((files) => files?.length > 0, "Please upload a valid proof of association")
    .optional(), // optional if it’s not always required
});
