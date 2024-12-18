import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

type CarouselContextType = {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  images: string[];
};

const CarouselContext = createContext<CarouselContextType | undefined>(
  undefined
);

const useCarousel = () => {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a CarouselProvider");
  }
  return context;
};

export const CarouselProvider: React.FC<{
  images: string[];
  children: React.ReactNode;
}> = ({ images, children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % (images.length * 3));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <CarouselContext.Provider value={{ activeIndex, setActiveIndex, images }}>
      {children}
    </CarouselContext.Provider>
  );
};

export const CarouselImage: React.FC = () => {
  const { activeIndex, images } = useCarousel();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const totalImages = images.length * 3;
      const newPosition = (activeIndex % images.length) * (100 / totalImages);
      containerRef.current.style.transform = `translateX(-${newPosition}%)`;

      if (activeIndex >= images.length * 2) {
        setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.style.transition = "none";
            containerRef.current.style.transform = `translateX(-${
              (activeIndex % images.length) * (100 / totalImages)
            }%)`;
            setTimeout(() => {
              if (containerRef.current) {
                containerRef.current.style.transition =
                  "transform 500ms ease-in-out";
              }
            }, 50);
          }
        }, 500);
      }
    }
  }, [activeIndex, images.length]);

  const tripleImages = [...images, ...images, ...images];

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={containerRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{ width: `${tripleImages.length * 100}%` }}
      >
        {tripleImages.map((src, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex justify-center items-center"
          >
            <img
              src={src}
              alt={`Tech stack item ${(index % images.length) + 1}`}
              className="w-[100px] h-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
