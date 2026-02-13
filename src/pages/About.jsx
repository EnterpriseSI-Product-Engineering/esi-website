import { AboutHero, TeamBehindPlatform, AboutImpact } from "@/components/about";

const About = () => {
  return (
    <>
      <div className="py-30">
        <AboutHero />
        {/* <div className="container mx-auto max-w-6xl px-4 text-3xl leading-8 text-gray-700 gap-5 flex flex-col items-center justify-center mb-[220px]">
          <p>
            EnterpriseSI is a startup born in the Agentic AI era to help corporates
            accelerate their AI adoption journey. We started operations in 
            2025.
          </p>
          <p>
            We're an Agentic AI Acceleration platform-as-a-service (PaaS) enabling enterprises
            to accelerate their AI adoption—right from foundational learning to
            full-scale application development and deployment.
          </p>
           <p>
            We're building this with StacBot, our AI Companion, designed to
            enable one-on-one, hyper-personalized, multilingual learning and
            live problem-solving—all from a browser, with zero setup.
          </p> 
        </div> */}
        <TeamBehindPlatform />
        <AboutImpact />
      </div>
    </>
  );
};

export default About;
