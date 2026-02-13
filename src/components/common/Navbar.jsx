import { LiquidButton } from "@/components/ui/liquid-glass-button";
import {
  Menu,
  Rocket,
  Gamepad2,
  Zap,
  ChevronDown,
  Sparkles,
  Users,
  Briefcase,
  Code,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="border-b fixed top-0 left-0 right-0 z-50 bg-white ">
      <div className="container mx-auto  py-5 flex items-center justify-between px-4 md:px-0">
        {/* logo */}
        <div>
          <Link to={"/"}>
            <div className="flex items-center gap-1 lg:justify-start">
              <img
                src={"/logo/android-chrome-512x512.png"}
                alt={"logo"}
                title={"EnterpriseSI Logo"}
                className="h-10"
              />
              <h2 className="text-3xl mt-1 leading-0 font-semibold text-esi-primary">
                EnterpriseSI
              </h2>
            </div>
          </Link>
        </div>
        {/* nav menus */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-8 text-lg font-medium text-neutral-900">
            <li>
              <Link
                to="/"
                className={`pb-1 border-b-2 ${
                  pathname === "/" ? "border-black" : "border-transparent"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className={`pb-1 border-b-2 ${
                  pathname === "/about-us"
                    ? "border-black"
                    : "border-transparent"
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <DropdownMenu
                open={isProductOpen}
                onOpenChange={setIsProductOpen}
              >
                <DropdownMenuTrigger
                  className={` border-b-2 outline-none cursor-pointer flex items-center gap-1 ${
                    pathname.startsWith("/product")
                      ? "border-black"
                      : "border-transparent"
                  }`}
                >
                  Products
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[450px] p-6 shadow-xl border-neutral-200">
                  <div className="space-y-3">
                    <Link to="/product">
                      <DropdownMenuItem className="group text-md p-5 rounded-xl hover:bg-gradient-to-r hover:from-[#1569a9]/5 hover:to-[#1569a9]/10 transition-all duration-300 cursor-pointer border border-neutral-100 hover:border-[#1569a9]/30 hover:shadow-md">
                        <div className="flex items-start gap-4 w-full">
                          <div className="p-2 rounded-lg bg-[#1569a9]/10 group-hover:bg-[#1569a9]/20 transition-colors">
                            <Rocket className="w-5 h-5 text-[#1569a9]" />
                          </div>
                          <div className="flex flex-col flex-1">
                            <span className="text-[#1569a9] font-semibold text-base mb-1">
                              Agentic AI Acceleration Platform
                            </span>
                            <span className="text-xs text-neutral-500 leading-relaxed">
                              Comprehensive AI Development Platform
                            </span>
                          </div>
                        </div>
                      </DropdownMenuItem>
                    </Link>
                    <div className="relative pl-4 ml-6 space-y-2">
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-neutral-200" />
                      <Link to="/product/agentic-ai-builder-playground">
                        <div className="relative">
                          <div className="absolute left-[-16px] top-[20px] w-4 h-0.5 bg-neutral-200" />
                          <DropdownMenuItem className="group text-md p-4 rounded-lg hover:bg-[#1569a9]/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#1569a9]/20">
                            <div className="flex items-start gap-3 w-full">
                              <Gamepad2 className="w-4 h-4 text-[#1569a9] mt-0.5" />
                              <div className="flex flex-col flex-1">
                                <span className="text-neutral-900 font-medium text-sm mb-0.5">
                                  Agentic AI Builder Playground
                                </span>
                                <span className="text-xs text-neutral-500">
                                  Interactive Development Environment
                                </span>
                              </div>
                            </div>
                          </DropdownMenuItem>
                        </div>
                      </Link>
                      <Link to="/product/agentic-ai-business-pilot-accelerators">
                        <div className="relative">
                          <div className="absolute left-[-16px] top-[20px] w-4 h-0.5 bg-neutral-200" />
                          <DropdownMenuItem className="group text-md p-4 rounded-lg hover:bg-[#1569a9]/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#1569a9]/20">
                            <div className="flex items-start gap-3 w-full">
                              <Zap className="w-4 h-4 text-[#1569a9] mt-0.5" />
                              <div className="flex flex-col flex-1">
                                <span className="text-neutral-900 font-medium text-sm mb-0.5">
                                  Agentic AI Business Pilot Accelerators
                                </span>
                                <span className="text-xs text-neutral-500">
                                  Ready-to-Deploy Business Solutions
                                </span>
                              </div>
                            </div>
                          </DropdownMenuItem>
                        </div>
                      </Link>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <DropdownMenu
                open={isSolutionsOpen}
                onOpenChange={setIsSolutionsOpen}
              >
                <DropdownMenuTrigger
                  className={`border-b-2 outline-none cursor-pointer flex items-center gap-1 ${
                    pathname.startsWith("/solutions")
                      ? "border-black"
                      : "border-transparent"
                  }`}
                >
                  Solutions
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[400px] p-6 shadow-xl border-neutral-200">
                  <div className="flex items-center gap-2 text-sm font-medium text-[#1569a9] mb-3">
                    <Sparkles className="w-4 h-4 text-[#1569a9]" />
                    AI Enablement for your Employees
                  </div>
                  <div className="space-y-2">
                    <Link to="/solutions/ai-talent-transformation-strategy">
                      <DropdownMenuItem className="group text-md p-3 rounded-lg hover:bg-[#1569a9]/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#1569a9]/20">
                        <Users className="mr-3 w-4 h-4 text-[#1569a9]" />
                        <span className="text-neutral-900 font-medium">
                          AI Talent Transformation Strategy
                        </span>
                      </DropdownMenuItem>
                    </Link>
                    <Link to="/solutions/business-ai-programs">
                      <DropdownMenuItem className="group text-md p-3 rounded-lg hover:bg-[#1569a9]/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#1569a9]/20">
                        <Briefcase className="mr-3 w-4 h-4 text-[#1569a9]" />
                        <span className="text-neutral-900 font-medium">
                          Business AI Workshops
                        </span>
                      </DropdownMenuItem>
                    </Link>
                    <Link to="/solutions/technical-ai-programs">
                      <DropdownMenuItem className="group text-md p-3 rounded-lg hover:bg-[#1569a9]/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#1569a9]/20">
                        <Code className="mr-3 w-4 h-4 text-[#1569a9]" />
                        <span className="text-neutral-900 font-medium">
                          Technical AI Workshops
                        </span>
                      </DropdownMenuItem>
                    </Link>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            {/* <li>
              <Link
                to="/team"
                className={`pb-1 border-b-2 ${
                  pathname === "/team" ? "border-black" : "border-transparent"
                }`}
              >
                Team
              </Link>
            </li> */}
          </ul>
        </div>
        {/* action button */}
        <div className="md:flex items-center gap-4 hidden">
          <Link to="/demo">
            <LiquidButton size={"lg"}>Book a demo</LiquidButton>
          </Link>
          <Link to="https://lab.enterprisesi.co" target="_blank">
            <button className="group relative cursor-pointer inline-flex h-[42px] items-center justify-center rounded-full bg-neutral-900 py-1 pl-6 pr-14 font-medium text-neutral-50">
              <span className="z-10 pr-2">Log In</span>
              <div className="absolute right-1 inline-flex size-8 items-center justify-end rounded-full bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]">
                <div className="mr-3.5 flex items-center justify-center">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 -mr-2 text-neutral-50"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </button>
          </Link>
        </div>

        {/* mobile menu */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
          {isMobileMenuOpen ? <X className="text-esi-primary" /> : <Menu className="text-esi-primary" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-lg font-medium">
              Home
            </Link>
            <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-lg font-medium">
              About Us
            </Link>
            <div className="space-y-2">
              <div className="py-2 text-lg font-medium">Products</div>
              <Link to="/product" onClick={() => setIsMobileMenuOpen(false)} className="block pl-4 py-2 text-sm">
                Agentic AI Acceleration Platform
              </Link>
              <Link to="/product/agentic-ai-builder-playground" onClick={() => setIsMobileMenuOpen(false)} className="block pl-4 py-2 text-sm ml-5">
                AI Builder Playground
              </Link>
              <Link to="/product/agentic-ai-business-pilot-accelerators" onClick={() => setIsMobileMenuOpen(false)} className="block pl-4 py-2 text-sm ml-5">
                AI Business Pilot Accelerators
              </Link>
            </div>
            <div className="space-y-2">
              <div className="py-2 text-lg font-medium">Solutions</div>
              <Link to="/solutions/ai-talent-transformation-strategy" onClick={() => setIsMobileMenuOpen(false)} className="block pl-4 py-2 text-sm">
                AI Talent Transformation Strategy
              </Link>
              <Link to="/solutions/business-ai-programs" onClick={() => setIsMobileMenuOpen(false)} className="block pl-4 py-2 text-sm">
                Business AI Workshops
              </Link>
              <Link to="/solutions/technical-ai-programs" onClick={() => setIsMobileMenuOpen(false)} className="block pl-4 py-2 text-sm">
                Technical AI Workshops
              </Link>
            </div>
            <Link to="/demo" onClick={() => setIsMobileMenuOpen(false)}>
              <LiquidButton size="lg" className="w-full">Book a demo</LiquidButton>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
