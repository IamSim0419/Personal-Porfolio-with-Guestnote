"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { postData } from "@/app/actions/actions";
import { useRef } from "react";

export default function GuestForm() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await postData(formData);
        formRef.current?.reset();
      }}
      className="flex justify-between gap-4 flex-col md:flex-row"
    >
      <Input
        type="text"
        name="message"
        maxLength={80}
        minLength={1}
        placeholder="Your message"
        required
      />
      
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled className="flex items-center dark:text-white">
          <Loader2 className="mr-1 h-4 w-4 animate-spin" />
        </Button>
      ) : (
        <Button type="submit" className="dark:text-white">
          <div>Note</div>
        </Button>
      )}
    </>
  );
}
