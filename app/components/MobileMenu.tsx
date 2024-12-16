"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navLinks } from "@/app/sections/Header";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { yujiReg } from "@/app/fonts";

export function MobileMenu() {
  const location = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <Sheet open={open} onOpenChange={(state) => setOpen(state)}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" >
            <Menu /> 
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className={`${yujiReg.className} text-blue-600 text-center text-6xl m-12`}>S</SheetTitle>
        <div className="mt-6 flex px-4 space-y-2 flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                location === link.href
                  ? "bg-muted"
                  : "hover:bg-muted hover:bg-opacity-75",
                "group text-xl p-3 font-semibold rounded-md"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}