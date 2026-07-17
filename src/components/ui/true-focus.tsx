import { motion } from "motion/react";

const TrueFocus = ({
  text = "Agentic Business Acceleration Platform",
  borderColor = "#06b6d4",
  glowColor = "rgba(6, 182, 212, 0.5)"
}) => {
  return (
    <div className="relative inline-block">
      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 bg-white/20 px-3">
        {text}
      </span>
      
      <motion.div
        className="absolute pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          top: "-11px",
          left: "-3px",
          right: "-3px",
          bottom: "-10px"
        }}
      >
        <span
          className="absolute w-4 h-4 border-2 rounded-sm top-0 left-0 border-r-0 border-b-0"
          style={{
            borderColor: borderColor,
            filter: `drop-shadow(0 0 8px ${glowColor})`
          }}
        />
        <span
          className="absolute w-4 h-4 border-2 rounded-sm top-0 right-0 border-l-0 border-b-0"
          style={{
            borderColor: borderColor,
            filter: `drop-shadow(0 0 8px ${glowColor})`
          }}
        />
        <span
          className="absolute w-4 h-4 border-2 rounded-sm bottom-0 left-0 border-r-0 border-t-0"
          style={{
            borderColor: borderColor,
            filter: `drop-shadow(0 0 8px ${glowColor})`
          }}
        />
        <span
          className="absolute w-4 h-4 border-2 rounded-sm bottom-0 right-0 border-l-0 border-t-0"
          style={{
            borderColor: borderColor,
            filter: `drop-shadow(0 0 8px ${glowColor})`
          }}
        />
      </motion.div>
    </div>
  );
};

export default TrueFocus;