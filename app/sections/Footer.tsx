"use client";

import Link from "next/link";
import { navLinks } from "@/app/sections/Header";

export default function Footer() {
  return (
    <footer className="mt-12 md:mt-16">
      <div className="bg-gray-200 py-20 dark:bg-slate-900">
        <ul className="flex flex-wrap justify-center">
          {navLinks.map((link) => (
            <div key={link.name} className="px-5 py-2">
              <Link href={link.href} className="text-muted-foreground">
                {link.name}
              </Link>
            </div>
          ))}
        </ul>

        <p className="mt-2 text-center text-muted-foreground">
          &copy;{new Date().getFullYear()} All Rights reserved By{" "}
          <span className="text-primary">Simreich.</span>
        </p>
      </div>
    </footer>
  );
}
