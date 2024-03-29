import Body from "../components/Body.tsx";
import Projects from "../components/Project.tsx";
import Blog from "../components/Blog.tsx";
import { Head } from "$fresh/runtime.ts";
export default function Home() {
  // const count = useSignal(3);?
  return (
    // <div class="px-4 py-8 mx-auto bg-[#86efac]">
    //   <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
    //     <img
    //       class="my-6"
    //       src="/logo.svg"
    //       width="128"
    //       height="128"
    //       alt="the Fresh logo: a sliced lemon dripping with juice"
    //     />
    //     <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
    //     <p class="my-4">
    //       Try updating this message in the
    //       <code class="mx-2">./routes/index.tsx</code> file, and refresh.
    //     </p>
    //     <Counter count={count} />
    //   </div>
    // </div>
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WiZtEk • Home</title>
      </Head>
      <div className="mx-auto max-w-container px-4 transition-all duration-100 ease-in  md:bg-white/90 md:backdrop-blur-sm ">
        <main className="prose">
          <Body />
        </main>
        <section>
          <div className="mt-12"></div>
          <h2>Projects</h2>

          <Projects />
          <span>
            <a href="/projects">All projects →</a>
          </span>

          <div className="mt-12"></div>
          <h2>Blog</h2>

          {/* <Blog /> */}
          <span>
            <a href="/blog">All posts →</a>
          </span>
        </section>
      </div>
    </>
  );
}
