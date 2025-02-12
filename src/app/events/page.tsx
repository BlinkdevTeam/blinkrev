import Image from "next/image";
import Herspective from "../../../public/assets/events/herspective.jpg";
import Mernels from "../../../public/assets/events/Mernels_Tab.jpg";

const upcomingevents = [
  {
    month: "MARCH",
    date: "02",
    image: Herspective,
    title: "HER+SPECTIVE",
    year: "2025",
    description: "Watch out for our art fair dedicated to women.",
  },
  {
    month: "DEC 20",
    date: "JAN 15",
    image: Mernels,
    title: "MERNELS",
    year: "2025",
    description: "Capture Your Sweet Holiday Moments!",
  },
];
const recentevents = [
  {
    month: "DEC 20",
    date: "JAN 15",
    image: Mernels,
    title: "MERNELS",
    year: "2025",
    description: "Capture Your Sweet Holiday Moments!",
  },
  {
    month: "MARCH",
    date: "02",
    image: Herspective,
    title: "HER+SPECTIVE",
    year: "2025",
    description: "Watch out for our art fair dedicated to women.",
  },
];

const StudioPage = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="max-w-[1020px] p-4 flex flex-col gap-20">
        <div className="space-y-10 my-16">
          <h1 className="text-[36px] text-[#A30A24] font-bold">
            Upcoming Events
          </h1>
          <div className="w-full h-[2px] bg-[#eaeaea]" />
          {upcomingevents.map((event, index) => (
            <>
              <div
                key={index}
                className="w-full grid grid-cols-[1fr_2fr_2fr] gap-4 justify-between"
              >
                <div className="flex flex-col justify-center items-center font-bold text-center">
                  <div className="text-lg">{event.month}</div>
                  <div className="text-lg">{event.date}</div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <Image src={event.image} alt={`${event.title} image`} />
                </div>
                <div className="flex flex-col justify-center space-y-2">
                  <h1 className="text-3xl font-bold">{event.title}</h1>
                  <h5 className="text-xl text-[#808080]">{event.year}</h5>
                  <p>{event.description}</p>
                  <a href="" className="text-[#A30A24] text-xl font-bold">
                    View Event Details →
                  </a>
                </div>
              </div>
              <div className="w-full h-[2px] bg-[#eaeaea]" />
            </>
          ))}
        </div>
        <div className="space-y-10">
          <h1 className="text-[36px] text-[#A30A24] font-bold">
            Recent Events
          </h1>
          <div className="w-full h-[2px] bg-[#eaeaea]" />
          {recentevents.map((event, index) => (
            <>
              <div
                key={index}
                className="w-full grid grid-cols-[1fr_2fr_2fr] gap-4 justify-between"
              >
                <div className="flex flex-col justify-center items-center font-bold text-center">
                  <div className="text-lg">{event.month}</div>
                  <div className="text-lg">{event.date}</div>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <Image src={event.image} alt={`${event.title} image`} />
                </div>
                <div className="flex flex-col justify-center space-y-2">
                  <h1 className="text-3xl font-bold">{event.title}</h1>
                  <h5 className="text-xl text-[#808080]">{event.year}</h5>
                  <p>{event.description}</p>
                  <a href="" className="text-[#A30A24] text-xl font-bold">
                    View Event Details →
                  </a>
                </div>
              </div>
              <div className="w-full h-[2px] bg-[#eaeaea]" />
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioPage;
