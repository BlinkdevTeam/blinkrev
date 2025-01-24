import RBG from "../../../public/assets/capabilities/red-background.jpg";
import AVPI from "../../../public/assets/capabilities/AVP GIRL_00000.png";
import AVPI2 from "../../../public/assets/capabilities/Visual Prod_Glow.gif";
import Image from "next/image";

const services = [
  {
    title: "Screenwriting",
    description:
      "Crafting compelling screenplays, we serve as the foundational blueprint for your video projects. Our expertise guides not only the story's essence and dialogues but also influences the production schedule and cost, ensuring a well-defined vision for your project.",
  },
  {
    title: "Videography",
    description:
      "Our seasoned videographers excel in capturing high-quality footage, skillfully maximizing equipment to produce outstanding videos. A hallmark of our work is the meticulous attention to fundamental elements such as lights, sounds, shots, movements, framing, and composition, guaranteeing videos that meet the highest standards.",
  },
  {
    title: "Editing",
    description:
      "Bringing your narrative to life, we expertly piece together footage for seamless storytelling. Through the addition of music, effects, filters, and other enhancements, we elevate the overall impact of your video, creating a captivating viewing experience.",
  },
  {
    title: "Animation",
    description:
      "Specializing in a diverse array of animation techniques, including text graphics, motion graphics, 2D, 3D, and stop motion, our unique approach to storytelling adds a dynamic and visually engaging dimension to your content.",
  },
  {
    title: "Film Production",
    description:
      "From concept to completion, we handle every aspect of film production. Our team ensures a smooth and efficient process, turning your vision into a cinematic masterpiece.",
  },
];

const AVP = () => {
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
          <div className="hidden lg:flex lg:flex-col py-[72px]">
            <h2 className="text-[#f2f2f2] text-3xl lg:text-4xl font-bold">
              Audio-Visual Production
            </h2>
            <p className="py-4 text-[#f2f2f2]">
              Compared to articles, infographics and photos, video content is
              the most powerful tool to reach your audience and convey your
              message.
            </p>
          </div>
          <div className="hidden lg:flex justify-center items-center lg:relative">
            {/* <Image
              src={VP3}
              alt="let's get digital"
              className="absolute -bottom-[20px]"
            /> */}
            <Image
              src={AVPI2}
              alt="let's get digital"
              className="-mt-4 md:-mt-8 lg:absolute lg:bottom-0"
            />
            <Image
              src={AVPI}
              alt="let's get digital"
              className="-mt-4 md:-mt-8 lg:absolute lg:bottom-0"
            />
          </div>
          <div className="lg:hidden flex flex-col justify-center items-center relative">
            {/* <Image
              src={VP3}
              alt="let's get digital"
              className="absolute -bottom-[20px]"
            /> */}
            <Image
              src={AVPI2}
              alt="let's get digital"
              className="-mt-4 md:-mt-8"
            />
            <Image
              src={AVPI}
              alt="let's get digital"
              className="-mt-4 md:-mt-8 absolute bottom-0"
            />
          </div>
        </div>
      </section>
      <div className="lg:hidden flex flex-col py-[24px] px-4">
        <h2 className="text-[#a30a24] text-4xl font-bold">
          Audio-Visual Production
        </h2>
        <p className="py-4 font-inter text-[#191919]">
          Compared to articles, infographics and photos, video content is the
          most powerful tool to reach your audience and convey your message.
        </p>
      </div>
      <div className="max-w-[1020px] w-full grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-x-16 gap-y-5 px-4 mb-12">
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
export default AVP;
