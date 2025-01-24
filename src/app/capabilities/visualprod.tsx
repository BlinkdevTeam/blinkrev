import RBG from "../../../public/assets/capabilities/red-background.jpg";
import VP from "../../../public/assets/capabilities//Visual Prod 2.png";
import VP2 from "../../../public/assets/capabilities/Visual Prod_Flowers.gif";
import VP3 from "../../../public/assets/capabilities/Visual Prod_Glow.gif";
import Image from "next/image";

const services = [
  {
    title: "Photography",
    description:
      "Our expertise spans portraits, fashion, editorial, and commercial photography. We provide a comprehensive package, offering both studio and on-site photography services.",
  },
  {
    title: "Photo Editing",
    description:
      "Experience professional photo enhancement, restoration, and manipulation to elevate visual quality and appeal.",
  },
  {
    title: "Graphic Design",
    description:
      "We apply a prolific understanding of visual design principles, including layout, typography, color, shape, and size, among others.",
  },
  {
    title: "Web Design",
    description:
      "We craft websites with a cohesive layout, seamless navigation, and appealing aesthetics, deliberately designed with the user experience in mind.",
  },
];

const VisualProd = () => {
  return (
    <>
      <section
        className="flex justify-center items-center mt-24 lg:mt-36 mb-12 w-screen"
        style={{
          backgroundImage: `url(${RBG.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1020px] w-full lg:grid lg:grid-cols-2 px-4">
          <div className="hidden lg:flex justify-center items-center lg:relative">
            <Image
              src={VP3}
              alt="let's get digital"
              className="absolute -bottom-[20px]"
            />
              <Image
                src={VP2}
                alt="let's get digital"
                className="-mt-4 md:-mt-8 lg:absolute lg:bottom-0"
              />
            <Image
              src={VP}
              alt="let's get digital"
              className="-mt-4 md:-mt-8 lg:absolute lg:bottom-0"
            />
          </div>
          <div className="lg:hidden flex flex-col justify-center items-center relative">
            <Image
              src={VP3}
              alt="let's get digital"
              className="absolute -bottom-[20px]"
            />
            <Image
              src={VP}
              alt="let's get digital"
              className="-mt-4 md:-mt-8 absolute bottom-0"
            />
            <Image
              src={VP2}
              alt="let's get digital"
              className="-mt-4 md:-mt-8 z-50"
            />
          </div>
          <div className="hidden lg:flex lg:flex-col py-[72px]">
            <h2 className="text-[#f2f2f2] text-3xl lg:text-4xl font-bold">
              Visual Production
            </h2>
            <p className="py-4 text-[#f2f2f2]">
              Our visual creations, including photography, graphic design,
              illustrations, and web design, are distinguished for their ability
              to captivate hearts and minds. We are versatile in various visual
              narrative formats.
            </p>
          </div>
        </div>
      </section>
      <div className="lg:hidden flex flex-col py-[24px] px-4">
        <h2 className="text-[#a30a24] text-4xl font-bold">Visual Production</h2>
        <p className="py-4 font-inter text-[#191919]">
          Our visual creations, including photography, graphic design,
          illustrations, and web design, are distinguished for their ability to
          captivate hearts and minds. We are versatile in various visual
          narrative formats.
        </p>
      </div>
      <div className="max-w-[1020px] w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-x-16 gap-y-5 px-4 mb-12">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col gap-3">
            <h3 className="text-md text-[#a30a24] font-bold">
              {service.title}
            </h3>
            <p className="text-sm font-inter text-[#191919]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
export default VisualProd;
