"use client";
// import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import UP from "../../../public/assets/works/up.jpg";
import UPRIGHT from "../../../public/assets/works/upright.jpg";
import RIGHT from "../../../public/assets/works/right.jpg";
import DOWNRIGHT from "../../../public/assets/works/downright.jpg";
import DOWN from "../../../public/assets/works/down.jpg";
import DOWNLEFT from "../../../public/assets/works/downleft.jpg";
import LEFT from "../../../public/assets/works/left.jpg";
import UPLEFT from "../../../public/assets/works/upleft.jpg";
import BIRD from "../../../public/assets/works/bird.jpg";
import "../globals.css";
import Image from "next/image";

const imageSetTemplate = {
  up: UP,
  upright: UPRIGHT,
  right: RIGHT,
  downright: DOWNRIGHT,
  down: DOWN,
  downleft: DOWNLEFT,
  left: LEFT,
  upleft: UPLEFT,
};

const speechTexts = [
  "Likas Aspiras",
  "Randy Villanueva",
  "Aya Mulimbayan",
  "Jayson San Agustin",
  "Gio Alvarez",
  "Andrey Lapitan",
  "Ken Mirwell",
  "Lander Guevarra",
  "Keilly Guevarra",
  "Janna Regina",
  "Febbie Latoreno",
  "Dominic Mataba",
  "Mildred Amado",
  "Serdolliv Villodres",
  "You? Creative Director",
  "You? Art Director",
  "You? Video Editor",
  "You? Junior Accounts Specialist",
  "You? HR Associate",
  "You? Administrative Assistant",
];

const entranceDirections = [
  "-translate-y-10",
  "translate-y-10",
  "-translate-x-10",
  "translate-x-10",
];

const ArrowFollower = () => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentImages, setCurrentImages] = useState<
    { id: number; image: any; visible: boolean; animation: string }[]
  >([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  //   const [isModalOpen, setIsModalOpen] = useState<boolean[]>(
  //     Array(20).fill(false)
  //   );

  //   const openModal = (index: number) => {
  //     setIsModalOpen((prev) => prev.map((val, i) => (i === index ? true : val)));
  //   };

  //   const closeModal = (index: number) => {
  //     setIsModalOpen((prev) => prev.map((val, i) => (i === index ? false : val)));
  //   };

  useEffect(() => {
    const imageSets = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      image: imageSetTemplate.up,
      visible: false,
      animation:
        entranceDirections[
          Math.floor(Math.random() * entranceDirections.length)
        ], // Assign random entrance direction
    }));

    imageSets.forEach((set, i) => {
      setTimeout(() => {
        setCurrentImages((prevImages) => [
          ...prevImages,
          { ...set, visible: true },
        ]);
      }, i * 200); // Delay each image appearance by 200ms
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCurrentImages((prevImages) =>
        prevImages.map((entry, index) => {
          const element = imageRefs.current[index];
          if (!element) return entry;

          const rect = element.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const dx = e.clientX - centerX;
          const dy = e.clientY - centerY;
          const angle = Math.atan2(dy, dx) * (180 / Math.PI);

          let direction = "right";
          if (angle >= -22.5 && angle < 22.5) direction = "right";
          else if (angle >= 22.5 && angle < 67.5) direction = "downright";
          else if (angle >= 67.5 && angle < 112.5) direction = "down";
          else if (angle >= 112.5 && angle < 157.5) direction = "downleft";
          else if (angle >= 157.5 || angle < -157.5) direction = "left";
          else if (angle >= -157.5 && angle < -112.5) direction = "upleft";
          else if (angle >= -112.5 && angle < -67.5) direction = "up";
          else if (angle >= -67.5 && angle < -22.5) direction = "upright";

          return { ...entry, image: imageSetTemplate[direction] };
        })
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-[1020px] h-auto my-24 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-[#a30a24] mb-8">Core Team</h1>
      <div className="grid grid-cols-6 grid-rows-4 gap-8 my-24">
        {currentImages.map((set, index) => (
          <div
            key={set.id}
            ref={(el) => (imageRefs.current[index] = el)}
            className={`relative flex justify-center items-center transition-all duration-500 ${
              set.visible
                ? "opacity-100 translate-x-0 translate-y-0"
                : `opacity-0 ${set.animation}`
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index && (
              <div
                className="absolute -top-10 left-0 bg-[#a30a24] text-[#ffffff] px-3 py-1 rounded text-sm"
                style={{
                  whiteSpace: "nowrap", // Prevents forced wrapping
                  maxWidth: "fit-content", // Expands dynamically based on content
                  boxShadow: "8px 8px 4px #808080",
                  fontFamily: '"Baloo 2", cursive',
                }}
              >
                {speechTexts[index]}
                {/* Shadow Triangle */}
                <div className="absolute -bottom-3 left-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#808080] opacity-40"></div>
                {/* Main Triangle */}
                <div className="absolute -bottom-2 left-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#a30a24]"></div>
              </div>
            )}
            <Image
              src={hoveredIndex === index ? BIRD.src : set.image.src}
              className={`w-24 h-24 rounded-xl ${
                hoveredIndex === index ? "" : "filter grayscale"
              }`}
              style={{ objectFit: "cover" }}
              alt="Arrow"
              width={96}
              height={96}
              //   onMouseEnter={() => setHoveredIndex(index)}
              //   onMouseLeave={() => setHoveredIndex(null)}
              //   onClick={() => openModal(index)}
            />
            {/* Modal with Zoom-in Animation */}
            {/* {isModalOpen[index] && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <motion.div
                  initial={{ scale: 0.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.1, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-white p-6 rounded-lg shadow-lg relative max-w-lg w-full"
                >
                  <button
                    className="absolute top-2 right-2 text-red-500 text-2xl"
                    onClick={() => closeModal(index)}
                  >
                    ✖
                  </button>
                  <h2 className="text-xl font-bold">Member {index + 1}</h2>
                  <Image
                    src={BIRD.src}
                    width={200}
                    height={200}
                    className="w-full h-auto rounded-lg mt-4"
                    alt="Modal Image"
                  />
                  <p className="mt-4 text-gray-700">
                    More information about this person.
                  </p>
                </motion.div>
              </div>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArrowFollower;
