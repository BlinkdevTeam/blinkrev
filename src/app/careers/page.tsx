import Image from "next/image";
import WorksHeroImage from "../../../public/assets/careers/Career_Page_HeroImage 1.png";
import Image1 from "../../../public/assets/careers/group1.jpg";
import Image2 from "../../../public/assets/careers/group2.jpg";
import Image3 from "../../../public/assets/careers/group3.jpg";
import Image4 from "../../../public/assets/careers/group4.jpg";
import Image5 from "../../../public/assets/careers/group5.jpg";
import Image6 from "../../../public/assets/careers/group6.jpg";
import SVG1 from "../../../public/assets/careers/Benefits Packages Icon 1.svg";
import SVG2 from "../../../public/assets/careers/Personal Growth_Icon.svg";
import SVG3 from "../../../public/assets/careers/Inclusive Culture_Icon.svg";
import SVG4 from "../../../public/assets/careers/Competitive Salary 1.svg";
import SVG5 from "../../../public/assets/careers/Fun Staff Events_Icon.svg";
import SVG6 from "../../../public/assets/careers/Free Food_Icon2 1.svg";

const perks = [
  { icon: SVG1, title: "Benefits Package" },
  { icon: SVG2, title: "Professional Growth" },
  { icon: SVG3, title: "Inclusive Culture" },
  { icon: SVG4, title: "Competitive Salary" },
  { icon: SVG5, title: "Fun Staff Events" },
  { icon: SVG6, title: "Free Coffee" },
];

const teamImages = [Image1, Image2, Image3, Image4, Image5, Image6];

const PerkItem = ({ icon, title }: { icon: never; title: string }) => (
  <div className="flex items-center gap-4 bg-[#A30A24] text-white px-6 py-4 transform -skew-x-[20deg]">
    <Image
      src={icon}
      alt={title}
      className="w-10 h-10 transform skew-x-[20deg]"
    />
    <h4 className="transform skew-x-[20deg]">{title}</h4>
  </div>
);

const CareersPage = () => {
  return (
    <section className="flex flex-col items-center p-6">
      <div className="max-w-[1020px] flex flex-col gap-12">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-4 items-center py-20">
          <div className="space-y-10">
            <h1 className="text-6xl font-bold text-[#a30a24]">Work in BCS</h1>
            <p>
              Join the creative hub of Blink Creative Studio, where innovation
              meets imagination! Based in vibrant Los Baños, Laguna, we
              specialize in design, production, and marketing. At Blink, we
              believe in the power of creativity and collaboration to shape
              extraordinary experiences.
            </p>
            <button className="px-9 py-4 bg-[#A30A24] text-white transform -skew-x-[20deg]">
              <div className="transform skew-x-[20deg]">SEE OPEN POSITIONS</div>
            </button>
          </div>
          <Image src={WorksHeroImage} alt="Careers at BCS" />
        </div>

        {/* Why Work With Us */}
        <div className="text-center py-12">
          <h1 className="text-6xl mb-6">Why work with us?</h1>
          <ul className="list-disc text-left space-y-4">
            <li>
              <strong>Passionate Team:</strong> Join a dedicated team of
              creative strategists, consultants, artists, storytellers, and
              technicians who trhive on pushing boundaries and creating
              impactful work.
            </li>
            <li>
              <strong>Collaborative Environment:</strong> Experience a workplace
              where collaboration is not just encouraged but celebrated. We
              believe in the strength of diverse perspectives coming together to
              create something extraordinary.
            </li>
            <li>
              <strong>Continuous Learning:</strong> Our commitment to growth is
              reflected in our emphasis on continuous learning. At Blink,
              you&apos;ll have the opportunity to expand your skills and stay at
              the forefront of industry trends.
            </li>
            <li>
              <strong>Exciting Projects:</strong> From digital marketing
              campaigns to film production, our portfolio is diverse and always
              evolving. Be a part of exciting projects that challenge and
              inspire you.Work on diverse campaigns, from digital marketing to
              film production.
            </li>
          </ul>
        </div>

        {/* Perks and Benefits */}
        <div className="text-center py-12">
          <h1 className="text-6xl text-[#a30a24] font-bold">
            Perks <span className="font-normal text-black">and</span> Benefits
          </h1>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {perks.map((perk, index) => (
              <PerkItem key={index} icon={perk.icon} title={perk.title} />
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="flex flex-col gap-8 text-center py-12">
          <h1 className="text-6xl">
            The <span className="text-[#a30a24] font-bold">Coolest Kids</span>{" "}
            on the Block
          </h1>
          <p className="mt-4">
            Our team of marketing experts and creative minds fuels a spectrum of
            innovative strategies.
            <br /> We’re excited to meet passionate individuals who share our
            vision.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-6">
            {teamImages.map((img, index) => (
              <div key={index} className="w-full h-64 relative">
                <Image
                  src={img}
                  alt={`Team member ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12 space-y-10">
          <h1 className="text-6xl">
            Level Up in a{" "}
            <span className="text-[#a30a24] font-bold">Blink</span>
          </h1>
          <p className="mt-4">
            Turn visions into realities. Join us in pushing the boundaries of
            creativity!
          </p>
          <button className="px-9 py-3 bg-[#A30A24] text-white transform -skew-x-[20deg]">
            <div className="transform skew-x-[20deg]">SEE OPEN POSITIONS</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareersPage;
