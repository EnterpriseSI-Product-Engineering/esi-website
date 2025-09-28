import { useParams } from "react-router-dom";
import AgenticAIBusinessPilotAccelerators from "./AgenticAIBusinessPilotAccelerators";
import AgenticAIPlayground from "./AgenticAIPlayground";

const Product = () => {
  const { slug } = useParams();

  return (
    <div>
      {/* Now you can use the slug parameter to conditionally render components */}
      {slug === "agentic-ai-builder-playground" ? (
        <AgenticAIBusinessPilotAccelerators />
      ) : (
        <AgenticAIPlayground />
      )}
    </div>
  );
};

export default Product;
