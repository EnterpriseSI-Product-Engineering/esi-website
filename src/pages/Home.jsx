import EveryThingInOnePlatform from "../components/home/EveryThingInOnePlatform";
import Stacbot from "../components/home/Stacbot";
import WhoIsItFor from "../components/home/WhoIsItFor";
import WhatWeOffer from "../components/home/WhatWeOffer";
import Hero from "../components/home/Hero";
import VideShowCase from "../components/home/VideoShowCase";
import Vision from "../components/home/Vision";
import Features from "../components/home/Features";
const Home = () => {
  return (
    <div className="container mx-auto">
      <Hero />
      <Vision />
      <Features />
      {/* <WhatWeOffer /> */}
      {/* <VideShowCase /> */}
      {/* <EveryThingInOnePlatform /> */}
      {/* <Stacbot /> */}
      {/* <WhoIsItFor /> */}
    </div>
  );
};

export default Home;
