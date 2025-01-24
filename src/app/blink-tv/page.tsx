import NewRelease from "./newrelease";
import Trending from "./trending";

// src/app/blinktv/page.tsx
const BlinkTVPage = () => {
  return (
    <>
      <div className="relative w-full h-[945px]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source
            src="/assets/Final_BCS_BTS_PRIVATE_TUTOR.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/100 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-transparent to-black/100 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/100 pointer-events-none"></div>
        <div className="absolute top-1/2 left-[360px] transform -translate-x-1/2 -translate-y-1/2 text-white z-20">
          <div className="flex space-x-2 mb-6">
            <a>Interview Series</a>,<a>Travelogue</a>,<a>Short Film</a>,
            <a>BTS Trailer</a>
          </div>
          <h1 className="font-bold text-5xl">VIVAMAX</h1>
          <p className="mt-8 font-normal text-xl">
            <span className="font-bold">
              Parental Advisory: <br />
            </span>
            This content contains mature themes and language
            <br />
            that are not suitable for some audiences.
          </p>
          <div className="flex mx-auto gap-4">
            <div className="mt-8 bg-[#a30a24] px-12 py-3 rounded-lg flex text-center items-center justify-center">
              PLAY
            </div>
            <div className="mt-8 bg-[#a30a24] px-12 py-3 rounded-lg flex text-center items-center justify-center">
              WATCH TRAILER
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container max-w-[1020px] mx-auto px-4 py-8 bg-red-400"></div> */}
      <Trending />
      <NewRelease />

      <div className="relative w-full h-[445px]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source
            src="/assets/Final_BCS_BTS_PRIVATE_TUTOR.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/100 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-transparent to-black/100 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/100 pointer-events-none"></div>
        <div className="absolute top-1/2 left-[360px] transform -translate-x-1/2 -translate-y-1/2 text-white z-20">
          <div className="flex space-x-2 mb-6">
            <a>Interview Series</a>,<a>Travelogue</a>,<a>Short Film</a>,
            <a>BTS Trailer</a>
          </div>
          <h1 className="font-bold text-5xl">VIVAMAX</h1>
          <p className="mt-8 font-normal text-xl">
            <span className="font-bold">
              Parental Advisory: <br />
            </span>
            This content contains mature themes and language
            <br />
            that are not suitable for some audiences.
          </p>
          <div className="flex mx-auto gap-4">
            <div className="mt-8 bg-[#a30a24] px-12 py-3 rounded-lg flex text-center items-center justify-center">
              PLAY
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 -right-[260px] bg-slate-500 w-[807px] h-[340px] transform -translate-x-1/2 -translate-y-1/2 text-white z-20"></div>
      </div>
    </>
  );
};

export default BlinkTVPage;
