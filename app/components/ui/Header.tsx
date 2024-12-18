import { Link } from "@remix-run/react";

export const Header = () => {
  return (
    <div className="p-3 fixed w-full text-zinc-700 dark:text-zinc-300 top-0 z-50 flex backdrop-blur-md items-center justify-between bg-gray-700 bg-opacity-5 select-none">
      <div className="flex gap-3 items-center">
        <img
          className="rounded-full w-7 h-7"
          src="/meta-icon.webp"
          alt="logo"
        />
        <p className="font-bold text-xl">InvraNet</p>
      </div>
      <div className="flex gap-2">
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
    </div>
  );
};
