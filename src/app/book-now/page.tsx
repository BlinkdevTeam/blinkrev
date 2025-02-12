"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import Image from "next/image";

const slideData = [
  {
    image: "/assets/appointment/studio_rental.png",
    title: "Studio Rental",
    price: "₱ 699.00 /hr",
    description:
      "Celebrate your bond with a couples studio photoshoot! Whether it’s an engagement, an anniversary, a moment with your bestie, or simply a way to capture your relationship, our package is designed to highlight your connection. Book your session today and let us preserve your most special moments together!",
    backgroundColor: "#3B82F6",
    dropdownOptions: [],
  },
  {
    image: "/assets/appointment/Solo.png",
    title: "Solo Package",
    description: "This is the second slide",
    backgroundColor: "#10B981",
    dropdownOptions: ["Book Now", "View Details", "Share"],
  },
  {
    image: "/assets/appointment/Couple.png",
    title: "Couple Package",
    description: "This is the third slide",
    backgroundColor: "#F59E0B",
    dropdownOptions: ["Book Now", "View Details", "Share"],
  },
  {
    image: "/assets/appointment/family.png",
    title: "Family Package",
    description: "This is the fourth slide",
    backgroundColor: "#8B5CF6",
    dropdownOptions: ["Book Now", "View Details", "Share"],
  },
  {
    image: "/assets/appointment/graduation.png",
    title: "Graduation Package",
    description: "This is the fifth slide",
    backgroundColor: "#8f1c1c",
    dropdownOptions: ["Book Now", "View Details", "Share"],
  },
  {
    image: "/assets/appointment/UP_graduation.png",
    title: "UP Gradution Package",
    description: "This is the sixth slide",
    backgroundColor: "#3B82F6",
    dropdownOptions: ["Book Now", "View Details", "Share"],
  },
  {
    image: "/assets/appointment/maternity.png",
    title: "Maternity Package",
    description: "This is the seventh slide",
    backgroundColor: "#ffffff",
    dropdownOptions: ["Book Now", "View Details", "Share"],
  },
  {
    image: "/assets/appointment/baby_milestone.png",
    title: "Baby Milestone Package",
    description: "This is the seventh slide",
    backgroundColor: "#ffffff",
    dropdownOptions: ["Book Now", "View Details", "Share"],
  },
  {
    image: "/assets/appointment/kiddie.png",
    title: "Kiddie Package",
    description: "This is the seventh slide",
    backgroundColor: "#ffffff",
    dropdownOptions: ["Book Now", "View Details", "Share"],
  },
  {
    image: "/assets/appointment/wedding.png",
    title: "Wedding Package",
    description: "This is the seventh slide",
    backgroundColor: "#ffffff",
    dropdownOptions: ["Book Now", "View Details", "Share"],
  },
  {
    image: "/assets/appointment/debut.png",
    title: "Debut Package",
    description: "This is the seventh slide",
    backgroundColor: "#ffffff",
    dropdownOptions: ["Book Now", "View Details", "Share"],
  },
  {
    image: "/assets/appointment/Mernels.png",
    title: "Sweet Holiday Moments",
    description: "This is the seventh slide",
    backgroundColor: "#ffffff",
    dropdownOptions: ["Book Now", "View Details", "Share"],
  },
];

const MaterialYouSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  return (
    <div className="w-screen h-auto bg-gray-300 flex justify-center items-center mx-auto mt-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={400} // Smaller space for better alignment
        slidesPerView={2} // Allows dynamic width adjustment
        // centeredSlides={true}
        loop={true} // Enables infinite looping
        speed={600} // Smooth transition speed
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        grabCursor={true}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Updates active slide index
        className="rounded-2xl shadow-lg max-w-screen-2xl w-full h-auto"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div
              className={`p-4 text-white text-start rounded-2xl transition-all duration-300 flex flex-row items-center ${
                index === activeIndex
                  ? "w-[950px] h-auto scale-100 opacity-100 pointer-events-auto"
                  : "w-auto h-auto scale-75 opacity-95 pointer-events-none"
              }`}
              style={{
                backgroundColor: slide.backgroundColor,
              }}
            >
              <Image src={slide.image} alt="image" width={500} height={300} />
              <div className="ml-5">
                <h3
                  className={`text-2xl transition-all duration-300 ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {slide.title}
                </h3>
                {/* Dropdown Button */}
                <div className="relative inline-block text-left">
                  <button
                    type="button"
                    className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 ${
                      index === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={() =>
                      setDropdownOpen(dropdownOpen === index ? null : index)
                    }
                  >
                    Select Packages Options
                    <svg
                      className="-mr-1 size-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {dropdownOpen === index && (
                    <div className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white ring-1 shadow-lg ring-black/5">
                      <div className="py-1">
                        {slide.dropdownOptions.map((option, optIndex) => (
                          <a
                            key={optIndex}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {option}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={`transition-all duration-300 ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div>{slide.price}</div>
                  <div>{slide.description}</div>
                  <button className="px-9 py-4 bg-[#A30A24] text-white transform -skew-x-[20deg]">
                    <div className="transform skew-x-[20deg]">
                      Book Now
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MaterialYouSwiper;
