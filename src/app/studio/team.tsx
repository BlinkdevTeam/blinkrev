import Image from "next/image";
import IMG1 from "../../../public/assets/studio/BCS_TP_Likas.jpg";
import IMG2 from "../../../public/assets/studio/Randy.jpg";
import IMG3 from "../../../public/assets/studio/Aya.jpg";
import IMG4 from "../../../public/assets/studio/Jayson.jpg";
import IMG5 from "../../../public/assets/studio/Giyo_2.jpg";
import IMG6 from "../../../public/assets/studio/BCS_TP_Andrey.jpg";
import IMG7 from "../../../public/assets/studio/BCS_TP_Ken.jpg";
import IMG8 from "../../../public/assets/studio/BCS_TP_Lander.jpg";
import IMG9 from "../../../public/assets/studio/Keilly.jpg";
import IMG10 from "../../../public/assets/studio/Anne.jpg";
import IMG11 from "../../../public/assets/studio/BCS_TP_Nick.jpg";
import IMG12 from "../../../public/assets/studio/BCS_TP_Mildred.jpg";

const teamMembers = [
  {
    img: IMG2,
    name: "Randy Villanueva",
    role: "Content Production Specialist",
  },
  { img: IMG3, name: "Aya Mulimbayan", role: "Graphic Artist" },
  { img: IMG4, name: "Jayson San Agustin", role: "Tarpaulin" },
  {
    img: IMG5,
    name: "Gio Alvarez",
    role: "Graduation Photographer / Photo Editor",
  },
  { img: IMG6, name: "Andrey Lapitan", role: "Christening Editor / Tagabutton lang" },
  { img: IMG7, name: "Ken Mirwell", role: "Web Developer" },
  { img: IMG8, name: "Lander Guevarra", role: "Front-End Developer" },
  { img: IMG9, name: "Keilly Guevarra", role: "Executive Assistant" },
  { img: IMG10, name: "Febbie Latoreno", role: "Finance Officer" },
  { img: IMG11, name: "Dominic Mataba", role: "Admin Officer" },
  { img: IMG12, name: "Mildred Amado", role: "Admin Assistant" },
];

const TeamPage = () => {
  return (
    <section className="flex flex-col justify-center items-center mb-24">
      <h1 className="text-4xl font-bold text-[#a30a24] mb-8">Core Team</h1>
      {/* Solo Section for Likas Aspiras */}
      <div className="grid grid-cols-3 justify-center items-center mb-16">
        <div className="col-start-2 flex flex-col justify-center items-center">
          <Image src={IMG1} alt="Likas Aspiras" />
          <h1 className="text-lg font-semibold mt-4">Likas Aspiras</h1>
          <p className="text-gray-600">Founder / CEO</p>
        </div>
      </div>
      {/* Grid for the rest of the team */}
      <div className="grid grid-cols-3 gap-16">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <Image src={member.img} alt={member.name} />
            <h1 className="text-lg font-semibold mt-4">{member.name}</h1>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
