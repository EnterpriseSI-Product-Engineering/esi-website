import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { tabsData } from "../../data/tabsData";

const VideoShowCase = ({
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [tabs, setTabs] = useState(tabsData);
  const [hovering, setHovering] = useState(false);

  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...tabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
  };

  return (
    <div className="h-[800px]">
      <h1 className="text-center text-5xl -mb-10">See Kloudstac in Action</h1>
      <div
        className={cn(
          "flex flex-row items-center z-30 mt-20 justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {tabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => moveSelectedTabToTop(idx)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
            style={{ transformStyle: "preserve-3d" }}
          >
            {idx === 0 && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full",
                  activeTabClassName
                )}
              />
            )}
            <span className="relative block text-black dark:text-white">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        hovering={hovering}
        className={cn("mt-32", contentClassName)}
      />
    </div>
  );
};

export default VideoShowCase;

const FadeInDiv = ({ className, tabs, hovering }) => {
  const isActive = (tab) => tab.value === tabs[0].value;

  return (
    <div className="relative -mt-[85px] z-10 w-full h-[70vh] mb-[100px]">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{ y: isActive(tab) ? [0, 40, 0] : 0 }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
