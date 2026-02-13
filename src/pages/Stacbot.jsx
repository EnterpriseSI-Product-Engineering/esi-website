import StacbotDifference from "../components/stacbot/StacbotDifference";
import StacbotHero from "../components/stacbot/StacbotHero";
import StacbotInAction from "../components/stacbot/StacbotInAction";
import StacbotUses from "../components/stacbot/StacbotUses";
import StacbotWorkingProcess from "../components/stacbot/StacbotWorkingProcess";
const Stacbot = () => {
  return (
    <div>
      <StacbotHero />
      <StacbotDifference />
      <StacbotInAction />
      <StacbotWorkingProcess />
      <StacbotUses />
    </div>
  );
};

export default Stacbot;
