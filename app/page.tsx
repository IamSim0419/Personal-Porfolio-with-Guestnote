import Hero from "@/app/sections/Hero";
import SectionTwo from "@/app/sections/SectionTwo";
import { FavoriteProjects } from "@/app/sections/FavoriteProjects";
import Contact from "@/app/sections/Contact";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main className="">
      <div className="max-w-7xl w-full px-4 md:px-8 mx-auto">
        <ToastContainer />
        <Hero />
        <SectionTwo />
        <FavoriteProjects />
        <Contact />
      </div>
    </main>
  );
}
