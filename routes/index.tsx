import Body from "../components/Body.tsx";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getPosts, Post } from "../utils/post.ts";
import { projects } from "../utils/projects.ts";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function Home(props: PageProps<Post[]>) {
  const posts = props.data;
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WiZtEk • Home</title>
      </Head>
      <div className="mx-auto max-w-container px-4 transition-all duration-100 ease-in md:bg-white/90 md:backdrop-blur-sm dark:bg-slate-900 dark:md:backdrop-blur-sm">
        <main className="prose dark:prose-dark">
          <Body />
        </main>
        <section>
          <div className="mt-12"></div>
          <h2 class="text-xl font-bold py-4 dark:text-white">Projects</h2>
          <div className="py-3 grid grid-cols-2 gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <div key={project.repo}>
                <a
                  className="font-semibold hover:underline underline-offset-1 dark:text-white-400"
                  href={project.link}
                >
                  {project.repo}
                </a>
                <p class="dark:text-slate-300">{project.description}</p>
              </div>
            ))}
          </div>
          <span>
            <a class="font-semibold dark:text-white-400" href="/projects">
              All projects →
            </a>
          </span>
        </section>
        <div className="mt-12"></div>
        <section>
          <h2 class="text-xl font-bold py-4 dark:text-white">Blog</h2>
          <div className="py-3 flex flex-col gap-4">
            {posts.map((post) => (
              <div class="flex justify-between">
                <a
                  className="font-semibold hover:underline underline-offset-1 dark:text-white-400"
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                >
                  {post.title}
                </a>
                <time class="text-slate-500 dark:text-slate-400">
                  {new Date(post.publishDate).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            ))}
          </div>
          <span>
            <a class="font-semibold dark:text-white-400" href="/blog">
              All posts →
            </a>
          </span>
        </section>
      </div>
    </>
  );
}
