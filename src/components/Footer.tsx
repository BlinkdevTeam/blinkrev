// src/components/Footer.tsx
import Image from "next/image";
import React from "react";
import CBG from "../../public/assets/home/capabilities-bg.jpg";
import Alexander from "../../public/assets/footer/alexander-the-great.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#A30A24] text-white py-4">
        <div className="max-w-[1020px] container mx-auto grid grid-cols-2">
          <div className="flex justify-center">
            <Image src={Alexander} alt="alexander" />
          </div>
          <div className="flex flex-col justify-center space-y-3">
            <h1 className="text-3xl lg:text-4xl font-bold">
              Ideas made effective
            </h1>
            <p>
              When excellence is not an option but an obligation - let’s say we
              make it a habit, that’s when we create innovative solutions that
              drive society and creativity forward.
            </p>
          </div>
        </div>
      </footer>
      <footer
        className="flex justify-center items-center py-[75px] text-white"
        style={{
          backgroundImage: `url(${CBG.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1020px] container mx-auto">
          <div className="grid grid-cols-[2fr_1fr]">
            <div className="grid grid-rows-2 gap-24">
              <div className="space-y-4">
                <h6 className="font-inter uppercase">Don&apos;t be shy</h6>
                <h1 className="text-3xl lg:text-4xl font-bold">
                  Let us be your secret weapon.
                </h1>
                <p className="font-inter">
                  Feed our curiosity, collaborate with us, let&apos;s transform
                  concepts.
                </p>
                <button className="px-9 py-4 bg-[#A30A24] text-white transform -skew-x-[20deg]">
                  <div className="transform skew-x-[20deg]">
                    SEE OPEN POSITIONS
                  </div>
                </button>
              </div>
              <div className="space-y-4 uppercase">
                <h6>Get latest updates</h6>
                <button className="px-9 py-4 bg-[#A30A24] text-white transform -skew-x-[20deg]">
                  <div className="transform skew-x-[20deg]">
                    SEE OPEN POSITIONS
                  </div>
                </button>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-8">
              <div className="space-y-6">
                <h6 className="uppercase">Say Hello</h6>
                <div className="font-inter">
                  <p>hello@blinkcreativestudio.com</p>
                  <p>0949-993-7469</p>
                  <p>(049)-501-6681</p>
                </div>
              </div>
              <div className="space-y-6">
                <h6 className="uppercase">In the Blink area?</h6>
                <div className="font-inter">
                  <p>2F Left Wing, ES Plaza, Los Baños, Laguna</p>
                  <p>Monday - Friday</p>
                  <p>8:00 to 5:00 p.m.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] my-4 bg-[#808080]" />
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-4">
              <svg
                width="19"
                height="24"
                viewBox="0 0 19 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.49935 23.0348L0 23.9996V4.90225L3.49935 3.9375V23.0348Z"
                  fill="#808080"
                />
                <path
                  d="M8.74334 7.52931V6.49442L17.8118 3.99927V0L4.71777 3.60459V12.6337L17.8118 9.03343V5.03417L8.74334 7.52931Z"
                  fill="#808080"
                />
                <path
                  d="M13.7863 16.2076V15.1727L4.71777 17.6678V13.6686L17.8118 10.064V19.0973L4.71777 22.702V18.7027L13.7863 16.2076Z"
                  fill="#808080"
                />
              </svg>
              <p className="text-[#808080]">
                &copy; 2025 Blink Creative Studio
              </p>
            </div>
            <div className="flex space-x-4">
              {" "}
              <a
                href="https://www.facebook.com/theblinkcreativestudio/"
                target="_blank"
                aria-label="View our Facebook page."
              >
                <svg
                  className="path-primary"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 1.51807H15C13.6739 1.51807 12.4021 2.04485 11.4645 2.98253C10.5268 3.92021 10 5.19198 10 6.51807V9.51807H7V13.5181H10V21.5181H14V13.5181H17L18 9.51807H14V6.51807C14 6.25285 14.1054 5.9985 14.2929 5.81096C14.4804 5.62342 14.7348 5.51807 15 5.51807H18V1.51807Z"
                    fill="#808080"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/theblinkcreativestudio/"
                target="_blank"
                aria-label="View our Instagram page."
              >
                <svg
                  className="stroke-primary"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                    stroke="#808080"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.9997 11.3698C16.1231 12.2021 15.981 13.052 15.5935 13.7988C15.206 14.5456 14.5929 15.1512 13.8413 15.5295C13.0898 15.9077 12.2382 16.0394 11.4075 15.9057C10.5768 15.7721 9.80947 15.3799 9.21455 14.785C8.61962 14.1901 8.22744 13.4227 8.09377 12.592C7.96011 11.7614 8.09177 10.9097 8.47003 10.1582C8.84829 9.40667 9.45389 8.79355 10.2007 8.40605C10.9475 8.01856 11.7975 7.8764 12.6297 7.99981C13.4786 8.1257 14.2646 8.52128 14.8714 9.12812C15.4782 9.73496 15.8738 10.5209 15.9997 11.3698Z"
                    stroke="#808080"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 6.5H17.51"
                    stroke="#808080"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="mailto:hello@blinkcreativestudio.com"
                target="_blank"
                aria-label="Email us."
              >
                <svg
                  className="stroke-primary"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="#808080"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="#808080"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
