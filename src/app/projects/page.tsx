"use client";
import { useEffect, useState } from 'react';
import Header from '../../components/Header';

type Repo = {
  id: number;
  name: string;
  description?: string;
  html_url: string;
  stargazers_count: number;
  language?: string;
  open_issues_count: number;
};

type ProjectTab = 'School Portal' | 'Dotfiles' | 'github-discord';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectTab>('School Portal');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '' });
  const [repositories, setRepositories] = useState<Repo[]>([]);

  const tabs: ProjectTab[] = ['School Portal', 'Dotfiles', 'github-discord'];

  const projectDetails: Record<ProjectTab, JSX.Element> = {
    'School Portal': (
      <div>
        <h2 className='text-2xl font-semibold'>School Portal</h2>
        <p>A project curated for students inside of New South Wales.</p>
        <div className='flex flex-wrap gap-4 rounded-lg justify-center'>
          {[ 
            { src: "/static/img/dis/school-portal_1.png", alt: "Image of the Configurator" },
            { src: "/static/img/dis/school-portal_2.png", alt: "Image of the Home Page for Parramatta Marist." },
            { src: "/static/img/dis/school-portal_3.png", alt: "Image of Settings." }
          ].map((image) => (
            <img
              key={image.src}
              className="mt-4 rounded-lg w-3/12 hover:scale-110 ease-in-out transition-transform cursor-pointer"
              src={image.src}
              alt={image.alt}
              onClick={() => {
                setSelectedImage(image);
                setIsModalOpen(true);
              }}
            />
          ))}
        </div>
      </div>
    ),
    'Dotfiles': (
      <div>
        <h2 className='text-2xl font-semibold'>Dotfiles</h2>
        <p>This repo contains a vast multitude of different configurations for my Linux, Windows, and macOS machines.</p>
      </div>
    ),
    'github-discord': (
      <div>
        <h2 className='text-2xl font-semibold'>GitHub Discord Bot</h2>
        <p>This bot integrates GitHub notifications with Discord channels...</p>
      </div>
    ),
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage({ src: '', alt: '' });
  };

  const kickToSite = (repo: Repo) => {
    window.open(repo.html_url, "_blank");
  };

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/InvraNet/repos');
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <div>
      <Header />
      <main className='p-10 flex flex-col'>
        <h1 className='font-bold text-3xl text-center'>Project Starboard</h1>
        <div className='inline-flex justify-center p-1 mt-4 rounded-full bg-zinc-800 mx-auto'>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 rounded-full transition-colors duration-300 
                ${activeTab === tab ? 'bg-blue-500 text-white' : 'text-gray-200 hover:bg-zinc-600'}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-4 p-8 text-center bg-neutral-900 rounded-lg border-[1px] border-[#333333]">
          {projectDetails[activeTab]}
        </div>
        
        <h1 className='font-bold text-3xl text-center mt-10'>Personal Projects</h1>
        <p className="text-center">All these projects listed below are sourced from my GitHub profile which are public.</p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {repositories.map(repo => (
            <div key={repo.id} className="mt-4 p-4 text-center bg-neutral-900 rounded-lg border-[1px] border-[#333333] flex flex-col">
              <h3 className='font-semibold text-lg'>{repo.name}</h3>
              <p className='text-gray-400'>{repo.description || "No description provided."}</p>
              <div className="flex gap-5 mt-5">
                <p className='text-gray-400'>Stars: {repo.stargazers_count}</p>
                <p className='text-gray-400'>Language: {repo.language}</p>
                <p className='text-gray-400'>Open Issues: {repo.open_issues_count}</p>
              </div>
              <div className="mt-auto flex justify-end">
                <button 
                  onClick={() => kickToSite(repo)}
                  className='bg-blue-500 p-3 rounded-lg hover:underline mt-5 flex gap-2'>
                  Github
                </button>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <button onClick={closeModal} className="absolute top-2 left-2 text-white font-bold text-3xl">
              &times;
            </button>
            <div className="relative bg-neutral-800 p-4 rounded-lg">
              <img className="max-w-[80vw] max-h-[80vh] object-contain" src={selectedImage.src} alt={selectedImage.alt} />
              <p className="text-center text-white font-bold mt-2">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}