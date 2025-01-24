import RBG from "../../../public/assets/capabilities/red-background.jpg";
import EMP from "../../../public/assets/capabilities/Events.png";
import EMP2 from "../../../public/assets/capabilities/Events_Icon.gif";
import EMP3 from "../../../public/assets/capabilities/Events_Glow.gif";
import Image from "next/image";

const services = [
  {
    title: "Events Production",
    description:
      "Let us bring your vision to life. From conceptualization to planning to execution, we take care of every detail to ensure your event is seamlessly produced and leaves a lasting impression.",
  },
  {
    title: "Photo & Video Coverage",
    description:
      "Preserve precious memories of celebrations, traditions, and milestones with us. We specialize in creating pre-nuptial shoots, save-the-date videos, teasers, same-day edits, highlights, invitation pictorials, and more.",
  },
  {
    title: "Online Broadcasting",
    description:
      "Virtual events are now made easy, engaging, and interactive. We provide assistance in handling the online broadcast of both live and recorded events.",
  },
];

const EventMng = () => {
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
          <div className="hidden lg:flex lg:flex-col py-[56px]">
            <h2 className="text-[#f2f2f2] text-3xl lg:text-4xl font-bold">
              Events Management and Production
            </h2>
            <p className="py-4 text-[#f2f2f2]">
              We specialize in the comprehensive execution, coverage, and
              broadcast of your events. Whether it&apos;s an intimate gathering
              or a grand affairs, we immortalize precious moments with artistic
              finesse through expert photography and videography.
            </p>
          </div>
          <div className="hidden lg:flex justify-center items-center lg:relative">
            <Image
              src={EMP3}
              alt="let's get digital"
              className="absolute -bottom-[20px]"
            />
            <Image
              src={EMP}
              alt="let's get digital"
              className="-mt-4 md:-mt-8 lg:absolute lg:bottom-0"
            />
              <Image
                src={EMP2}
                alt="let's get digital"
                className="-mt-4 md:-mt-8 lg:absolute lg:bottom-0"
              />
          </div>
          <div className="lg:hidden flex flex-col justify-center items-center relative">
            <Image
              src={EMP3}
              alt="let's get digital"
              className="absolute -bottom-[20px]"
            />
            <Image
              src={EMP}
              alt="let's get digital"
              className="-mt-4 md:-mt-8 absolute bottom-0"
            />
            <Image
              src={EMP2}
              alt="let's get digital"
              className="-mt-4 md:-mt-8 z-50"
            />
          </div>
        </div>
      </section>
      <div className="lg:hidden flex flex-col py-[24px] px-4">
        <h2 className="text-[#a30a24] text-4xl font-bold">
          Events Management and Production
        </h2>
        <p className="py-4 font-inter text-[#191919]">
          We specialize in the comprehensive execution, coverage, and broadcast
          of your events. Whether it&apos;s an intimate gathering or a grand
          affairs, we immortalize precious moments with artistic finesse through
          expert photography and videography.
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
export default EventMng;
