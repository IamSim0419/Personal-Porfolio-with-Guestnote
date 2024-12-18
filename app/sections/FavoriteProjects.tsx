import Image from "next/image";
import { ProjectCardType } from "@/lib/types";
import { client } from "@/lib/sanity";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'project'] | order(_createdAt desc) [0...3] {
        title,
          _id,
          link,
          description,
          tags,
          "imageUrl": image.asset->url 
    }`;

  const data = await client.fetch(query, {}, { next: { revalidate: 30 } });

  return data;
}

export async function FavoriteProjects() {
  const data: ProjectCardType[] = await getData();

  return (
    <section className="my-12 md:my-16">
        <div className="max-w-7xl w-full mx-auto text-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {data.map((item) => (
              <Link
                key={item._id}
                href={item.link}
                className="group block rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
                target="_blank"
              >
                <div className="dark:border dark:border-white/50 bg-gray-100 rounded-xl h-full p-4 flex flex-col justify-between dark:bg-black">
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
        </div>
      </section>
  );
}