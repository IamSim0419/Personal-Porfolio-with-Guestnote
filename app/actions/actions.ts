"use server";

import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";

export async function postData(formData: FormData) {
    const message = formData.get("message") as string;

    const { getUser } = getKindeServerSession();
    const user = await getUser();

    console.log("USER", user);
    console.log("Message:", message);

    if (!user) {
        throw new Error("Unauthorized or user ID not found");
    }

    await prisma.guestNoteEntry.create({
        data: {
            userId: user.id,
            message: message,
        }
    })
   
    revalidatePath("/guestnote");
}

