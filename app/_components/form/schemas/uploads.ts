import { z } from "zod";

export const uploadsSchema = z.object({
  proof: z
    .any()
    .refine((files) => files?.length > 0, "Please upload a valid document"),
  chapterPlan: z
    .string()
    .refine((val) => val.trim().split(/\s+/).length >= 200, {
      message: "Chapter plan must be at least 200 words",
    }),
  declaration: z.boolean().refine((val) => val === true, {
    message: "This is a necessary selection",
  }),
  consent: z.boolean().refine((val) => val === true, {
    message: "This is a necessary selection",
  }),
});
