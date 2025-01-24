"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const card = [
  {
    id: 1,
    title: "Title 1",
    bodyText: "Body text for Slide 1",
    label: "Slide 1",
  },
  {
    id: 2,
    title: "Title 2",
    bodyText: "Body text for Slide 2",
    label: "Slide 2",
  },
  {
    id: 3,
    title: "Title 3",
    bodyText: "Body text for Slide 3",
    label: "Slide 3",
  },
  {
    id: 4,
    title: "Title 4",
    bodyText: "Body text for Slide 4",
    label: "Slide 4",
  },
  {
    id: 5,
    title: "Title 5",
    bodyText: "Body text for Slide 5",
    label: "Slide 5",
  },
];

const NewRelease = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full py-[60px] max-w-[1020px] text-start text-2xl text-black font-bold">
          New Release
        </div>
        <div className="w-full pb-[60px] max-w-[1020px] h-auto relative">
          <Swiper
            loop={true}
            slidesPerView={3}
            spaceBetween={60}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              1020: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              340: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
            }}
            className="swiper-container relative"
          >
            {card.map(({ id, title, bodyText, label }) => (
              <SwiperSlide key={id}>
                <div className="bg-indigo-50 rounded-2xl h-64 flex justify-center items-center">
                  <span className="text-2xl font-semibold text-indigo-600">
                    {label}
                  </span>
                </div>
                <h1 className="mt-4 font-bold text-xl text-black">{title}</h1>
                <p className="mt-4 text-gray-700">{bodyText}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default NewRelease;
