import { Link } from "@remix-run/react";
import {
  Menu,
  MenuIcon,
  SidebarCloseIcon,
  XIcon,
  ChevronRightIcon,
} from "lucide-react";
import React from "react";

export const Header = () => {
  const [menuVisible, setMenuVisibility] = React.useState(false);

  return (
    <div className="md:p-3 px-3 p-2 fixed w-screen text-zinc-700 dark:text-zinc-300 top-0 z-50 flex backdrop-blur-md items-center justify-between bg-gray-700 bg-opacity-5 select-none">
      <div className="flex gap-3 items-center">
        <img
          className="rounded-full w-7 h-7"
          src="/meta-icon.webp"
          alt="logo"
        />
        <p className="font-bold text-xl">InvraNet</p>
      </div>
      <div className="hidden md:flex gap-2">
        <Link
          to={"/"}
          className="dark:hover:text-purple-400 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to={"/about"}
          className="dark:hover:text-purple-400 transition-colors duration-200"
        >
          About
        </Link>
        <Link
          to={"/projects"}
          className="dark:hover:text-purple-400 transition-colors duration-200"
        >
          Projects
        </Link>
      </div>
      <div
        onClick={() => setMenuVisibility(!menuVisible)}
        className="flex md:hidden gap-2 hover:bg-zinc-300 p-2 rounded-lg hover:bg-opacity-5 backdrop-blur-md"
      >
        <MenuIcon />
      </div>

      <div
        className={`absolute z-10 top-0 left-0 w-screen h-screen overflow-hidden transition-[max-height] duration-400 ease-in-out bg-blue-100 dark:bg-zinc-900 dark:text-zinc-200 text-gray-900 ${
          menuVisible ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex items-center justify-between mt-2 px-3 py-2">
          <h1 className="text-center text-4xl font-bold flex-1 ml-[40px]">
            InvraNet's Website
          </h1>
          <XIcon
            height={40}
            width={40}
            onClick={() => setMenuVisibility(false)}
          />
        </div>
        <section className="flex flex-col gap-1 mt-4">
          <Link
            to={"/"}
            className="width-full p-4 px-8 mx-4 border-b border-zinc-300 dark:border-zinc-800 text-3xl font-bold flex items-center justify-between"
          >
            Home
            <ChevronRightIcon height={30} width={30} />
          </Link>
          <Link
            to={"/about"}
            className="width-full p-4 px-8 mx-4 border-b border-zinc-300 dark:border-zinc-800 text-3xl font-bold flex items-center justify-between"
          >
            About
            <ChevronRightIcon height={30} width={30} />
          </Link>
          <Link
            to={"/projects"}
            className="width-full p-4 px-8 mx-4 border-b border-zinc-300 dark:border-zinc-800 text-3xl font-bold flex items-center justify-between"
          >
            Projects
            <ChevronRightIcon height={30} width={30} />
          </Link>
        </section>
      </div>
    </div>
  );
};
