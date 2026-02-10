import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import FeaturesGrid from "./components/FeaturesGrid";
import FloatingEmailWidget from "./components/FloatingEmailWidget";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Solutions from "./pages/Solutions";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import { AuroraBackground } from "./components/ui/aurora-background";
import { motion } from "framer-motion";

const queryClient = new QueryClient();

// Layout component for all pages, always shows the navigation
const Layout = () => (
  <div className="min-h-screen">
    <Navigation />
    <main>
      <Outlet />
    </main>
    <FloatingEmailWidget />
  </div>
);

const Index = () => (
  <>
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <Hero />
      </motion.div>
    </AuroraBackground>
    <FeaturesGrid />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Product />} />
            <Route path="product/:slug" element={<Product />} />
            <Route path="solutions/:slug" element={<Solutions />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
