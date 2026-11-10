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

import AITechnicalPrograms from "./pages/AITechnicalPrograms";
import AIForwardDeployedArchitect from "./pages/AIForwardDeployedArchitect";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import ProductInnovation from "./pages/ProductInnovation";
import AgenticBusinessAccelerationPlatform from "./pages/AgenticBusinessAccelerationPlatform";
import AIFDEConsultingMindsetWorkshop from "./pages/AIFDEConsultingMindsetWorkshop";
import AIDeploymentStrategistWorkshop from "./pages/AIDeploymentStrategistWorkshop";
import AIFDEProgramsSpecializations from "./pages/AIFDEProgramsSpecializations";
import AIFDEFactorySeries from "./pages/AIFDEFactorySeries";
import EmployeeAICapabilityAssessmentAdvisory from "./pages/EmployeeAICapabilityAssessmentAdvisory";
import DomainDeepdiveLearningSeries from "./pages/DomainDeepdiveLearningSeries";
import AIFDEAcademyToolkit from "./pages/AIFDEAcademyToolkit";
import AITechWebinarSeries from "./pages/AITechWebinarSeries";
import ManagedAgenticSandboxesRelease from "./pages/ManagedAgenticSandboxesRelease";
import AISkillingAtScaleWithoutTrainers from "./pages/AISkillingAtScaleWithoutTrainers";
import AICoachSMEService from "./pages/AICoachSMEService";

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

          <Route path="/solutions/ai-technical-programs" element={<AITechnicalPrograms />} />
          <Route path="/solutions/ai-forward-deployed-architect" element={<AIForwardDeployedArchitect />} />
          <Route path="/thought-leadership/blogs" element={<Blogs />} />
          <Route path="/thought-leadership/blogs/:slug" element={<BlogPost />} />
          <Route path="/thought-leadership/product-innovation" element={<ProductInnovation />} />
          <Route path="/thought-leadership/product-innovations" element={<ProductInnovation />} />
          <Route path="/thought-leadership/product-innovation/agentic-business-acceleration-platform" element={<AgenticBusinessAccelerationPlatform />} />
          <Route path="/thought-leadership/product-innovations/agentic-business-acceleration-platform" element={<AgenticBusinessAccelerationPlatform />} />
          <Route path="/thought-leadership/product-innovation/ai-fde-consulting-mindset-workshop" element={<AIFDEConsultingMindsetWorkshop />} />
          <Route path="/thought-leadership/product-innovations/ai-fde-consulting-mindset-workshop" element={<AIFDEConsultingMindsetWorkshop />} />
          <Route path="/thought-leadership/product-innovation/ai-deployment-strategist-workshop" element={<AIDeploymentStrategistWorkshop />} />
          <Route path="/thought-leadership/product-innovations/ai-deployment-strategist-workshop" element={<AIDeploymentStrategistWorkshop />} />
          <Route path="/thought-leadership/product-innovation/ai-fde-programs-industry-function-tech-stack" element={<AIFDEProgramsSpecializations />} />
          <Route path="/thought-leadership/product-innovations/ai-fde-programs-industry-function-tech-stack" element={<AIFDEProgramsSpecializations />} />
          <Route path="/thought-leadership/product-innovation/ai-forward-deployed-engineer-factory" element={<AIFDEFactorySeries />} />
          <Route path="/thought-leadership/product-innovations/ai-forward-deployed-engineer-factory" element={<AIFDEFactorySeries />} />
          <Route path="/thought-leadership/product-innovation/employee-ai-capability-assessment-advisory" element={<EmployeeAICapabilityAssessmentAdvisory />} />
          <Route path="/thought-leadership/product-innovations/employee-ai-capability-assessment-advisory" element={<EmployeeAICapabilityAssessmentAdvisory />} />
          <Route path="/thought-leadership/product-innovation/domain-deepdive-ai-software-engineers" element={<DomainDeepdiveLearningSeries />} />
          <Route path="/thought-leadership/product-innovations/domain-deepdive-ai-software-engineers" element={<DomainDeepdiveLearningSeries />} />
          <Route path="/thought-leadership/product-innovation/ai-fde-academy-toolkit-talent-factory" element={<AIFDEAcademyToolkit />} />
          <Route path="/thought-leadership/product-innovations/ai-fde-academy-toolkit-talent-factory" element={<AIFDEAcademyToolkit />} />
          <Route path="/thought-leadership/product-innovation/aitech-webinar-series" element={<AITechWebinarSeries />} />
          <Route path="/thought-leadership/product-innovations/aitech-webinar-series" element={<AITechWebinarSeries />} />
          <Route path="/thought-leadership/product-innovation/managed-agentic-sandboxes-experimentation-prototyping" element={<ManagedAgenticSandboxesRelease />} />
          <Route path="/thought-leadership/product-innovations/managed-agentic-sandboxes-experimentation-prototyping" element={<ManagedAgenticSandboxesRelease />} />
          <Route path="/thought-leadership/product-innovation/ai-skilling-at-scale-without-human-trainers" element={<AISkillingAtScaleWithoutTrainers />} />
          <Route path="/thought-leadership/product-innovations/ai-skilling-at-scale-without-human-trainers" element={<AISkillingAtScaleWithoutTrainers />} />
          <Route path="/thought-leadership/product-innovation/ai-coach-smes-in-a-box-service" element={<AICoachSMEService />} />
          <Route path="/thought-leadership/product-innovations/ai-coach-smes-in-a-box-service" element={<AICoachSMEService />} />
          {/* demo page */}
          <Route path="/demo" element={<Demo />} />
        </Routes>
        <FluidCursor />
      </MainLayout>
    </Router>
  );
};

export default App;
