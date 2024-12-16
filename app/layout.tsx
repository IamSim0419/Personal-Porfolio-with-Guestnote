import type { Metadata } from "next";
import { Inter } from "next/font/google"
import "./globals.css";
import Navbar from "@/app/sections/Header";
import Footer from "@/app/sections/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"]});
export const roboto = Roboto({ subsets: ["latin"], weight: "400"});

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
        className={`${inter.className} grid grid-rows-[auto_1fr_auto] min-h-screen`}
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
