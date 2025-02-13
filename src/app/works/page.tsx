"use client";
import { useEffect, useState, useRef } from "react";

const ArrowFollower = () => {
  const content = [
    {
      id: 1,
      src: "/assets/events/herspective.jpg",
      alt: "Image 1",
      title: "hello world!",
      description: "lorem ipsum",
      tags: "web / design / graphics",
    },
    {
      id: 2,
      src: "/assets/events/herspective.jpg",
      alt: "Image 2",
      title: "hello world!",
      description: "lorem ipsum",
      tags: "web / design / graphics",
    },
    {
      id: 3,
      src: "/assets/events/herspective.jpg",
      alt: "Image 3",
      title: "hello world!",
      description: "lorem ipsum",
      tags: "web / design / graphics",
    },
    {
      id: 4,
      src: "/assets/events/herspective.jpg",
      alt: "Image 4",
      title: "hello world!",
      description: "lorem ipsum",
      tags: "web / design / graphics",
    },
    {
      id: 5,
      src: "/assets/events/herspective.jpg",
      alt: "Image 5",
      title: "hello world!",
      description: "lorem ipsum",
      tags: "web / design / graphics",
    },
    {
      id: 6,
      src: "/assets/events/herspective.jpg",
      alt: "Image 6",
      title: "hello world!",
      description: "lorem ipsum",
      tags: "web / design / graphics",
    },
    {
      id: 7,
      src: "/assets/events/herspective.jpg",
      alt: "Image 7",
      title: "hello world!",
      description: "lorem ipsum",
      tags: "web / design / graphics",
    },
    {
      id: 8,
      src: "/assets/events/herspective.jpg",
      alt: "Image 8",
      title: "hello world!",
      description: "lorem ipsum",
      tags: "web / design / graphics",
    },
    {
      id: 9,
      src: "/assets/events/herspective.jpg",
      alt: "Image 9",
      title: "hello world!",
      description: "lorem ipsum",
      tags: "web / design / graphics",
    },
    {
      id: 10,
      src: "/assets/events/herspective.jpg",
      alt: "Image 10",
      title: "hello world!",
      description: "lorem ipsum",
      tags: "web / design / graphics",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center my-20 h-auto">
      <div className="flex w-[1020px] justify-start items-start text-start">
        <h1 className="text-[104px]">ALL WORK</h1>
      </div>
      <div className="grid grid-cols-3 gap-x-4 gap-y-16 w-[1020px] h-full justify-center items-center text-center">
        {content.map((item) => (
          <div key={item.id} className="space-y-2">
            <img src={item.src} alt={item.alt} className="w-full h-auto" />
            <p className="text-sm">{item.tags}</p>
            <div className="text-start">
              <h2 className="text-lg font-bold uppercase">{item.title}</h2>
              <p className="text-sm uppercase">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArrowFollower;
