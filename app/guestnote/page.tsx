import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Form from "@/app/sections/GuestForm";
import {
  FormSkeleton,
  LoadingSkeleton,
} from "@/app/components/LoadingSkeleton";
import { unstable_noStore as noStore } from "next/cache";

import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { Suspense } from "react";
import prisma from "@/lib/db";

async function getGuestNoteEntry() {
  noStore();

  const data = await prisma.guestNoteEntry.findMany({
    select: {
      user: {
        select: {
          firstName: true,
          profileImage: true,
        },
      },
      message: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 30,
  });

  return data;
}

export default function GuestNotePage() {
  return (
    <main className="my-6 md:my-10 lg:my-16">
      <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold pt-5 dark:text-white">
          Guestnote
        </h1>
        <p className="leading-7 text-muted-foreground mt-2 text-xl">
          Sign my Guestnote!
        </p>

        <Card className="mt-10">
          <CardHeader className="w-full">
            <Label className="mb-1">Message</Label>
            <Suspense fallback={<FormSkeleton />}>
              <GuestnoteForm />
            </Suspense>

            <ul className="pt-7 flex flex-col gap-y-5 pl-2">
              <Suspense fallback={<LoadingSkeleton />}>
                <GuestnoteEntries />
              </Suspense>
            </ul>
          </CardHeader>
        </Card>
      </section>
    </main>
  );
}

async function GuestnoteEntries() {
  const data = await getGuestNoteEntry();

  //Check data
  if (data.length === 0) {
    return null;
  }

  return data.map((item) => (
    <li key={item.id}>
      <div className="flex items-center">
        <Image
          src={item.user?.profileImage as string}
          alt="User profile image"
          width={40}
          height={40}
          className="h-8 w-8 rounded-full"
        />

        <p className="text-muted-foreground pl-3 break-words font-medium">
          {item.user?.firstName}:{" "}
          <span className="text-foreground ml-1">{item.message}</span>
        </p>
      </div>
    </li>
  ));
}

async function GuestnoteForm() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  //Check if it has users
  if (user) {
    return <Form />;
  }

  return (
    <div className="flex justify-center gap-4 flex-col md:flex-row">
      <Input type="text" placeholder="Your Message..." />

      <RegisterLink>
          <Button className="w-full dark:text-white">Try fot free</Button>
      </RegisterLink>
    </div>
  );
}
