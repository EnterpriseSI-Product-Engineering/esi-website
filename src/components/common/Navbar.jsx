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
  BookOpen,
} from "lucide-react";
import { Link, useLocation } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect, useRef } from "react";

const useHoverDropdown = () => {
  const [open, setOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const openMenu = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpen(true);
  };
  const closeMenu = () => {
    closeTimeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return { open, setOpen, openMenu, closeMenu };
};

const Navbar = () => {
  const { pathname } = useLocation();
  const productMenu = useHoverDropdown();
  const solutionsMenu = useHoverDropdown();
  const thoughtLeadershipMenu = useHoverDropdown();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 ${isHomePage && !scrolled ? "bg-white/20 " : "bg-white"} md:w-7xl md:px-6 mx-4 sm:px-6 lg:px-8 md:mx-auto mt-2 sm:mt-4 md:mt-5 rounded-full`}
    >
      <div className="container mx-auto md:py-4 py-2 flex items-center justify-between px-4 md:px-0">
        {/* logo */}
        <div>
          <Link to={"/"}>
            <div className="flex items-center gap-1 lg:justify-start">
              <img
                src={"/logo/android-chrome-512x512.png"}
                alt={"logo"}
                title={"EnterpriseSI Logo"}
                className="h-8 sm:h-10"
              />
              <h2 className="text-xl sm:text-2xl md:text-3xl mt-1 leading-0 font-semibold text-esi-primary">
                EnterpriseSI
              </h2>
            </div>
          </Link>
        </div>
        {/* nav menus */}
        <div
          className={`hidden md:block ${isHomePage && !scrolled ? "text-white" : "text-neutral-900"}`}
        >
          <ul className="flex items-center gap-6 text-base font-medium whitespace-nowrap">
            <li>
              <Link
                to="/about-us"
                className={`pb-1 border-b-2 ${
                  pathname === "/about-us"
                    ? "border-white"
                    : "border-transparent"
                }`}
              >
                About Us
              </Link>
            </li>
            <li
              onMouseEnter={productMenu.openMenu}
              onMouseLeave={productMenu.closeMenu}
            >
              <DropdownMenu
                modal={false}
                open={productMenu.open}
                onOpenChange={productMenu.setOpen}
              >
                <DropdownMenuTrigger
                  className={` border-b-2 outline-none cursor-pointer flex items-center gap-1 ${
                    pathname.startsWith("/product")
                      ? "border-white"
                      : "border-transparent"
                  }`}
                >
                  Platform
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  onMouseEnter={productMenu.openMenu}
                  onMouseLeave={productMenu.closeMenu}
                  className="w-[450px] p-6 shadow-xl border-neutral-200"
                >
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
            <li
              onMouseEnter={solutionsMenu.openMenu}
              onMouseLeave={solutionsMenu.closeMenu}
            >
              <DropdownMenu
                modal={false}
                open={solutionsMenu.open}
                onOpenChange={solutionsMenu.setOpen}
              >
                <DropdownMenuTrigger
                  className={`border-b-2 outline-none cursor-pointer flex items-center gap-1 ${
                    pathname.startsWith("/solutions")
                      ? "border-black"
                      : "border-transparent"
                  }`}
                >
                  AI Acceleration
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  onMouseEnter={solutionsMenu.openMenu}
                  onMouseLeave={solutionsMenu.closeMenu}
                  className="w-[400px] p-6 shadow-xl border-neutral-200"
                >
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
            <li
              onMouseEnter={thoughtLeadershipMenu.openMenu}
              onMouseLeave={thoughtLeadershipMenu.closeMenu}
            >
              <DropdownMenu
                modal={false}
                open={thoughtLeadershipMenu.open}
                onOpenChange={thoughtLeadershipMenu.setOpen}
              >
                <DropdownMenuTrigger
                  className={`border-b-2 outline-none cursor-pointer flex items-center gap-1 ${
                    pathname.startsWith("/thought-leadership")
                      ? "border-black"
                      : "border-transparent"
                  }`}
                >
                  Thought Leadership
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  onMouseEnter={thoughtLeadershipMenu.openMenu}
                  onMouseLeave={thoughtLeadershipMenu.closeMenu}
                  className="w-[400px] p-6 shadow-xl border-neutral-200"
                >
                  <div className="flex items-center gap-2 text-sm font-medium text-[#1569a9] mb-3">
                    <Sparkles className="w-4 h-4 text-[#1569a9]" />
                    Resources
                  </div>
                  <div className="space-y-2">
                    <Link to="/thought-leadership/blogs">
                      <DropdownMenuItem className="group text-md p-3 rounded-lg hover:bg-[#1569a9]/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#1569a9]/20">
                        <BookOpen className="mr-3 w-4 h-4 text-[#1569a9]" />
                        <span className="text-neutral-900 font-medium">
                          Blogs
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
            <LiquidButton
              size={"lg"}
              className={isHomePage && !scrolled ? "text-white" : "text-neutral-900"}
            >
              Book a demo
            </LiquidButton>
          </Link>
        </div>

        {/* mobile menu */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-esi-primary" />
          ) : (
            <Menu className="w-6 h-6 text-esi-primary" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white md:hidden  pt-10">
          <div className="container mx-auto px-4 py-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-4 p-2"
            >
              <X className="w-6 h-6 text-esi-primary" />
            </button>
            <Link
              to="/about-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-xl font-medium border-b border-neutral-100"
            >
              About Us
            </Link>
            <div className=" border-b border-neutral-100 pb-4">
              <div className="py-2 text-lg font-semibold text-esi-primary">
                Platforms
              </div>
              <Link
                to="/product"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-4 py-3 text-base"
              >
                Agentic AI Acceleration Platform
              </Link>
              <Link
                to="/product/agentic-ai-builder-playground"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-8 py-2 text-base text-neutral-600"
              >
                AI Builder Playground
              </Link>
              <Link
                to="/product/agentic-ai-business-pilot-accelerators"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-8 py-2 text-base text-neutral-600"
              >
                AI Business Pilot Accelerators
              </Link>
            </div>
            <div className=" border-b border-neutral-100 pb-4">
              <div className="py-2 text-lg font-semibold text-esi-primary">
                Solutions
              </div>
              <Link
                to="/solutions/ai-talent-transformation-strategy"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-4 py-3 text-base"
              >
                AI Talent Transformation Strategy
              </Link>
              <Link
                to="/solutions/business-ai-programs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-4 py-3 text-base"
              >
                Business AI Workshops
              </Link>
              <Link
                to="/solutions/technical-ai-programs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-4 py-3 text-base"
              >
                Technical AI Workshops
              </Link>
            </div>
            <div className=" border-b border-neutral-100 pb-4">
              <div className="py-2 text-lg font-semibold text-esi-primary">
                Thought Leadership
              </div>
              <div className="pl-4 py-1 text-sm font-medium text-neutral-500">
                Resources
              </div>
              <Link
                to="/thought-leadership/blogs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-4 py-3 text-base"
              >
                Blogs
              </Link>
            </div>
            <div className="pt-4">
              <Link to="/demo" onClick={() => setIsMobileMenuOpen(false)}>
                <LiquidButton size="lg" className="w-full">
                  Book a demo
                </LiquidButton>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
