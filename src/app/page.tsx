"use client";
import { useState } from 'react';
import Header from '../components/Header';

export default function Home() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const techStack = [
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', alt: 'React' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', alt: 'Node.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', alt: 'Express.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', alt: 'TailwindCSS' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', alt: 'Next.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/capacitor/capacitor-original.svg', alt: 'Capacitor.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg', alt: 'Electron.js' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', alt: 'C#' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', alt: 'C++' },
    { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/discordjs/discordjs-plain.svg', alt: 'Discord.js' },
  ];

  return (
    <div className="">
      <Header />
      <main className='p-10'>
        <h1 className='text-3xl font-bold text-center'>Welcome to my new and improved website!</h1>
        <p className='text-center text-wrap mt-2'>This new website is made with love, with React, Next, TypeScript, and more!</p>

        <h1 className='text-3xl mt-10 font-bold text-center'>My Tech Stack</h1>
        <p className='text-center text-wrap mt-2'>Here is a grid of the frameworks, and languages I use and know.</p>

        <div className='flex flex-wrap justify-center pl-20 pr-20 pt-5 gap-10'>
          {techStack.map((tech, index) => (
            <div
              key={index}
              className='relative flex items-center justify-center'
              onMouseEnter={() => setHoveredIcon(tech.alt)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <img
                draggable="false"
                src={tech.src}
                height={75}
                width={75}
                alt={tech.alt}
                className={`transition-transform duration-300 ${hoveredIcon === tech.alt ? 'scale-110' : ''}`}
              />
              {hoveredIcon === tech.alt && (
                <div className="z-40 text-center min-w-20 absolute bottom-[-53px] left-1/2 transform -translate-x-1/2 bg-white bg-opacity-40 backdrop-blur-md text-gray-900 p-2 rounded transition-opacity duration-300 opacity-100">
                  {tech.alt}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}