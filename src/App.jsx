import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Stacbot from "./pages/Stacbot";
import Labs from "./pages/Labs";
import MainLayout from "./layouts/index";
import FluidCursor from "./components/common/FluidCursor";
import ScrollToTop from "./components/common/ScrollToTop";
import Demo from "./pages/Demo";
import Team from "./pages/Team";
import Product from "./pages/Product";
import AgenticAIBuilderPlayground from "./pages/AgenticAIBuilderPlayground";
import AgenticAIBusinessPilotAccelerators from "./pages/AgenticAIBusinessPilotAccelerators";
import AITalentTransformationStrategy from "./pages/AITalentTransformationStrategy";
import BusinessAIPrograms from "./pages/BusinessAIPrograms";
import TechnicalAIPrograms from "./pages/TechnicalAIPrograms";
const App = () => {
  return (
    <Router>
      <MainLayout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/stacbot" element={<Stacbot />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/agentic-ai-builder-playground" element={<AgenticAIBuilderPlayground />} />
          <Route path="/product/agentic-ai-business-pilot-accelerators" element={<AgenticAIBusinessPilotAccelerators />} />
          <Route path="/solutions/ai-talent-transformation-strategy" element={<AITalentTransformationStrategy />} />
          <Route path="/solutions/business-ai-programs" element={<BusinessAIPrograms />} />
          <Route path="/solutions/technical-ai-programs" element={<TechnicalAIPrograms />} />
          {/* demo page */}
          <Route path="/demo" element={<Demo />} />
        </Routes>
        <FluidCursor />
      </MainLayout>
    </Router>
  );
};

export default App;
