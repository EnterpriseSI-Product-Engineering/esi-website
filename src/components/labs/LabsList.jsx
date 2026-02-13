import { useState } from "react";
import { Button } from "@/components/ui/button";

// import { labsData } from "@/data/labsData.json";

const LabsList = () => {
  const labsData = [...Array(20)]; // replace with your actual data
  const [showAll, setShowAll] = useState(false);

  const visibleLabs = showAll ? labsData : labsData.slice(0, 9);

  const handleToggle = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <>
      <div
        id="list-of-labs"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div className="container mx-auto">
        {/* Labs cards */}
        <div
          id=""
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {visibleLabs?.map((data, index) => (
            <div key={index} className="border bg-white rounded-xl p-4 shadow">
              <div className="border border-gray-200 rounded-full px-4 py-1 text-xs w-max">
                medium
              </div>
              <h1 className="text-2xl my-3">{data?.title}</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic
              </p>
              <div className="border border-gray-200 rounded-md px-4 py-2 mt-4 text-xs w-max">
                Tech stack
              </div>
            </div>
          ))}
        </div>

        {labsData.length > 9 && (
          <div className="flex items-center justify-center mt-5 cursor-pointer">
            <Button onClick={handleToggle}>
              {showAll ? "Show Less" : "See All"}
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default LabsList;
