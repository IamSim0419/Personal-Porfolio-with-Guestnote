"use server"

import { z } from "zod";
import { formSchema } from "./formSchema";
import { Resend } from 'resend';
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
    try {
        const { error } = await resend.emails.send({
            from: `${process.env.RESEND_FROM_EMAIL}`,
            to: [emailFormData.email],
            subject: "Welcome",
            react: EmailTemplate({ firstName: emailFormData.firstname }),
          });

          if (error) throw new Error("Something went wrong!");
    } catch (e) {
        throw e;
    }
};