import { Card } from "@/components/ui/card";
import myProfile from "@/assets/images/profile.jpeg";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="my-6 md:my-10 lg:my-16">
      <section className="max-w-7xl w-full px-4 md:px-8 mx-auto text-zinc-800">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold pt-5 dark:text-white">
          About
        </h1>
        <p className="leading-7 text-muted-foreground mt-2 text-2xl">
          A little about me
        </p>
        <div className="grid gird-cols-1 lg:grid-cols-3 gap-4 mt-10 ">
          <div className="col-span-1">
            <Image
              src={myProfile}
              alt="Simrech"
              className="h-[550px] object-cover rounded-lg w-full"
            />
          </div>
          <Card className="col-span-1 lg:col-span-2 border-none bg-gray-100 p-8 flex flex-col justify-center items-baseline dark:bg-slate-900">
            <h1 className="text-5xl font-semibold md:text-6xl lg:text-7xl">
              Frontend <span className="text-primary">Developer</span>
            </h1>
            <p className="mt-4 text-muted-foreground text-xl md:text-xl">
              I&apos;m{" "}
              <span className="text-primary">
                Simreich Somogod
              </span>{" "}
              a dedicated and detail-oriented Frontend Developer with a solid foundation in building responsive, user-centric web applications, specializing in React.js | Next.js. I&apos;ve gained hands-on experience crafting scalable and efficient solutions with clean, maintainable code.  Passionate about continuous learning, I&apos;m excited to bring my unique perspective and growing skill set to new development challenges.
            </p>
          </Card>
        </div>
      </section>
    </main>
  );
}
