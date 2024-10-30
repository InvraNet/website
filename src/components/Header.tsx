"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header id="header" className="sticky flex items-center justify-between text-[#ededed] p-3 bg-[#0a0a0a] border-b-[1px] border-[#333333]">
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center">
          <Image src="/static/img/meta-icon.jpg" className="rounded-full w-7 h-7" alt="Logo" width={32} height={32} />
          <span className="font-bold text-xl ml-3  ">InvraNet</span>
        </Link>
      </div>

      <nav className="hidden md:flex space-x-4">
        <Link className='hover:text-slate-500' href="/">Home</Link>
        <Link className='hover:text-slate-500' href="/projects">Projects</Link>
        <Link className='hover:text-slate-500' href="/about">About</Link>
      </nav>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-gray-800 p-4 rounded shadow-md md:hidden">
          <nav className="flex flex-col space-y-2">
            <Link className='hover:text-slate-500' href="/about" onClick={toggleMenu}>About</Link>
            <Link className="hover:text-slate-500" href="/projects" onClick={toggleMenu}>Projects</Link>
            <Link className="hover:text-slate-500" href="/" onClick={toggleMenu}>Home</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;