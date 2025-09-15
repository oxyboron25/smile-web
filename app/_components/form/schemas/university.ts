import { z } from "zod";

export const universitySchema = z.object({
  university: z.string().min(1, "Please enter a valid university name"),
  address: z.string().min(1, "Please enter a valid address"),
  state: z.string().optional(),
  pincode: z.string().optional(),
  country: z.string().min(1, "Please select an option"),
  website: z.string().url("Please enter a valid website link"),
});
