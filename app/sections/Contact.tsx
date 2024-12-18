"use client"

import ContactForm from "@/components/contact-form";

export default function Contact() {
  return (
    <section
      id="contact"
      className="grid gird-cols-1 lg:grid-cols-3 gap-4 mt-10  scroll-mt-20"
    >
      <div className="col-span-1 bg-gray-100 rounded-xl p-8 flex flex-col justify-center items-baseline gap-8 dark:bg-slate-900 dark:text-gray-100">
        <h1 className="text-6xl font-semibold">Let's work{" "}<span className="underline underline-offset-8 decoration-primary">together</span></h1>
        <div className="">
          <h2 className="font-semibold underline underline-offset-2 decoration-primary tracking-wider">Mail</h2>
          <span>Simreich1989@gmail.com</span>
        </div>
        <div>
          <h2 className="font-semibold underline underline-offset-2 decoration-primary tracking-wider">Address</h2>
          <span>44 Rodriguez Street, Iloilo</span>
        </div>
        <div>
          <h2 className="font-semibold underline underline-offset-2 decoration-primary tracking-wider">Phone</h2>
          <span>+63-968-728-3042</span>
        </div>
      </div>

      <ContactForm />
    </section>
  );
}
