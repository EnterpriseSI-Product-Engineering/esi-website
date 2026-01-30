import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Gamepad2,
  Rocket,
  Users,
  Briefcase,
  Code,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img src="/esi-logo.png" alt="" className="h-12" />
            <div>
              <h1 className="text-xl font-bold text-[#1683b3]">EnterpriseSI</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <Link
                to={"/"}
                className="relative group text-foreground hover:text-ai-purple px-4 py-2 rounded-lg text-md font-medium transition-all duration-300 hover:bg-ai-purple/5"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-ai-purple/10 to-ai-blue/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                to={"/about"}
                className="relative group text-foreground hover:text-ai-purple px-4 py-2 rounded-lg text-md font-medium transition-all duration-300 hover:bg-ai-purple/5"
              >
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-gradient-to-r from-ai-purple/10 to-ai-blue/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative group flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-ai-purple/5 transition-all duration-300">
                    <span className="relative z-10">Products</span>
                    <ChevronDown className="h-4 w-4 group-hover:text-ai-purple transition-colors" />
                    <div className="absolute inset-0 bg-gradient-to-r from-ai-purple/10 to-ai-blue/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="ml-[220px] mt-2 p-6 space-y-4 bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-xl min-w-[380px]">
                  {/* Platform Overview */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border-b border-border/70"
                  >
                    <div className="flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent mb-3">
                      <Sparkles className="w-4 h-4 text-ai-purple" />
                      Agentic AI Acceleration Platform
                    </div>
                  </motion.div>

                  {/* Product Components */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="space-y-2">
                      <Link to="/product/agentic-ai-builder-playground">
                        <DropdownMenuItem className="group text-md p-4 rounded-lg hover:bg-gradient-to-r hover:from-ai-purple/10 hover:to-ai-blue/10 transition-all duration-300 cursor-pointer border border-transparent hover:border-ai-purple/20">
                          <Gamepad2 className="mr-3 w-5 h-5 group-hover:text-ai-purple transition-colors" />
                          <div className="flex flex-col">
                            <span className="group-hover:text-ai-purple transition-colors font-semibold">Agentic AI Builder Playground</span>
                            <span className="text-xs text-muted-foreground group-hover:text-ai-purple/70">Interactive Development Environment</span>
                          </div>
                        </DropdownMenuItem>
                      </Link>
                      <Link to="/product/agentic-ai-business-pilot-accelerators">
                        <DropdownMenuItem className="group text-md p-4 rounded-lg hover:bg-gradient-to-r hover:from-ai-purple/10 hover:to-ai-blue/10 transition-all duration-300 cursor-pointer border border-transparent hover:border-ai-purple/20">
                          <Rocket className="mr-3 w-5 h-5 group-hover:text-ai-purple transition-colors" />
                          <div className="flex flex-col">
                            <span className="group-hover:text-ai-purple transition-colors font-semibold">Agentic AI Business Pilot Accelerators</span>
                            <span className="text-xs text-muted-foreground group-hover:text-ai-purple/70">Ready-to-Deploy Business Solutions</span>
                          </div>
                        </DropdownMenuItem>
                      </Link>
                    </div>
                  </motion.div>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative group flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-ai-purple/5 transition-all duration-300">
                    <span className="relative z-10">Solutions</span>
                    <ChevronDown className="h-4 w-4 group-hover:text-ai-purple transition-colors" />
                    <div className="absolute inset-0 bg-gradient-to-r from-ai-purple/10 to-ai-blue/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="ml-[350px] mt-2 p-6 space-y-4 bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-xl min-w-[420px]">
                  {/* Primary Service */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border-b border-border/70 pb-4"
                  >
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-2">
                      <Sparkles className="w-4 h-4 text-ai-purple" />
                      Primary Service
                    </div>
                    <Link to="/solutions/agentic-ai-product-pilot-as-service">
                      <DropdownMenuItem className="group text-md p-4 rounded-lg hover:bg-gradient-to-r hover:from-ai-purple/10 hover:to-ai-blue/10 transition-all duration-300 cursor-pointer border border-transparent hover:border-ai-purple/20">
                        <Settings className="mr-3 w-5 h-5 group-hover:text-ai-purple transition-colors" />
                        <div className="flex flex-col">
                          <span className="group-hover:text-ai-purple transition-colors font-semibold">Agentic AI Product Pilot-as-Service</span>
                          <span className="text-xs text-muted-foreground group-hover:text-ai-purple/70">Offshore Delivery</span>
                        </div>
                      </DropdownMenuItem>
                    </Link>
                  </motion.div>

                  {/* Employee Enablement */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex items-center gap-2 text-sm font-medium bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent mb-3">
                      <Sparkles className="w-4 h-4 text-ai-purple" />
                      AI Enablement for your Employees
                    </div>
                    <div className="space-y-2">
                      <Link to="/solutions/ai-talent-transformation-strategy">
                        <DropdownMenuItem className="group text-md p-3 rounded-lg hover:bg-gradient-to-r hover:from-ai-purple/10 hover:to-ai-blue/10 transition-all duration-300 cursor-pointer">
                          <Users className="mr-3 w-4 h-4 group-hover:text-ai-purple transition-colors" />
                          <span className="group-hover:text-ai-purple transition-colors">AI Talent Transformation Strategy</span>
                        </DropdownMenuItem>
                      </Link>
                      <Link to="/solutions/business-ai-programs">
                        <DropdownMenuItem className="group text-md p-3 rounded-lg hover:bg-gradient-to-r hover:from-ai-purple/10 hover:to-ai-blue/10 transition-all duration-300 cursor-pointer">
                          <Briefcase className="mr-3 w-4 h-4 group-hover:text-ai-purple transition-colors" />
                          <span className="group-hover:text-ai-purple transition-colors">Business AI Programs</span>
                        </DropdownMenuItem>
                      </Link>
                      <Link to="/solutions/technical-ai-programs">
                        <DropdownMenuItem className="group text-md p-3 rounded-lg hover:bg-gradient-to-r hover:from-ai-purple/10 hover:to-ai-blue/10 transition-all duration-300 cursor-pointer">
                          <Code className="mr-3 w-4 h-4 group-hover:text-ai-purple transition-colors" />
                          <span className="group-hover:text-ai-purple transition-colors">Technical AI Programs</span>
                        </DropdownMenuItem>
                      </Link>
                    </div>
                  </motion.div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <button onClick={() => window.dispatchEvent(new Event('floating-widget:open'))} className="hidden md:block">
            <Button
              size="lg"
              className="group relative bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-purple/90 hover:to-ai-blue/90 text-white px-8 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center">
                Contact Us
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.div>
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden transition-all duration-200">
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-background border-t border-border">
            <Link
              to="/"
              onClick={handleCloseMenu}
              className="block text-foreground hover:text-ai-purple px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={handleCloseMenu}
              className="block text-foreground hover:text-ai-purple px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            {/* Products Collapsible */}
            <div className="px-3 py-2">
              <button
                className="w-full text-left flex justify-between items-center text-sm font-medium text-muted-foreground mb-2 focus:outline-none"
                onClick={() => setProductsOpen(!productsOpen)}
                aria-expanded={productsOpen}
              >
                Products
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {productsOpen && (
                <div className="pl-4 space-y-1">
                  <span className="block text-foreground hover:text-ai-purple py-1 text-sm">
                    Agentic AI Acceleration Platform
                  </span>
                  <Link
                    to="/product/agentic-ai-builder-playground"
                    onClick={handleCloseMenu}
                    className="flex items-center text-foreground hover:text-ai-purple py-1 text-sm"
                  >
                    <CornerDownRight className="mr-3" />
                    Agentic AI Builder Playground
                  </Link>
                  <Link
                    to="/product/agentic-ai-business-pilot-accelerators"
                    onClick={handleCloseMenu}
                    className="flex items-center text-foreground hover:text-ai-purple py-1 text-sm"
                  >
                    <CornerDownRight className="mr-3" />
                    Agentic AI Business Pilot Accelerators
                  </Link>
                </div>
              )}
            </div>
            {/* Solutions Collapsible */}
            <div className="px-3 py-2">
              <button
                className="w-full text-left flex justify-between items-center text-sm font-medium text-muted-foreground mb-2 focus:outline-none"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                aria-expanded={solutionsOpen}
              >
                Solutions
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    solutionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {solutionsOpen && (
                <div className="pl-4 space-y-1">
                  <Link
                    to="/solutions/agentic-ai-product-pilot-as-service"
                    onClick={handleCloseMenu}
                  >
                    <span className="block text-foreground hover:text-ai-purple py-1 text-sm">
                      Agentic AI Product Pilot-as-service - Offshore Delivery
                    </span>
                  </Link>
                  <span className="block text-foreground hover:text-ai-purple py-1 text-sm">
                    AI Enablement for your Employees
                  </span>
                  <Link
                    to="/solutions/ai-talent-transformation-strategy"
                    onClick={handleCloseMenu}
                    className="flex items-center text-foreground hover:text-ai-purple py-1 text-sm"
                  >
                    <CornerDownRight className="mr-3" />
                    AI Talent Transformation Strategy
                  </Link>
                  <Link
                    to="/solutions/business-ai-programs"
                    onClick={handleCloseMenu}
                    className="flex items-center text-foreground hover:text-ai-purple py-1 text-sm"
                  >
                    <CornerDownRight className="mr-3" />
                    Business AI Programs
                  </Link>
                  <Link
                    to="/solutions/technical-ai-programs"
                    onClick={handleCloseMenu}
                    className="flex items-center text-foreground hover:text-ai-purple py-1 text-sm"
                  >
                    <CornerDownRight className="mr-3" />
                    Technical AI Programs
                  </Link>
                </div>
              )}
            </div>
            {/* <a href="#email-subscription" onClick={handleCloseMenu}>
              <Button className="w-full mt-3 bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-purple/90 hover:to-ai-blue/90 text-white py-3 text-center text-lg font-medium">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
