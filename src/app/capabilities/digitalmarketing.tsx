import RBG from "../../../public/assets/capabilities/red-background.jpg";
import LDG from "../../../public/assets/capabilities//Digimarket.png";
import LDG2 from "../../../public/assets/capabilities/digim_emojis.gif";
import LDG3 from "../../../public/assets/capabilities/digim_glow.gif";
// import Gradient from "../../../public/assets/capabilities/gradient.png";
import Image from "next/image";

const services = [
  {
    title: "Search Engine Optimization",
    description:
      "Enhance the online visibility of your website and social media accounts through organic and paid searches.",
  },
  {
    title: "Content Curation",
    description:
      "Craft compelling articles, stories, taglines, and copy to effectively convey your brand's message. We possess the ability to write with the right tone, style, and language tailored to your target audience.",
  },
  {
    title: "Social Media Marketing",
    description:
      "Connect and engage with your target audience across major social media platforms. Execute social media campaigns aligned with your overall branding strategy and objectives.",
  },
  {
    title: "Influencer Marketing",
    description:
      "Leverage online users and consumers’ trust in influencers. Invest and build partnerships with the right influences to promote and endorse your brand, product, and company.",
  },
  {
    title: "Analysis and Tracking",
    description:
      "Generate reports with measurable objectives and indicators to clearly assess ROIs, leads and conversions. We will help you analyze, track and troubleshoot your marketing campaigns across different platforms.",
  },
  {
    title: "Monitoring of Sponsored Ads",
    description:
      "Optimize your sponsored ads with close monitoring, analysis, and troubleshooting of key indicators to strategize and maximize ad placements.",
  },
  {
    title: "Web Development",
    description:
      "Increase your credibility with a reliable, functional, and interactive website. One that is accessible to a range of devices such as smartphones, tablets, and laptops.",
  },
];

const DigitalMarketing = () => {
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
              src={LDG3}
              alt="let's get digital"
              className="absolute -bottom-[20px]"
            />
            <Image
              src={LDG}
              alt="let's get digital"
              className="-mt-4 md:-mt-8 lg:absolute lg:bottom-0"
            />
            <Image
              src={LDG2}
              alt="let's get digital"
              className="-mt-4 md:-mt-8 lg:absolute lg:bottom-0"
            />
          </div>
          <div className="lg:hidden flex flex-col justify-center items-center relative">
            <Image
              src={LDG3}
              alt="let's get digital"
              className="absolute -bottom-[20px]"
            />
            <Image
              src={LDG}
              alt="let's get digital"
              className="-mt-4 md:-mt-8 absolute bottom-0"
            />
            <Image
              src={LDG2}
              alt="let's get digital"
              className="-mt-4 md:-mt-8 z-50"
            />
          </div>
          <div className="hidden lg:flex lg:flex-col py-[88px]">
            <h2 className="text-[#f2f2f2] text-3xl lg:text-4xl font-bold">
              Digital Marketing
            </h2>
            <p className="py-4 text-[#f2f2f2]">
              With in-depth market research, we execute data-driven strategies
              to deliver effective marketing campaigns and experiences to your
              target audience.
            </p>
          </div>
        </div>
      </section>
      <div className="lg:hidden flex flex-col py-[24px] px-4">
        <h2 className="text-[#a30a24] text-4xl font-bold">Digital Marketing</h2>
        <p className="py-4 font-inter text-[#191919]">
          With in-depth market research, we execute data-driven strategies to
          deliver effective marketing campaigns and experiences to your target
          audience.
        </p>
      </div>
      <div className="max-w-[1020px] w-full grid grid-cols-1 md:grid-cols-2 grid-rows-4 gap-x-16 gap-y-5 px-4 mb-12">
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
export default DigitalMarketing;
