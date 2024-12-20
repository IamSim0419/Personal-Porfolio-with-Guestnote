import { Button } from "@/components/ui/button";
import myPic from "@/assets/images/profile.jpeg";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mt-6 md:mt-10 lg:mt-16 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        
        <div className="col-span-1 lg:col-span-2 h-full bg-gray-100   rounded-2xl px-8 py-12 md:py-16 flex flex-col justify-center items-baseline dark:bg-slate-900 dark:text-white">
          <h1 className="font-extrabold text-5xl lg:text-6xl">
            Hey! I&apos;m <span className="text-primary">Simreich</span>⚡
          </h1>
          <h2 className="text-3xl md:text-4xl  font-semibold mt-4 text-gray-700 text-muted-foreground">
            Next.js/Front-End Developer based in the PH.
          </h2>

          <div className="flex justify-center items-center md:gap-x-2 mt-5">
            <Link
              href="#contact"
              className="bg-primary text-md rounded-2xl border px-6 py-2 hover:opacity-90 text-white text-nowrap hidden md:block"
            >
              Contact Me
            </Link>

            <Button className="text-md text-white bg-black  hover:bg-transparent rounded-2xl hover:text-black hover:border-black hover:border-2 px-6 py-4 dark:text-black dark:bg-white dark:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white">
              <a
                href="/resume/CV.pdf"
                download
                className="flex items-center gap-2"
              >
                Download CV <Download className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <Image
          src={myPic}
          alt="Simreich"
          className="col-span-1 h-[500px] object-cover rounded-2xl"
          priority
        />
      </div>
    </section>
  );
}
