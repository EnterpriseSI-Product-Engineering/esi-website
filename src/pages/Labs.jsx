import LabsHero from "../components/labs/LabsHero";
import LabsList from "../components/labs/LabsList";
import WhyTrainLabs from "../components/labs/WhyTrainLabs";

const Labs = () => {
  return (
    <div className="py-30">
      <LabsHero />
      <LabsList />
      <WhyTrainLabs />
    </div>
  );
};

export default Labs;
