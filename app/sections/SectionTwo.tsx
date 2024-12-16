import markusspiske from "@/assets/markusspiske.jpg";
import javascript from "@/assets/tech-icons/javascript.svg";
import typescript from "@/assets/tech-icons/typescript.svg";
import html5 from "@/assets/tech-icons/html5.svg"
import css3 from "@/assets/tech-icons/css3.svg"
import nextjs from "@/assets/tech-icons/nextjs-black.png";
import reactjs from "@/assets/tech-icons/reactjs.svg";
import tailwindcss from "@/assets/tech-icons/tailwind.svg";
import nodejs from "@/assets/tech-icons/nodejs.svg";
import supabase from "@/assets/tech-icons/supabase.svg";
import redux from "@/assets/tech-icons/redux.svg";
import prisma from "@/assets/tech-icons/prisma.svg";
import vscode from "@/assets/tech-icons/vscode.svg";
import postgresql from "@/assets/tech-icons/postgresql.svg";
import git from "@/assets/tech-icons/git.svg";
import github01 from "@/assets/icons/github.svg";
import figma from "@/assets/icons/figma.svg";
import npm from "@/assets/tech-icons/npm.svg";

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
    username: "@Sim",
    link: "http://localhost:3000/",
  },
  {
    id: 3,
    icon: twitter,
    name: "X / Twitter",
    username: "@Sim",
    link: "http://localhost:3000/",
  },
];

export default function SectiomTwo() {
  return (
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
            <CardDescription>Check out the tools i use daily</CardDescription>
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
  );
}
