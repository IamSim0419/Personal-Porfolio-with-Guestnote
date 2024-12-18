import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/sections/Header";
import Footer from "@/app/sections/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from "next/font/google";

const poppins = Poppins({ 
    subsets: ["latin"], 
    weight: "400", 
    display: "swap" 
});

export const metadata: Metadata = {
  title: "Simreich",
  description: "Personal portfolio of Simreich",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} grid grid-rows-[auto_1fr_auto] min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
