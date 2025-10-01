import { useParams } from "react-router-dom";
import AITalentTransformationStrategy from "./AITalentTransformationStrategy";
import BusinessAIPrograms from "./BusinessAIPrograms";
import TechnicalAIPrograms from "./TechnicalAIPrograms";
import AgenticAIPilotService from "./AgenticAIPilotService";

const Solutions = () => {
  const { slug } = useParams();

  const renderSolution = () => {
    switch (slug) {
      case "ai-talent-transformation-strategy":
        return <AITalentTransformationStrategy />;
      case "business-ai-programs":
        return <BusinessAIPrograms />;
      case "technical-ai-programs":
        return <TechnicalAIPrograms />;
      case "agentic-ai-product-pilot-as-service":
        return <AgenticAIPilotService />;
      default:
        return (
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold mb-4">Solution Not Found</h1>
            <p className="text-muted-foreground">
              The solution you’re looking for doesn’t exist or is coming soon.
            </p>
          </div>
        );
    }
  };

  return <div>{renderSolution()}</div>;
};

export default Solutions;
