"use server"

import { z } from "zod";
import { formSchema } from "./formSchema";
import { Resend } from 'resend';
import { EmailTemplate } from "@/components/email-template";

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
    // Ensure required environment variables are available
    if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM_EMAIL) {
        throw new Error("Missing necessary environment variables for sending email.");
    }

    try {
        // Sending the email via Resend
        await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL, // Make sure the 'from' field is populated correctly
            to: [emailFormData.email.toLowerCase()], // To email (lowercased for consistency)
            subject: "Welcome", // Email subject
            react: EmailTemplate({ // Use the EmailTemplate component to generate HTML content
                firstName: emailFormData.firstname,
                lastName: emailFormData.lastname,
            }),
        });

        console.log("Email sent successfully!");
    } catch (error) {
        // Log the error and rethrow with more specific details
        console.error("Error sending email:", error);
        throw new Error("Failed to send email. Please try again later.");
    }
};
