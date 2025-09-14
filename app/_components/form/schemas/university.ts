import { z } from "zod";

export const universitySchema = z.object({
  university: z.string().min(1, "Please enter a valid university name"),
  address: z.string().min(1, "Please enter a valid address"),
  state: z.string().min(1, "Please select an option"),
  pincode: z.string().min(1, "Please select an option"),
  country: z.string().min(1, "Please select an option"),
  website: z.string().url("Please enter a valid website link"),
});
