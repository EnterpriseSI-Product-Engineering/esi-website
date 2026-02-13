import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { GradientCard } from "@/components/ui/animatedcard";

import AIExpense from "../../assets/PilotAccelerators/AIExpense.png";
import AuditorCopilot from "../../assets/PilotAccelerators/AuditorCopilot.png";
import AuditorCopilot2 from "../../assets/PilotAccelerators/AuditorCopilot2.png";
import BankingAudit from "../../assets/PilotAccelerators/BankingAudit.png";
import InvoiceGeneration from "../../assets/PilotAccelerators/InvoiceGeneration.png";
import Reconciliation from "../../assets/PilotAccelerators/Reconciliation.png";
import TimsheetDashboard from "../../assets/PilotAccelerators/TimesheetDashboard.png";
import VatAgent from "../../assets/PilotAccelerators/VatAgent.png";

const focusAreasData = [
  {
    key: "finance",
    title: "Finance & Accounting",
    description: "Automated financial processes and reporting",
    copilots: [
      {
        name: "Accounting Copilot - Invoice Generation",
        description:
          "Generates comprehensive financial reports with automated data aggregation and analysis.",
        features: [
          "Automated report generation",
          "Customizable templates",
          "Multi-source data integration",
          "Variance analysis and insights",
          "Regulatory compliance formatting",
        ],
        imageSource: Reconciliation,
        imagePlaceholder: "Financial Reporting Interface",
      },
      {
        name: "Accounting Copilot - Reconciliation",
        description:
          "Automates invoice data extraction, validation, and approval workflows with intelligent matching.",
        features: [
          "AI-powered data extraction from invoices",
          "Automatic 3-way matching between enterprise policy, purchase orders and invoices",
          "Exception handling and routing",
          "Real-time processing status",
        ],
        imageSource: InvoiceGeneration,
        imagePlaceholder: "Invoice Processing Dashboard",
      },
      {
        name: "Timesheet Accounting Copilot - Employee Timesheet & Invoice Management",
        description:
          "Streamlines expense submission, approval, and reconciliation processes.",
        features: [
          "Timesheet data integration",
          "Multi-source integration",
          "Gmail & Outlook invoice transfer",
          "Policy compliance checking",
          "Deep industry insights",
          "Real-time analytics and viusualizations",
        ],
        imageSource: TimsheetDashboard,
        imagePlaceholder: "Expense Management View",
      },
      {
        name: "Expense Reimbursement Copilot",
        description:
          "AI-driven expense report handling, regulatory monitoring and compliance gap identification against expense policies.",
        features: [
          "AI-powered regulatory monitoring",
          "Integration with regulation policy and statement of work",
          "AI-driven compliance check and analysis",
          "Regulatory change tracking",
          "Human-in-the-loop validation",
          "Compliance gap identification",
          "Action item generation",
        ],
        imageSource: AIExpense,
        imagePlaceholder: "Regulatory Monitoring Interface",
      },
    ],
  },
  {
    key: "audit",
    title: "Internal Auditing",
    description: "Intelligent audit workflows and compliance checks",
    copilots: [
      {
        name: "Audit Planning Copilot",
        description:
          "AI-driven audit planning with risk-based prioritization and resource allocation.",
        features: [
          "Risk-based audit scheduling",
          "Digital audit program",
          "Templates and Prompt Library",
          "Resource optimization",
          "Historical trend analysis",
          "Stakeholder coordination",
        ],
        imageSource: AuditorCopilot,
        imagePlaceholder: "Audit Planning Dashboard",
      },
      {
        name: "Evidence Collection Copilot",
        description:
          "Upload or automate evidence gathering and utilization for audit procedures.",
        features: [
          "Specialized agents for industry standard processes",
          "Automated evidence requests",
          "Document classification",
          "Chain of custody tracking",
          "Completeness validation",
        ],
        imageSource: AuditorCopilot2,
        imagePlaceholder: "Evidence Collection Interface",
      },
      {
        name: "Database Encapsulation",
        description:
          "Gather live data directly from an underlying database and perform audit findings.",
        features: [
          "Deep data access and querying",
          "Complex schema understanding",
          "High-volume data processing",
          "Finding categorization and scoring",
          "Root cause analysis support",
          "Remediation tracking",
          "Executive reporting",
        ],
        imageSource: BankingAudit,
        imagePlaceholder: "Findings Management View",
      },
    ],
  },
  {
    key: "risk",
    title: "Risk & Compliance",
    description: "Proactive risk management and regulatory compliance",
    copilots: [
      {
        name: "Vendor Risk Assessment Copilot",
        description:
          "Continuous risk monitoring with live VAT verification and AI-powered threat detection and scoring.",
        features: [
          "Vendor due diligence automation",
          "Real-time risk monitoring",
          "Predictive risk scoring",
          "Control effectiveness testing",
          "Risk heat mapping",
        ],
        imageSource: VatAgent,
        imagePlaceholder: "Risk Assessment Dashboard",
      },
    ],
  },
];

const getAreaStyles = () => {
  return {
    border: "border-[#1569a9]",
    bg: "bg-[#1569a9]",
    bgLight: "bg-[#1569a9]/5",
    text: "text-[#1569a9]",
  };
};

const CopilotCarousel = ({ copilots, areaKey }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(autoScroll);
  }, [emblaApi]);

  const styles = getAreaStyles();

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex">
          {copilots.map((copilot, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 px-2">
              <div className="grid md:grid-cols-2 gap-4 p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#1569a9]">
                    {copilot.name}
                  </h3>
                  <p className="text-neutral-600 text-lg">
                    {copilot.description}
                  </p>
                  <ul className="space-y-3">
                    {copilot.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 ${styles.bg} opacity-80`}
                        />
                        <span className="text-neutral-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`relative rounded-xl border-2 ${
                    copilot.imageSource ? "border-solid" : "border-dashed"
                  } ${styles.border} bg-white min-h-[320px] flex items-center justify-center overflow-hidden`}
                >
                  {copilot.imageSource ? (
                    <img
                      src={copilot.imageSource}
                      alt={copilot.name}
                      className="w-full h-full object-contain p-2"
                      loading="lazy"
                    />
                  ) : (
                    <div className="text-center p-8">
                      <p className="text-neutral-500 font-medium uppercase tracking-wider text-sm">
                        {copilot.imagePlaceholder}
                      </p>
                      <p className="text-neutral-400 text-xs mt-2">
                        Copilot image coming soon
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className={`absolute -left-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full border ${styles.border} ${styles.bgLight} flex items-center justify-center hover:opacity-100 transition-all duration-300 opacity-50`}
      >
        <ChevronLeft className={`w-4 h-4 ${styles.text}`} />
      </button>
      <button
        onClick={scrollNext}
        className={`absolute -right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full border ${styles.border} ${styles.bgLight} flex items-center justify-center hover:opacity-100 transition-all duration-300 opacity-50`}
      >
        <ChevronRight className={`w-4 h-4 ${styles.text}`} />
      </button>

      <div className="flex justify-center gap-2 mt-6">
        {copilots.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${styles.bg} ${
              index === selectedIndex
                ? "opacity-100 scale-125"
                : "opacity-30 hover:opacity-60"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-6 right-6">
        <button
          onClick={() =>
            window.open(
              "https://master.d1jvuujmp5rpat.amplifyapp.com/",
              "_blank",
            )
          }
          className={`px-4 py-2 rounded-lg text-sm font-medium text-white shadow-md hover:shadow-lg transition-all duration-300 ${styles.bg}`}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

const FocusAreas = () => {
  const [selectedArea, setSelectedArea] = useState("finance");

  const handleAreaClick = (key) => {
    setSelectedArea(key);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Key <span className="bg-gradient-to-r from-[#1569a9] to-[#0d5a8f] bg-clip-text text-transparent">Domains</span>
          </h2>
          <p className="text-xl text-neutral-600">
            Starting with 20 high-impact use cases across key business functions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {focusAreasData.map((area) => {
            const isSelected = selectedArea === area.key;

            return (
              <div key={area.key} onClick={() => handleAreaClick(area.key)}>
                <GradientCard
                  className={`group cursor-pointer transition-all duration-300 h-full rounded-xl ${
                    isSelected
                      ? "border-2 border-[#1569a9] shadow-lg bg-[#1569a9]/5"
                      : "hover:shadow-md hover:-translate-y-1 hover:border-[#1569a9]/30"
                  }`}
                >
                  <div className="p-8 text-center">
                    <h3
                      className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                        isSelected
                          ? "text-[#1569a9]"
                          : "text-neutral-900 group-hover:text-[#1569a9]"
                      }`}
                    >
                      {area.title}
                    </h3>
                    <p className="text-neutral-600">
                      {area.description}
                    </p>
                  </div>
                </GradientCard>
              </div>
            );
          })}
        </div>

        {selectedArea && (
          <div className="mt-8">
            {(() => {
              const area = focusAreasData.find((a) => a.key === selectedArea);
              if (!area) return null;

              return (
                <GradientCard className="rounded-2xl border-2 border-[#1569a9]/20 bg-[#1569a9]/5">
                  <div className="p-4">
                    <CopilotCarousel
                      copilots={area.copilots}
                      areaKey={selectedArea}
                    />
                  </div>
                </GradientCard>
              );
            })()}
          </div>
        )}
      </div>
    </section>
  );
};

export default FocusAreas;
