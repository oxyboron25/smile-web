import { z } from "zod";
import { universitySchema } from "./university";
import { contactSchema } from "./contact";
import { memberSchema } from "./member";
import { uploadsSchema } from "./uploads";

export const formSchema = z.object({
  university: universitySchema,
  contact: contactSchema,
  foundingMembers: z
    .array(memberSchema)
    .min(4, "At least 4 founding members are required")
    .max(6, "Maximum 6 founding members allowed"),
  uploads: uploadsSchema,
});

export type FormData = z.infer<typeof formSchema>;
