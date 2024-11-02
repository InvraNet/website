"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      id="header" 
      className={`sticky top-0 z-50 flex items-center justify-between text-black dark:!text-[#ededed] p-3 bg-[#ffffff] dark:bg-[#000000] border-b-[1px] dark:border-[#333333] ${scrolled ? 'p-5' : ''}`}
    >
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center">
          <Image src="/static/img/meta-icon.jpg" className="rounded-full w-7 h-7" alt="Logo" width={32} height={32} />
          <span className="font-bold text-xl ml-3">InvraNet</span>
        </Link>
      </div>

      <nav className="hidden md:flex space-x-4">
        <Link className='hover:text-slate-500' href="/">Home</Link>
        <Link className='hover:text-slate-500' href="/projects">Projects</Link>
        <Link className='hover:text-slate-500' href="/about">About</Link>
      </nav>

      <div className="md:hidden flex items-center">
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
        <div className="${isMenuOpen ? 'max-h-[99999999px]' : 'max-h-9'} absolute top-0 left-0 bg-white dark:bg-[#0a0a0a] w-screen h-screen rounded shadow-md md:hidden">
          <button className='font-bold text-3xl p-4 after:block after:absolute after:w-6 after:h-1 after:rounded-full after:bg-black dark:after:bg-white after:transition-transform after:duration-300 after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left' onClick={toggleMenu}>
            &times;
          </button>
          <nav className="flex flex-col space-y-2 p-16">
            <div className='flex items-center mb-8'>
              <img src="/static/img/meta-icon.jpg" className='h-14 w-14 rounded-full'></img>
              <h1 className='ml-4 text-3xl font-bold'>InvraNet</h1>
            </div>
            <div className='ml-8 flex flex-col gap-6'>
              <Link className='relative inline-block text-3xl after:block after:absolute after:w-full after:h-1 after:rounded-full after:bg-black dark:after:bg-white after:transition-transform after:duration-300 after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left' href="/" onClick={toggleMenu}>
                Home &#x3e;
              </Link>
              <Link className='relative inline-block text-3xl after:block after:absolute after:w-full after:h-1 after:rounded-full after:bg-black dark:after:bg-white after:transition-transform after:duration-300 after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left' href="/projects" onClick={toggleMenu}>
                Projects &#x3e;
              </Link>
              <Link className='relative inline-block text-3xl after:block after:absolute after:w-full after:h-1 after:rounded-full after:bg-black dark:after:bg-white after:transition-transform after:duration-300 after:origin-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-left' href="/about" onClick={toggleMenu}>
                About &#x3e;
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;