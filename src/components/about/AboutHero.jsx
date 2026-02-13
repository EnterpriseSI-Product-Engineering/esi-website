import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Link } from "react-router";

const AboutHero = () => {
  return (
    <div className="container pt-20 pb-10 px-4 flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl md:text-[72px] max-w-6xl font-bold text-center leading-tight md:leading-[80px]">
        Meet Our CEO
      </h1>
      <p className="text-center text-base md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mt-4">
        Driving Enterprise AI transformation with 22+ years of software product
        leadership and deep expertise in artificial intelligence innovation.
      </p>

      {/* <div className="flex items-center justify-center mt-8 gap-4">
        <Link to="/demo">
          <LiquidButton>Contact Us</LiquidButton>
        </Link>
        <a href="#teams">
          <LiquidButton>Meet Our Team</LiquidButton>
        </a>
      </div> */}
    </div>
  );
};

export default AboutHero;
