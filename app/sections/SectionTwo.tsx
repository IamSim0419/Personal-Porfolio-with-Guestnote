import markusspiske from "@/assets/images/markusspiske.jpg";
import javascript from "@/assets/icons/javascript.svg";
import typescript from "@/assets/icons/typescript.svg";
import html5 from "@/assets/icons/html5.svg"
import css3 from "@/assets/icons/css3.svg"
import nextjs from "@/assets/icons/nextjs-black.png";
import reactjs from "@/assets/icons/reactjs.svg";
import tailwindcss from "@/assets/icons/tailwind.svg";
import nodejs from "@/assets/icons/nodejs.svg";
import supabase from "@/assets/icons/supabase.svg";
import redux from "@/assets/icons/redux.svg";
import prisma from "@/assets/icons/prisma.svg";
import vscode from "@/assets/icons/vscode.svg";
import postgresql from "@/assets/icons/postgresql.svg";
import git from "@/assets/icons/git.svg";
import github01 from "@/assets/icons/github.svg";
import figma from "@/assets/icons/figma.svg";
import npm from "@/assets/icons/npm.svg";

import github02 from "@/assets/icons/github.svg";
import twitter from "@/assets/icons/twitter.svg";
import linkedin from "@/assets/icons/linkedin.svg";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const icons = [
    javascript,
    typescript,
    nextjs,
    reactjs,
    tailwindcss,
    redux,
    prisma,
    nodejs,
    supabase,
    html5,
    css3,
    vscode,
    git,
    github01,
    postgresql,
    figma,
    npm,
];

const socialMedia = [
  {
    id: 1,
    icon: github02,
    name: "Github",
    username: "@IamSim0419",
    link: "https://github.com/IamSim0419",
  },
  {
    id: 2,
    icon: linkedin,
    name: "Linkedin",
    username: "@Simreich",
    link: "https://www.linkedin.com/in/simreich-somogod-a977a02b3/",
  },
  {
    id: 3,
    icon: twitter,
    name: "X / Twitter",
    username: "@callmesim1989",
    link: "http://localhost:3000/",
  },
];

export default function SectiomTwo() {
  return (
    <section className="my-12 md:my-16">
      <div className="grid gird-cols-1 lg:grid-cols-3 gap-4 mt-10 text-zinc-800">
      <div className="w-full relative col-span-1">
        <Image
          src={markusspiske}
          alt="square"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4 ">
        <Card className="bg-gray-100 border-none dark:bg-slate-900">
          <CardHeader>
            <CardTitle>Explore my tech stack</CardTitle>
            <CardDescription>I constantly try to improve</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {icons.map((icon, index) => (
                <Image src={icon} key={index} alt="icons" className="w-16 h-16 hover:scale-125 transition-transform duration-200 ease-in-out" />
            ))}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
          {socialMedia.map((item) => (
            <Card
              key={item.id}
              className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none dark:bg-slate-900"
            >
              <Image src={item.icon} alt="Icon" className="w-16 h-16" />
              <h1 className="text-xl font-medium pt-3">{item.name}</h1>
              <p className="text-muted-foreground">{item.username}</p>
              <Button className="mt-4" size="sm" asChild>
                <a href={item.link}>Follow</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
