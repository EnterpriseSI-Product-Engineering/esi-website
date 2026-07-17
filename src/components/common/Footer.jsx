import { Linkedin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";



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
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-[1.25fr_2fr] lg:grid-cols-[1.25fr_2fr] lg:gap-12">
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
            <p className="mt-4 max-w-sm text-sm leading-6 text-ploy-text-secondary md:mt-5">
              Agentic AI accelerators, secure builder playgrounds, and talent
              transformation for enterprise adoption.
            </p>
            <a
              href="https://www.linkedin.com/company/enterprisesi"
              aria-label="EnterpriseSI on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-button border border-ploy-border-primary p-2.5 text-ploy-text-secondary hover:text-ploy-text-primary md:mt-6"
            >
              <Linkedin size={18} />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8">
            {GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <ul className="mt-4 space-y-3 md:mt-5">
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
        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-ploy-border-primary pt-5 text-xs text-ploy-text-secondary md:mt-12 md:flex-row md:pt-7">
          <p>© {new Date().getFullYear()} EnterpriseSI. All rights reserved.</p>
          <p>Enterprise AI, with humans in control.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
