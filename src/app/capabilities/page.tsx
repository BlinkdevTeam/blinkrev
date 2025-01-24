import AVP from "./avp";
import DigitalMarketing from "./digitalmarketing";
import EventMng from "./eventmng";
import VisualProd from "./visualprod";

// src/app/capabilities/page.tsx
const CapabilitiesPage = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center">
        <section className="max-w-[1020px] flex flex-col justify-center items-center ">
          <div className="px-4 pb-[16px] pt-[92px] flex flex-col justify-center items-center text-center">
            <h1 className="text-[40px] lg:text-[54px] text-[#a30a24] font-bold">
              Design + Strategy
            </h1>
            <p className="text-[18px] lg:text-[16px] px-8 lg:px-28 mt-[16px] text-[#191919]">
              We blend imagination and technology in our multimedia solutions.
              We are committed to producing outputs that are not only
              aesthetically striking but also functional and timeless.
            </p>
          </div>
        </section>
        <section className="overflow-x-hidden flex flex-col justify-center items-center">
          <DigitalMarketing />
          <EventMng />
          <VisualProd />
          <AVP />
        </section>
      </main>
    </>
  );
};

export default CapabilitiesPage;
