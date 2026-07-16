import { Linkedin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const defaultSections = [
  {
    title: "Company",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about-us" },
    ],
  },
  {
    title: "Products",
    links: [
      // { name: "Agentic AI Acceleration Platform", href: "/product" },
      {
        name: "AI Builder Playground",
        href: "/product/agentic-ai-builder-playground",
      },
      {
        name: "AI Business Pilot Accelerators",
        href: "/product/agentic-ai-business-pilot-accelerators",
      },
    ],
  },
  {
    title: "Solutions",
    links: [
      {
        name: "AI Talent Transformation Strategy",
        href: "/solutions/ai-talent-transformation-strategy",
      },
      {
        name: "Business AI Workshops",
        href: "/solutions/business-ai-programs",
      },
      {
        name: "Technical AI Workshops",
        href: "/solutions/technical-ai-programs",
      },
    ],
  },
];

const defaultSocialLinks = [
  // { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  // { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  {
    icon: <FaLinkedin className="size-5" />,
    href: "https://www.linkedin.com/company/enterprisesi",
    label: "LinkedIn",
  },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const GROUPS = [
  {
    title: "Company",
    links: [
      ["Home", "/"],
      ["About us", "https://enterprisesi.co/about-us"],
    ],
  },
  {
    title: "Products",
    links: [
      [
        "AI Builder Playground",
        "https://enterprisesi.co/product/agentic-ai-builder-playground",
      ],
      [
        "Business Pilot Accelerators",
        "https://enterprisesi.co/product/agentic-ai-business-pilot-accelerators",
      ],
    ],
  },
  {
    title: "Solutions",
    links: [
      [
        "AI Talent Strategy",
        "https://enterprisesi.co/solutions/ai-talent-transformation-strategy",
      ],
      [
        "Business AI Programs",
        "https://enterprisesi.co/solutions/business-ai-programs",
      ],
      [
        "Technical AI Programs",
        "https://enterprisesi.co/solutions/technical-ai-programs",
      ],
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer border-t border-ploy-border-primary bg-ploy-background-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_2fr]">
          <div>
            <a
              href="/"
              className="flex items-center gap-2"
              aria-label="EnterpriseSI home"
            >
              <img
                src="/logo/android-chrome-512x512.png"
                alt=""
                className="h-8 w-8"
              />
              <span className="font-heading text-xl font-semibold">
                EnterpriseSI
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-ploy-text-secondary">
              Agentic AI accelerators, secure builder playgrounds, and talent
              transformation for enterprise adoption.
            </p>
            <a
              href="https://www.linkedin.com/company/enterprisesi"
              aria-label="EnterpriseSI on LinkedIn"
              className="mt-6 inline-flex rounded-button border border-ploy-border-primary p-2.5 text-ploy-text-secondary hover:text-ploy-text-primary"
            >
              <Linkedin size={18} />
            </a>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <ul className="mt-5 space-y-3">
                  {group.links.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="text-sm text-ploy-text-secondary transition-colors hover:text-ploy-text-primary"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-ploy-border-primary pt-7 text-xs text-ploy-text-secondary sm:flex-row">
          <p>© {new Date().getFullYear()} EnterpriseSI. All rights reserved.</p>
          <p>Enterprise AI, with humans in control.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
