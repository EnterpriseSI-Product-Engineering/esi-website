import { useState } from "react";
import { Tabs } from "@/components/ui/vercel-tabs";
import { Linkedin } from "lucide-react";
import { Link } from "react-router";
import Teams from "@/data/teams.json";
import { AbhiroopImg } from "@/assets";

console.log(Teams);

// const tabs = [
//   { id: "founders", label: "Founders" },
//   { id: "engineers", label: "Engineers" },
// ];

const foundersContent = ({ founders }) => {
  return (
    <div className="w-full max-w-[400px] mx-auto px-4">
      {founders.map((founder, index) => (
        <div key={index} className="border rounded-xl bg-white p-3">
          <div className="h-[300px] md:h-[350px] bg-gray-200 rounded-lg flex items-center justify-center">
            <img
              src={AbhiroopImg}
              alt={founder.name}
              className="h-full object-cover object-top w-full rounded-lg border"
            />
          </div>
          <div className="text-center items-center my-3">
            <h1 className="text-xl md:text-2xl">{founder.name}</h1>
            <span className="-mb-1 text-xs">
              ( CEO & Head of AI Product Management )
            </span>
          </div>
          <p className="mb-2 text-sm md:text-base">
            Software Product Leader with 22 years of experience in software
            products, solutions & technology consulting. With over 10 years in
            AI, Abhiroop has led engineering for 4 AI-powered products and
            successfully delivered 35+ AI projects. He has also founded and
            built 3 AI startups over the last decade.
          </p>
          <Link to={founder.linkedinUrl} target="_blank">
            <Linkedin
              strokeWidth={1.5}
              className="text-blue-500 cursor-pointer"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

// const engineersContent = ({ engineers }) => {
//   return (
//     <div className=" grid grid-cols-3 gap-4 max-w-6xl mx-auto">
//       {engineers.map((founder, index) => (
//         <div key={index} className="border bg-white rounded-xl p-3">
//           <div className=" h-[300px] bg-gray-200 rounded-lg flex items-center justify-center">
//             <img
//               src={founder.profileImageUrl}
//               alt={founder.name}
//               className="h-full object-cover w-full rounded-lg"
//             />
//           </div>
//           <div className="flex mt-2 flex-col">
//             <h1 className="text-2xl">{founder.name}</h1>{" "}
//             <span className="-mb-1 text-xs">( {founder.title} ) </span>
//           </div>
//           <p className="mb-3 mt-3">{founder.description}</p>
//           <Link to={founder.linkedinUrl} target="_blank">
//             <Linkedin
//               strokeWidth={1.5}
//               className="text-blue-500 cursor-pointer"
//             />
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };
const TeamBehindPlatform = () => {
  const [activeTab, setActiveTab] = useState("founders");

  return (
    <div id="teams" className="container mx-auto px-4 py-8">
      {/* <h1 className="text-center text-5xl mb-10">
        The People Behind the Platform
      </h1> */}

      {/* <div className="flex justify-center items-center w-full mb-8">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </div> */}

      <div>
        {activeTab === "founders" &&
          foundersContent({ founders: Teams.founders })}
        {/* {activeTab === "engineers" &&
          engineersContent({ engineers: Teams.engineers })} */}
      </div>
    </div>
  );
};

export default TeamBehindPlatform;
