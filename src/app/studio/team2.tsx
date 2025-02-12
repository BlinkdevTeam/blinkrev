"use client";
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
  "Likas Aspiras\nFounder / CEO",
  "Randy Villanueva\nContent Production Specialist",
  "Aya Mulimbayan\nGraphic Artist",
  "Jayson San Agustin\nTarpaulin",
  "Gio Alvarez\nGraphic Artist",
  "Andrey Lapitan\nJunior Editor",
  "Ken Mirwell\nWeb Developer",
  "Lander Guevarra\nFront-End Developer",
  "Keilly Guevarra\nExecutive Assistant",
  "Janna Regina\nJunior Accounts Specialist",
  "Febbie Latoreno\nFinance Officer",
  "Dominic Mataba\nAdmin Officer",
  "Mildred Amado\nAdmin Assistant",
  "Serdolliv Villodres\nAdmin Assistant",
  "You?\nCreative Director",
  "You?\nArt Director",
  "You?\nVideo Editor",
  "You?\nJunior Accounts Specialist",
  "You?\nHR Associate",
  "You?\nAdministrative Assistant",
];

const ArrowFollower = () => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentImages, setCurrentImages] = useState<
    { id: number; image: any }[]
  >([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const imageSets = Array.from({ length: 20 }, (_, i) => ({ id: i + 1 }));
    setCurrentImages(
      imageSets.map((set) => ({ id: set.id, image: imageSetTemplate.up }))
    );
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

          return { id: entry.id, image: imageSetTemplate[direction] };
        })
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-[1020px] h-auto mb-24 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-[#a30a24] mb-8">Core Team</h1>
      <div className="grid grid-cols-6 grid-rows-4 gap-6 my-24">
        {currentImages.map((set, index) => (
          <div
            key={set.id}
            ref={(el) => (imageRefs.current[index] = el)}
            className="relative flex justify-center items-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index && (
              <div
                className="absolute -top-24 -right-4 bg-[#ece5ce] text-[#774f38] px-2 py-1 rounded text-sm whitespace-pre-line"
                style={{
                  boxShadow: "10px 10px 0px #83af9b",
                  fontFamily: '"Baloo 2", cursive',
                }}
              >
                {speechTexts[index]}
                <div
                  className="absolute top-20 -left-1 bg-[#ece5ce] text-[#774f38] p-1 rounded text-sm whitespace-pre-line"
                  style={{
                    boxShadow: "10px 10px 0px #83af9b",
                    fontFamily: '"Baloo 2", cursive',
                  }}
                ></div>
              </div>
            )}
            <img
              src={hoveredIndex === index ? BIRD.src : set.image.src}
              className={`w-32 h-32 rounded-full transition-all duration-0 ${
                hoveredIndex === index ? "" : "filter grayscale"
              }`}
              alt="Arrow"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArrowFollower;
