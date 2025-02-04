import Image from "next/image";
import Herspective from "../../../public/assets/events/herspective.jpg";
import Mernels from "../../../public/assets/events/Mernels_Tab.jpg";

const events = [
  {
    date: "MARCH 02",
    image: Herspective,
    title: "HER+SPECTIVE",
    year: "2025",
    description: "Watch out for our art fair dedicated to women.",
  },
  {
    date: "DEC 20 - JAN 15",
    image: Mernels,
    title: "MERNELS",
    year: "2025",
    description: "Capture Your Sweet Holiday Moments!",
  },
];

const StudioPage = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="max-w-[1020px] p-4 flex flex-col gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="w-full grid grid-cols-3 gap-4 justify-between"
          >
            <div className="flex flex-col justify-center items-center font-bold text-center">
              {event.date}
            </div>
            <div className="rounded-xl overflow-hidden">
              <Image src={event.image} alt={`${event.title} image`} />
            </div>
            <div className="flex flex-col justify-center">
              <h1>{event.title}</h1>
              <h5>{event.year}</h5>
              <p>{event.description}</p>
              <a>View Event Details →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudioPage;
