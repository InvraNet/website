import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
  const techStack = [
    { name: "TypeScript", icon: "/img/stack/ts.svg" },
    { name: "JavaScript", icon: "/img/stack/js.svg" },
    { name: "C++", icon: "/img/stack/cpp.svg" },
    { name: "React", icon: "/img/stack/react.svg" },
    { name: "Next.js", icon: "/img/stack/next.svg" },
    { name: "TailwindCSS", icon: "/img/stack/tw.svg" },
    { name: "Remix", icon: "/img/stack/remix.svg" },
    { name: "HTML", icon: "/img/stack/html.svg" },
    { name: "CSS", icon: "/img/stack/css.svg" },
    { name: "Node.js", icon: "/img/stack/node.svg" },
    { name: "Express", icon: "/img/stack/express.svg" },
  ];

  const netStack = [
    { name: "Ubiquiti", icon: "/img/tech/ui.svg" },
    { name: "Cisco", icon: "/img/tech/cisco.svg" },
    { name: "SuperMicro", icon: "/img/tech/supermicro.svg" },
    { name: "MikroTik", icon: "/img/tech/mikrotik.svg" },
    { name: "Apple", icon: "/img/tech/apple.svg" },
    { name: "Arch Linux", icon: "/img/tech/arch.svg" },
    { name: "Proxmox", icon: "/img/tech/proxmox.svg" },
    { name: "NixOS", icon: "/img/tech/nixos.svg" },
    { name: "Windows", icon: "/img/tech/microsoft.svg" },
    { name: "TP-Link", icon: "/img/tech/tp-link.svg" },
    { name: "Docker", icon: "/img/tech/docker.svg" },
  ];

  return json({ techStack, netStack });
};

export default function Index() {
  const { techStack, netStack } = useLoaderData<typeof loader>();

  return (
    <main>
      <div className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-purple-500 dark:text-[rgb(138,43,226)]">
            Welcome to my Remixed website!
          </h1>
          <p className="text-xl">
            This new website is made with love, with React, Remix, TypeScript,
            and more!
          </p>
        </section>

        <section className="flex flex-col mb-16 justify-center">
          <h2 className="text-3xl font-semibold mb-2 text-center text-purple-500 dark:text-[rgb(138,43,226)]">
            My Tech Stack
          </h2>
          <p className="text-xl text-center mb-8">
            Here is the frameworks and language I know.
          </p>
          <div className="w-2/3 mx-auto inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] dark:filter dark:invert">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              {techStack.map((item) => (
                <li key={item.name}>
                  <div
                    className="w-[100px] h-[100px]"
                    style={{ backgroundImage: `url('${item.icon}')` }}
                  ></div>
                </li>
              ))}
            </ul>

            <ul
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              aria-hidden="true"
            >
              {techStack.map((item) => (
                <li key={item.name}>
                  <div
                    className="w-[100px] h-[100px]"
                    style={{ backgroundImage: `url('${item.icon}')` }}
                  ></div>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-3xl font-semibold mb-2 text-center text-purple-500 dark:text-[rgb(138,43,226)] mt-12">
            My Network Stack
          </h2>
          <p className="text-xl text-center mb-8">
            Here is the Equipment I know how to use.
          </p>
          <div className="w-2/3 mx-auto inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] dark:filter dark:invert">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
              {netStack.map((item) => (
                <li key={item.name}>
                  <div
                    className="w-[100px] h-[100px]"
                    style={{ backgroundImage: `url('${item.icon}')` }}
                  ></div>
                </li>
              ))}
            </ul>

            <ul
              className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              aria-hidden="true"
            >
              {netStack.map((item) => (
                <li key={item.name}>
                  <div
                    className="w-[100px] h-[100px]"
                    style={{ backgroundImage: `url('${item.icon}')` }}
                  ></div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
