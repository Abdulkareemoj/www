import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-github.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-linkedin.tsx";
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/mail.tsx";
import IconRss from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/rss.tsx";
import IconSitemap from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/sitemap.tsx";
import IconBrandXFilled from "https://deno.land/x/tabler_icons_tsx@0.0.5/tsx/brand-x-filled.tsx";

export default function Footer() {
  const menus = [
    {
      links: [
        {
          name: "RSS",
          href: "/rss.xml",
          icon: <IconRss className="w-2 h-2" />,
        },
        {
          name: "Sitemap",
          href: "/sitemap.xml",
          icon: <IconSitemap className="w-2 h-2" />,
        },
        {
          name: "Email",
          href: "mailto:abdulkareemojerinde@gmail.com",
          icon: <IconMail className="w-2 h-2" />,
        },
        {
          name: "GitHub",
          href: "https://github.com/abdulkareemoj",
          icon: <IconBrandGithub className="w-2 h-2" />,
        },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/abdulkareem-ojerinde-863b39137/",
          icon: <IconBrandLinkedin className="w-2 h-2" />,
        },
        {
          name: "X",
          href: "https://x.com/abdulkareemoj",
          icon: <IconBrandXFilled className="w-2 h-2" />,
        },
      ],
    },
  ];

  return (
    <div className="prose">
      <hr />

      <footer className="flex justify-items justify-between m-2">
        <span className="font-semibold">
          WiZtEk
        </span>

        <div className="flex ">
          {menus.map((item, index) => (
            <div key={index}>
              <div className="flex mt-2">
                {item.links.map((child) => (
                  <div className="px-1" key={child.name}>
                    <a href={child.href}>
                      {child.icon}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}
