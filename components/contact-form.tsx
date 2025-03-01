"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { formSchema } from "@/lib/formSchema";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [result, setResult] = useState("");

  //! Initialize the form with default values and validation schema
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setResult("Sending....");
    const formData = new FormData();
    formData.append("fullname", values.fullname);
    formData.append("email", values.email);
    formData.append("message", values.message);

    formData.append("access_key", "d77c9380-9484-4208-a891-c25517abd35c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent successfully");
      form.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <Card className="col-span-1 lg:col-span-2 border-none p-2 bg-gray-100  dark:bg-slate-900">
      <CardHeader>
        <CardTitle className="tracking-wide">Contact Me</CardTitle>
        <CardDescription>
          Fill out the form below and we&apos;ll get back to you as soon as
          possible.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Fullname</FormLabel>
                  <FormControl>
                    <Input placeholder="Full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="border-primary"
                      placeholder="Email Address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="border-primary"
                      placeholder="Type your message here"
                      id="message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-red-600" />
                </FormItem>
              )}
            />

            <Button className="flex items-center dark:text-white">
              {result ? (
                <>
                  <Loader2 className="mr-1 h-4 w-4 animate-spin" />
                  <div>{result}</div>
                </>
              ) : (
                <div>Submit</div>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
