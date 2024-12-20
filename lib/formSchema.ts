import { z } from "zod";

export const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  email: z.string().email("Invalid email address.").min(2, {
    message: "Email must be at least 2 characters.",
  }),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
});
