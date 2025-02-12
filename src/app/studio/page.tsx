import TeamPage from "./team";
import TeamPage2 from "./team2";

const StudioPage = () => {
  const coreValues = [
    {
      key: "B",
      title: "OLD",
      description:
        "Fearlessly embracing challenges and pushing boundaries to create impactful and memorable experiences.",
      gridRatio: "grid-cols-[1fr,5fr]",
    },
    {
      key: "L",
      title: "IMITLESS",
      description:
        "Embracing boundless creativity and possibilities to unlock the full potential of every project.",
      gridRatio: "grid-cols-[2fr,5fr]",
    },
    {
      key: "I",
      title: "NNOVATIVE",
      description:
        "Constantly seeking fresh perspectives, cutting-edge technologies, and imaginative solutions to redefine the standards of multimedia excellence.",
      gridRatio: "grid-cols-[3fr,5fr]",
    },
    {
      key: "N",
      title: "OW",
      description:
        "Committed to the present moment, ensuring timely and relevant responses to the dynamic needs of clients and the industry.",
      gridRatio: "grid-cols-[4fr,5fr]",
    },
    {
      key: "K",
      title: "EEN",
      description:
        "Demonstrating acute awareness, attention to detail, and a passion for excellence in every aspect of our work.",
      gridRatio: "grid-cols-[5fr,5fr]",
    },
  ];

  return (
    <>
      <section className="flex flex-col items-center">
        <div className="max-w-[1020px] px-6 py-24">
          {/* About Us Section */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-[#a30a24]">About Us</h1>
            <p className="font-inter mt-10 leading-relaxed text-gray-700">
              Blink Creative Studio is a multimedia company that specializes in
              design, production, and marketing. We are a dynamic team of
              creative strategists, consultants, artists, storytellers, and
              technicians. Our work environment enables our team members to
              freely contribute, collaborate, and learn from one another. With
              this commitment and agility, we have established a reputation for
              artistry and effective outputs.
              <br />
              <br />
              We listen and work closely with our clients to deliver enduring
              success. We work with a variety of industries, big or small –
              catering to corporate, academic, and personal multimedia needs. We
              aim to exceed ourselves after every milestone we have
              accomplished.
              <br />
              <br />
              We are currently expanding our horizons by delving into the
              production of films, TV shows, and web series, broadening our
              creative portfolio.
              <br />
              <br />
              <span className="font-bold">We are BLINK Creative Studio.</span>
            </p>
            <a className="mt-8 text-[#a30a24] font-bold" href="#contact">
              Let&apos;s work on a project!
            </a>
          </div>

          {/* Video Section */}
          <div className="mt-16">
            <video className="w-full rounded-lg shadow-lg" autoPlay loop muted>
              <source src="/assets/studio/BCS_OFFICE-3D.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Mission Section */}
          <div className="flex flex-col mt-20">
            <h1 className="text-4xl font-bold text-[#a30a24]">Mission</h1>
            <p className="font-inter mt-10 leading-relaxed text-gray-700">
              Blink Creative Studio is dedicated to pushing the boundaries of
              imagination, intuition, and intellect. Our commitment is to create
              multimedia outputs that not only meet but exceed expectations,
              leaving an enduring impact on audiences and propelling our clients
              toward sustained success.
            </p>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col mt-20">
            <h1 className="text-4xl font-bold text-[#a30a24]">Vision</h1>
            <p className="font-inter mt-10 leading-relaxed text-gray-700">
              To be at the forefront of innovation within the multimedia
              industry and become a key player in stimulating culture, business,
              and society through effective multimedia outputs that communicate
              ideas, conversations, and stories.
            </p>
          </div>

          {/* Core Values Section */}
          <div className="flex flex-col mt-20">
            <h1 className="text-4xl font-bold text-[#a30a24]">Core Values</h1>
            <div className="mt-10 space-y-4">
              {coreValues.map((value) => (
                <div
                  key={value.key}
                  className={`grid ${value.gridRatio} items-center`}
                >
                  {/* Column 1: Key and Title */}
                  <div className="flex items-center justify-end h-full border-t-2 border-r-2 border-b-2 border-[#a30a24] py-2 px-6">
                    <h2 className="text-2xl font-medium text-[#191919]">
                      <span className="text-[#a30a24] font-extrabold text-[34px]">
                        {value.key}
                      </span>
                      {value.title}
                    </h2>
                  </div>

                  {/* Column 2: Description */}
                  <div className="flex items-center h-full bg-[#a30a24] border-[#a30a24] border-t-4 border-l-2 border-b-4 py-2 px-6">
                    <p className="leading-relaxed text-[#f2f2f2] font-inter">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-[1020px]">
          {/* <TeamPage /> */}
          <TeamPage2 />
        </div>
      </div>
    </>
  );
};

export default StudioPage;
