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

const Footer = ({
  logo = {
    src: "/logo/android-chrome-512x512.png",
    alt: "logo",
    title: "EnterpriseSI",
  },

  sections = defaultSections,
  // description = "Ground floor, WeWork Embassy One, 8, Bellary Rd, Dena Bank Colony, Ganganagar, Bengaluru, Karnataka 560032",
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} EnterpriseSI. All rights reserved.`,
  legalLinks = defaultLegalLinks,
}) => {
  return (
    <section className="pt-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-between">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-1 lg:justify-start">
              <img
                src={logo.src}
                alt={logo.alt}
                title={logo.title}
                className="h-8"
              />
              <h2 className="text-2xl mt-1 leading-0 font-semibold text-esi-primary">
                {logo.title}
              </h2>
            </div>
            {/* <p className="max-w-full lg:max-w-[70%] text-sm text-muted-foreground">
              {description}
            </p> */}
            <ul className="flex items-center space-x-6 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid w-full gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground flex flex-col gap-4">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
