import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  CornerDownRight,
  Menu,
  X,
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
            <div className="ml-10 flex items-baseline space-x-4 ">
              <Link
                to={"/"}
                className="text-foreground hover:text-ai-purple px-3 py-2 rounded-md text-md font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to={"/about"}
                className="text-foreground hover:text-ai-purple px-3 py-2 rounded-md text-md font-medium transition-colors"
              >
                About
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-1">
                    Products
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="ml-[220px] mt-1 p-5 space-y-2">
                  <DropdownMenuItem className="text-md">
                    Agentic AI Acceleration Platform
                  </DropdownMenuItem>
                  <Link to="/product/agentic-ai-builder-playground">
                    <DropdownMenuItem className="text-md ml-1">
                      <CornerDownRight className="mr-3" />
                      Agentic AI Builder Playground
                    </DropdownMenuItem>
                  </Link>
                  <Link to="/product/agentic-ai-business-pilot-accelerators">
                    <DropdownMenuItem className="text-md ml-1">
                      <CornerDownRight className="mr-3" />
                      Agentic AI Business Pilot Accelerators
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-1">
                    Solutions
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="ml-[350px] mt-1 p-5 space-y-2">
                  <Link to="/solutions/agentic-ai-product-pilot-as-service">
                    <DropdownMenuItem className="text-md">
                      Agentic AI Product Pilot-as-service - Offshore Delivery
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem className="text-md">
                    AI Enablement for your Employees
                  </DropdownMenuItem>
                  <Link to="/solutions/ai-talent-transformation-strategy">
                    <DropdownMenuItem className="text-md ml-1">
                      <CornerDownRight className="mr-3" />
                      AI Talent Transformation Strategy
                    </DropdownMenuItem>
                  </Link>
                  <Link to="/solutions/business-ai-programs">
                    <DropdownMenuItem className="text-md ml-1">
                      <CornerDownRight className="mr-3" />
                      Business AI Programs
                    </DropdownMenuItem>
                  </Link>
                  <Link to="/solutions/technical-ai-programs">
                    <DropdownMenuItem className="text-md ml-1">
                      <CornerDownRight className="mr-3" />
                      Technical AI Programs
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <a href="#email-subscription" className="hidden md:block">
            <Button
              size="lg"
              className="bg-gradient-to-r from-ai-purple to-ai-blue hover:from-ai-purple/90 hover:to-ai-blue/90 text-white px-8 py-6 text-lg font-medium"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>

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
