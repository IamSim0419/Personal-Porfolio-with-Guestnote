"use server"

import { z } from "zod";
import { formSchema } from "./formSchema";
import { Resend } from 'resend';
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
    try {
        await resend.emails.send({
            from: `${process.env.RESEND_FROM_EMAIL}`,
            to: [emailFormData.email.toLowerCase()],
            subject: "Welcome",
            react: EmailTemplate({ firstName: emailFormData.firstname, lastName: emailFormData.lastname }),
          });

    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong!");
    }
};