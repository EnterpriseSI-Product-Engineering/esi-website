import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mt-[12px] mr-4 text-3xl md:text-5xl font-semibold">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

const Vision = () => {
  const text =
    "Our Agentic AI Acceleration platform provides AI Accelerators & Playgrounds helping Enterprises embrace Artificial General Intelligence in a structured manner, enabling Business Outcomes like:";
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start 0.55", "start 0.25"],
  });
  text;
  const words = text.split(" ");

  return (
    <div className="container mx-auto max-w-6xl">
      <p
        ref={container}
        className="flex flex-wrap leading-[0.5] py-20 mb-10 mt-20 items-center justify-center"
      >
        {words.map((word, i) => {
        const start = i / words.length;

        const end = start + 1 / words.length;

        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
      </p>
     
    </div>
  );
};

export default Vision;
