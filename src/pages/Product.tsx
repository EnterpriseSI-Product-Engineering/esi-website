import { useParams } from "react-router-dom";
import AgenticAIBusinessPilotAccelerators from "./AgenticAIBusinessPilotAccelerators";
import AgenticAIPlayground from "./AgenticAIPlayground";
import PlatformOverview from "./PlatformOverview";

const Product = () => {
  const { slug } = useParams();

  const renderContent = () => {
    switch (slug) {
      case "agentic-ai-builder-playground":
        return <AgenticAIPlayground />;
      case "agentic-ai-business-pilot-accelerators":
        return <AgenticAIBusinessPilotAccelerators />;
      default:
        return <PlatformOverview />;
    }
  };

  return <div>{renderContent()}</div>;
};

export default Product;
  