import { Button } from "@/components/ui/button";
import myPic from "@/assets/profile.jpeg";
import { Download } from "lucide-react";
import Image from "next/image";
import { roboto } from "@/app/layout";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mt-6 md:mt-10 lg:mt-16 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-zinc-800">
        <div className="col-span-1 lg:col-span-2 h-full bg-gray-100 min-h-[500px] lg:min-h-[300px] rounded-2xl p-8 flex flex-col justify-center items-baseline dark:bg-slate-900 dark:text-white">
          <h1
            className={`${roboto.className} font-extrabold text-5xl lg:text-6xl overflow-clip`}
          >
            Hey! I'm <span className="text-primary">Simreich</span>⚡
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mt-4 text-black/80 dark:text-white/70">
            I am a{" "}
            <span className="font-semibold">NextJS/Front-end Developer</span>{" "}
            working and living in PH.
          </h2>

          <div className="flex justify-center items-center gap-x-2 mt-5">
            <Link
              href="#contact"
              className="bg-primary text-md rounded-2xl border px-6 py-2 hover:opacity-90 text-white"
            >
              Contact Me
            </Link>

            <Button className="text-md text-black hover:text-white bg-transparent rounded-2xl border-black hover:bg-gray-900 border-2  px-6 py-4 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black dark:hover:border-black">
              <span className="relative flex justify-center items-center gap-2">
                <a href="/assets/resume/my-resume.pdf" download>
                  Resume
                </a>
                <Download className="h-5 w-5" />
              </span>
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
