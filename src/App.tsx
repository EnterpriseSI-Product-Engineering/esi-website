import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import FeaturesGrid from "./components/FeaturesGrid";
import EmailSubscription from "./components/EmailSubscription";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";

const queryClient = new QueryClient();

// Layout component for all pages, always shows the navigation
const Layout = () => (
  <div className="min-h-screen">
    <Navigation />
    <main>
      <Outlet />
    </main>
  </div>
);

const Index = () => (
  <>
    <Hero />
    <FeaturesGrid />
    <EmailSubscription />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="product/:slug" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
