"use client";

import Link from "next/link";
import { yujiReg } from "@/app/fonts";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { MobileMenu } from "@/app/components/MobileMenu";
import { ModeToggle } from "@/app/components/ModeToggle";

export const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Guestnote",
    href: "/guestnote",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10">
      <div className="max-w-7xl mx-auto w-full p-3 md:px-8 grid grid-cols-12 bg-white/80 dark:bg-black/80">
        <div className="col-span-6 flex md:col-span-3 ">
          <Link href="/" className="relative" scroll={true}>
            <h1 className="text-xl font-semibold text-black/80 tracking-wider">
              <span
                className={`${yujiReg.className} text-4xl font-bold text-blue-600`}
              >
                S
              </span>
              <span className="absolute top-2 dark:text-white">imreich</span>
            </h1>
          </Link>
        </div>

        <nav className="hidden md:flex justify-center items-center col-span-6 ">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.name}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      active={pathname === link.href}
                      className={`${navigationMenuTriggerStyle()}`}
                    >
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center justify-end md:col-span-3 col-span-6">
          <ModeToggle />

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
