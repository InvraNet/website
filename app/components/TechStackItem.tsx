import { useState, useEffect } from "react";

interface TechStackItemProps {
  name: string;
  icon: string;
  mounted: boolean;
}

export function TechStackItem({ name, icon, mounted }: TechStackItemProps) {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (mounted) {
      const img = new Image();
      img.src = `/img/stack/${icon}-l.svg`;
      img.onerror = () => setError(true);
    }
  }, [icon, mounted]);

  if (error) {
    return (
      <div className="w-[100px] h-[100px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-sm font-medium text-gray-500 dark:text-gray-400">
        {name}
      </div>
    );
  }

  return (
    <div className="!mx-1 w-[100px] h-[100px]">
      <div
        className={`w-full h-full bg-[url('/img/stack/${icon}-l.svg')] dark:bg-[url('/img/stack/${icon}-d.svg')] bg-contain bg-center bg-no-repeat`}
        title={name}
      />
    </div>
  );
}
