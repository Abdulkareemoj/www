import { Handlers } from "$fresh/server.ts";
import { getPosts, Post } from "../../utils/post.ts";
import { Feed, type Item as FeedItem } from "https://esm.sh/feed@4.2.2";

export const handler: Handlers<Post[]> = {
  async GET(req, _ctx) {
    const posts = await getPosts();
    const url = new URL(req.url);
    const origin = url.origin;
    const copyright = `Copyright ${new Date().getFullYear()} ${origin}`;
    const feed = new Feed({
      title: "Blog",
      description: "This is a Fresh Blog",
      id: `${origin}/blog`,
      link: `${origin}/blog`,
      language: "en",
      favicon: `${origin}/favicon.ico`,
      copyright: copyright,
      generator: "Feed (https://github.com/jpmonette/feed) for Deno",
      feedLinks: {
        atom: `${origin}/feed`,
      },
    });

    posts.map((post) => {
      const item: FeedItem = {
        id: `${origin}/${post.title}`,
        title: post.title,
        description: post.description,
        date: post.publishDate,
        link: `${origin}/${post.slug}`,
        copyright,
        published: post.publishDate,
      };
      feed.addItem(item);
    });

    const atomFeed = feed.atom1();
    return new Response(atomFeed, {
      headers: {
        "content-type": "application/atom+xml; charset=utf-8",
      },
    });
  },
};
