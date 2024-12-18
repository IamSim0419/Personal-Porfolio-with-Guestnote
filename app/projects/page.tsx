//! cd sanity
//! npm run dev
//! It will show link for Sanity Studio

import { client } from "@/lib/sanity";
import { ProjectCardType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `*[_type == "project"] {
  title,
    _id,
    link,
    description,
    tags,
    "imageUrl": image.asset -> url
    }`;

  const data = await client.fetch(query);

  return data;
}

export default async function ProjectsPage() {
  const data: ProjectCardType[] = await getData();

  return (
    <main className="my-6 md:my-10 lg:my-16">
      <section className="max-w-7xl w-full px-4 md:px-8 mx-auto text-zinc-800">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold pt-5 dark:text-white">
            Projects
          </h1>
          <p className="leading-7 text-muted-foreground mt-2 text-xl">
            Explore the projects I've worked on
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-12">
            {data.map((item) => (
              <Link
                key={item._id}
                href={item.link}
                className="group block rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
                target="_blank"
              >
                <div className="dark:border dark:border-white/70 bg-gray-100 rounded-xl h-full p-4 flex flex-col justify-between dark:bg-black">
                  <div>
                    <div className="aspect-video overflow-hidden relative rounded-lg">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="group-hover:scale-105 transition-transform duration-500 ease-in-out object-cover"
                      />
                    </div>

                    <div className="mt-3">
                      <h2 className="font-semibold text-2xl md:text-3xl hover:underline hover:underline-offset-4 hover:decoration-primary dark:text-white">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-muted-foreground line-clamp-3">
                        {item.description}
                      </p>
                    </div>
                    </div>
                  
                    <div className="mt-8">
                      {item.tags.map((tagItem, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center justify-center m-1 rounded-md bg-primary/10 py-1.5 px-2 text-xs font-medium text-primary ring-2 ring-inset ring-primary/20"
                        >
                          {tagItem}
                        </span>
                      ))}
                    </div>
                </div>
              </Link>
            ))}
          </div>
      </section>
    </main>
  );
}
