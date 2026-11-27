"use client";

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
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect, useRef } from "react";
import { programs } from "@/data/programs";

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
  const pathname = usePathname();
  const productMenu = useHoverDropdown();
  const solutionsMenu = useHoverDropdown();
  const thoughtLeadershipMenu = useHoverDropdown();
  const coursesMenu = useHoverDropdown();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHomePage = pathname === "/";

  // Active page: filled pill. Hover and open menu: a lighter version of it.
  const onDark = isHomePage && !scrolled;
  const navClass = (active) =>
    `flex h-9 items-center gap-1 rounded-full px-3.5 outline-none cursor-pointer transition-colors focus-visible:ring-2 focus-visible:ring-current [&_svg]:transition-transform data-[state=open]:[&_svg]:rotate-180 ${
      active
        ? onDark
          ? "bg-white/25 text-white"
          : "bg-[#047857] text-white shadow-sm"
        : onDark
          ? "hover:bg-white/15 data-[state=open]:bg-white/15"
          : "hover:bg-[#047857]/10 hover:text-[#047857] data-[state=open]:bg-[#047857]/10 data-[state=open]:text-[#047857]"
    }`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 ${isHomePage && !scrolled ? "bg-white/20 " : "bg-[#f8fafc]/95 lg:backdrop-blur-md border border-neutral-300/80 shadow-xs"} mx-4 px-0 sm:px-2 lg:px-6 lg:mx-auto lg:w-[calc(100%-2rem)] lg:max-w-7xl mt-2 sm:mt-4 md:mt-5 rounded-full`}
    >
      <div className="flex items-center justify-between gap-6 py-2.5 lg:py-3 px-4 lg:px-0">
        {/* logo */}
        <div>
          <Link href={"/"}>
            <div className="flex items-center gap-2">
              <img
                src={"/logo/android-chrome-512x512.png"}
                alt={"logo"}
                title={"EnterpriseSI Logo"}
                className="h-7 w-7 sm:h-8 sm:w-8"
              />
              <span className="text-lg sm:text-xl font-semibold tracking-tight leading-none text-esi-primary">
                EnterpriseSI
              </span>
            </div>
          </Link>
        </div>
        {/* nav menus */}
        <div
          className={`hidden lg:block ${onDark ? "text-white" : "text-neutral-900"}`}
        >
          <ul className="flex items-center gap-1 text-[15px] font-medium whitespace-nowrap">
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
                  className={navClass(pathname.startsWith("/product"))}
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
                    <Link href="/product">
                      <DropdownMenuItem className="group text-md p-5 rounded-xl hover:bg-gradient-to-r hover:from-[#047857]/5 hover:to-[#047857]/10 transition-all duration-300 cursor-pointer border border-neutral-100 hover:border-[#047857]/30 hover:shadow-md">
                        <div className="flex items-start gap-4 w-full">
                          <div className="p-2 rounded-lg bg-[#047857]/10 group-hover:bg-[#047857]/20 transition-colors">
                            <Rocket className="w-5 h-5 text-[#047857]" />
                          </div>
                          <div className="flex flex-col flex-1">
                            <span className="text-[#047857] font-semibold text-base mb-1">
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
                      <Link href="/product/agentic-ai-builder-playground">
                        <div className="relative">
                          <div className="absolute left-[-16px] top-[20px] w-4 h-0.5 bg-neutral-200" />
                          <DropdownMenuItem className="group text-md p-4 rounded-lg hover:bg-[#047857]/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#047857]/20">
                            <div className="flex items-start gap-3 w-full">
                              <Gamepad2 className="w-4 h-4 text-[#047857] mt-0.5" />
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
                      <Link href="/product/agentic-ai-business-pilot-accelerators">
                        <div className="relative">
                          <div className="absolute left-[-16px] top-[20px] w-4 h-0.5 bg-neutral-200" />
                          <DropdownMenuItem className="group text-md p-4 rounded-lg hover:bg-[#047857]/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#047857]/20">
                            <div className="flex items-start gap-3 w-full">
                              <Zap className="w-4 h-4 text-[#047857] mt-0.5" />
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
                  className={navClass(pathname.startsWith("/solutions"))}
                >
                  Solutions
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  onMouseEnter={solutionsMenu.openMenu}
                  onMouseLeave={solutionsMenu.closeMenu}
                  className="w-[400px] p-6 shadow-xl border-neutral-200"
                >
                  <div className="flex items-center gap-2 text-sm font-medium text-[#047857] mb-3">
                    <Sparkles className="w-4 h-4 text-[#047857]" />
                    AI Enablement for your Employees
                  </div>
                  <div className="space-y-2">
                    <Link href="/solutions/ai-talent-transformation-strategy">
                      <DropdownMenuItem className="group text-md p-3 rounded-lg hover:bg-[#047857]/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#047857]/20">
                        <Users className="mr-3 w-4 h-4 text-[#047857]" />
                        <span className="text-neutral-900 font-medium">
                          AI Talent Transformation Strategy
                        </span>
                      </DropdownMenuItem>
                    </Link>
                    <Link href="/solutions/business-ai-programs">
                      <DropdownMenuItem className="group text-md p-3 rounded-lg hover:bg-[#047857]/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#047857]/20">
                        <Briefcase className="mr-3 w-4 h-4 text-[#047857]" />
                        <span className="text-neutral-900 font-medium">
                          Business AI Programs
                        </span>
                      </DropdownMenuItem>
                    </Link>

                    <Link href="/solutions/ai-technical-programs">
                      <DropdownMenuItem className="group text-md p-3 rounded-lg hover:bg-[#047857]/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#047857]/20">
                        <BookOpen className="mr-3 w-4 h-4 text-[#047857]" />
                        <span className="text-neutral-900 font-medium">
                          AI Technical Programs
                        </span>
                      </DropdownMenuItem>
                    </Link>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li
              onMouseEnter={coursesMenu.openMenu}
              onMouseLeave={coursesMenu.closeMenu}
            >
              <DropdownMenu
                modal={false}
                open={coursesMenu.open}
                onOpenChange={coursesMenu.setOpen}
              >
                <DropdownMenuTrigger
                  className={navClass(pathname.startsWith("/courses"))}
                >
                  Courses
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  onMouseEnter={coursesMenu.openMenu}
                  onMouseLeave={coursesMenu.closeMenu}
                  className="w-[360px] p-3 shadow-xl border-neutral-200"
                >
                  {programs.map((program) => (
                    <DropdownMenuItem
                      key={program.slug}
                      asChild
                      className="p-3 rounded-lg cursor-pointer font-medium text-neutral-900"
                    >
                      <Link href={`/courses/${program.slug}`}>
                        <BookOpen className="mr-1 w-4 h-4 text-[#047857]" />
                        {program.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem
                    asChild
                    className="mt-1 justify-center p-3 rounded-lg cursor-pointer font-semibold text-[#047857] border-t border-neutral-200"
                  >
                    <Link href="/courses">View all courses &rarr;</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link
                href="/masterclass"
                aria-current={pathname === "/masterclass" ? "page" : undefined}
                className={navClass(pathname === "/masterclass")}
              >
                Masterclass
              </Link>
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
                  className={navClass(pathname.startsWith("/thought-leadership"))}
                >
                  Resources
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  onMouseEnter={thoughtLeadershipMenu.openMenu}
                  onMouseLeave={thoughtLeadershipMenu.closeMenu}
                  className="w-[400px] p-6 shadow-xl border-neutral-200"
                >
                  <div className="space-y-2">
                    <Link href="/thought-leadership/blogs">
                      <DropdownMenuItem className="group text-md p-3 rounded-lg hover:bg-[#047857]/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#047857]/20">
                        <BookOpen className="mr-3 w-4 h-4 text-[#047857]" />
                        <span className="text-neutral-900 font-medium">
                          Blogs
                        </span>
                      </DropdownMenuItem>
                    </Link>
                    <Link href="/thought-leadership/product-innovation">
                      <DropdownMenuItem className="group text-md p-3 rounded-lg hover:bg-[#047857]/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-[#047857]/20">
                        <Lightbulb className="mr-3 w-4 h-4 text-[#047857]" />
                        <span className="text-neutral-900 font-medium">
                          Product Innovations
                        </span>
                      </DropdownMenuItem>
                    </Link>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link
                href="/about-us"
                aria-current={pathname === "/about-us" ? "page" : undefined}
                className={navClass(pathname === "/about-us")}
              >
                About Us
              </Link>
            </li>
            {/* <li>
              <Link
                href="/team"
                aria-current={pathname === "/team" ? "page" : undefined}
                className={navClass(pathname === "/team")}
              >
                Team
              </Link>
            </li> */}
          </ul>
        </div>
        {/* action button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/demo">
            <LiquidButton
              size={"default"}
              className={isHomePage && !scrolled ? "text-white" : "text-neutral-900"}
            >
              Book a demo
            </LiquidButton>
          </Link>
        </div>

        {/* mobile menu */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden p-2"
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
        <div className="fixed inset-0 z-40 h-dvh overflow-y-auto bg-[#f8fafc] lg:hidden pt-10">
          <div className="container mx-auto px-4 py-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-4 p-2"
            >
              <X className="w-6 h-6 text-esi-primary" />
            </button>
            <div className=" border-b border-neutral-100 pb-4">
              <div className="py-2 text-lg font-semibold text-esi-primary">
                Platform
              </div>
              <Link
                href="/product"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-4 py-3 text-base"
              >
                Agentic AI Acceleration Platform
              </Link>
              <Link
                href="/product/agentic-ai-builder-playground"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-8 py-2 text-base text-neutral-600"
              >
                AI Builder Playground
              </Link>
              <Link
                href="/product/agentic-ai-business-pilot-accelerators"
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
                href="/solutions/ai-talent-transformation-strategy"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-4 py-3 text-base"
              >
                AI Talent Transformation Strategy
              </Link>
              <Link
                href="/solutions/business-ai-programs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-4 py-3 text-base"
              >
                Business AI Programs
              </Link>

              <Link
                href="/solutions/ai-technical-programs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-4 py-3 text-base"
              >
                AI Technical Programs
              </Link>
            </div>
            <div className=" border-b border-neutral-100 pb-4">
              <div className="py-2 text-lg font-semibold text-esi-primary">
                Courses
              </div>
              {[
                ...programs.map((p) => [`/courses/${p.slug}`, p.title]),
                ["/courses", "View all courses"],
              ].map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block pl-4 py-3 text-base"
                >
                  {label}
                </Link>
              ))}
            </div>
            <Link
              href="/masterclass"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-xl font-medium border-b border-neutral-100"
            >
              Masterclass
            </Link>
            <div className=" border-b border-neutral-100 pb-4">
              <div className="py-2 text-lg font-semibold text-esi-primary">
                Resources
              </div>
              <Link
                href="/thought-leadership/blogs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-4 py-3 text-base"
              >
                Blogs
              </Link>
              <Link
                href="/thought-leadership/product-innovation"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block pl-4 py-3 text-base"
              >
                Product Innovations
              </Link>
            </div>
            <Link
              href="/about-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-3 text-xl font-medium border-b border-neutral-100"
            >
              About Us
            </Link>
            <div className="pt-4">
              <Link href="/demo" onClick={() => setIsMobileMenuOpen(false)}>
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
