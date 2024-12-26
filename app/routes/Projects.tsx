"use client";
import { useEffect, useState, useRef } from "react";
import { CodeIcon, GithubIcon, StarIcon } from "lucide-react";

type Repo = {
  id: number;
  name: string;
  description?: string;
  html_url: string;
  stargazers_count: number;
  language?: string;
  open_issues_count: number;
};

export default function Projects() {
  const [repositories, setRepositories] = useState<Repo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState<Repo | null>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (isModalOpen && e.key === "g" && selectedRepo) {
      window.open(selectedRepo.html_url, "_blank");
    }
  };

  const openModal = (repo: Repo) => {
    setSelectedRepo(repo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRepo(null);
  };

  const isEmpty = (value: string | undefined) => {
    return value !== undefined && value !== null && value !== "";
  };

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/InvraNet/repos"
        );
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };
    fetchRepositories();
  }, []);

  useEffect(() => {
    // Attach the global keydown event listener
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup on unmount or when modal closes
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, selectedRepo]); // Re-attach only when modal state or selectedRepo changes

  return (
    <div>
      <main className="p-10 flex flex-col">
        <h1 className="text-3xl font-semibold mb-2 text-center text-purple-500 dark:text-[rgb(138,43,226)]">
          Personal Projects
        </h1>
        <p className="text-center">
          All these projects listed below are sourced from my GitHub profile
          which are public.
        </p>
        <div className="flex flex-wrap justify-center mt-6 gap-6 select-none">
          {repositories.map((repo) => (
            <div
              key={repo.id}
              className="p-4 bg-slate-100 border-1 border-zinc-100 dark:border-zinc-800 dark:bg-neutral-900 rounded-lg border-[1px] border-slate-200 dark:border-[#333333] block sm:flex-row items-start justify-between w-full sm:w-64 lg:w-80 cursor-pointer"
              onClick={() => openModal(repo)}
            >
              {/* Top of the Card: Title and Information */}
              <div className="flex justify-between mb-4">
                <h1 className="text-xl font-semibold">{repo.name}</h1>
              </div>

              {/* Bottom of the Card: Description */}
              <p className="mt-auto text-left text-sm text-gray-600 dark:text-gray-400">
                {isEmpty(repo.description)
                  ? repo.description
                  : "This Git repository doesn't contain an available description."}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && selectedRepo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onMouseDown={closeModal}
        >
          <div
            className="bg-white dark:bg-neutral-800 rounded-md p-6 w-full sm:w-96"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start select-none">
              <h2 className="text-xl font-semibold">{selectedRepo.name}</h2>
              <button
                className="text-gray-600 dark:text-gray-300"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>
            <div className="h-[2px] w-full bg-zinc-800 my-1" />
            <p className="text-sm text-gray-700 dark:text-gray-400 mb-1">
              {isEmpty(selectedRepo.description)
                ? selectedRepo.description
                : "This Git repository doesn't contain an available description."}
            </p>
            <div className="block gap-2 select-none">
              <span className="flex gap-3">
                <StarIcon width={15} /> {selectedRepo.stargazers_count}
              </span>
              <span className="flex gap-3 select-none">
                <CodeIcon width={13} />{" "}
                {selectedRepo.language ? selectedRepo.language : "Unknown"}
              </span>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => window.open(selectedRepo.html_url, "_blank")}
                className="py-[.35rem] px-2 bg-purple-600 text-white border-purple-500 border-[1px] flex gap-2 items-center text-sm"
              >
                <kbd className="px-[6px] border-purple-400 border-2">G</kbd>
                View Repository
                <GithubIcon height={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
