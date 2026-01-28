import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

import AIExpense from "../../assets/PilotAccelerators/AIExpense.png";
import AuditorCopilot from "../../assets/PilotAccelerators/AuditorCopilot.png";
import AuditorCopilot2 from "../../assets/PilotAccelerators/AuditorCopilot2.png";
import BankingAudit from "../../assets/PilotAccelerators/BankingAudit.png";
import InvoiceGeneration from "../../assets/PilotAccelerators/InvoiceGeneration.png";
import Reconciliation from "../../assets/PilotAccelerators/Reconciliation.png";
import TimsheetDashboard from "../../assets/PilotAccelerators/TimesheetDashboard.png";
import VatAgent from "../../assets/PilotAccelerators/VatAgent.png";


type FocusAreaKey = "finance" | "audit" | "risk";

interface Copilot {
    name: string;
    description: string;
    features: string[];
    imageSource?: string;
    imagePlaceholder: string;
}

interface FocusArea {
    key: FocusAreaKey;
    title: string;
    description: string;
    copilots: Copilot[];
}

const focusAreasData: FocusArea[] = [
    {
        key: "finance",
        title: "Finance & Accounting",
        description: "Automated financial processes and reporting",
        copilots: [
            {
                name: "Accounting Copilot - Invoice Generation",
                description: "Generates comprehensive financial reports with automated data aggregation and analysis.",
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
                description: "Automates invoice data extraction, validation, and approval workflows with intelligent matching.",
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
                description: "Streamlines expense submission, approval, and reconciliation processes.",
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
                description: "AI-driven expense report handling, regulatory monitoring and compliance gap identification against expense policies.",
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
                description: "AI-driven audit planning with risk-based prioritization and resource allocation.",
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
                description: "Upload or automate evidence gathering and utilization for audit procedures.",
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
                description: "Gather live data directly from an underlying database and perform audit findings.",
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
                description: "Continuous risk monitoring with live VAT verification and AI-powered threat detection and scoring.",
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

            // {
            //     name: "Policy Management Copilot",
            //     description: "Manages policy lifecycle from creation through attestation and compliance.",
            //     features: [
            //         "Policy drafting assistance",
            //         "Version control and approval",
            //         "Employee attestation tracking",
            //         "Compliance reporting",
            //     ],
            //     imagePlaceholder: "Policy Management View",
            // },
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
    },
};

const expandVariants = {
    hidden: {
        opacity: 0,
        height: 0,
        marginTop: 0,
    },
    visible: {
        opacity: 1,
        height: "auto",
        marginTop: 32,
        transition: {
            height: {
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
            },
            opacity: {
                duration: 0.3,
                delay: 0.1,
            },
        },
    },
    exit: {
        opacity: 0,
        height: 0,
        marginTop: 0,
        transition: {
            height: {
                duration: 0.3,
                ease: [0.55, 0.055, 0.675, 0.19] as const,
            },
            opacity: {
                duration: 0.2,
            },
        },
    },
};

const getAreaStyles = (key: FocusAreaKey) => {
    const styles = {
        finance: {
            border: "border-focus-finance",
            bg: "bg-focus-finance",
            bgLight: "bg-focus-finance-bg",
            gradient: "from-focus-finance/30 to-focus-finance/10",
            ring: "ring-focus-finance",
            text: "text-focus-finance",
        },
        audit: {
            border: "border-focus-audit",
            bg: "bg-focus-audit",
            bgLight: "bg-focus-audit-bg",
            gradient: "from-focus-audit/30 to-focus-audit/10",
            ring: "ring-focus-audit",
            text: "text-focus-audit",
        },
        risk: {
            border: "border-focus-risk",
            bg: "bg-focus-risk",
            bgLight: "bg-focus-risk-bg",
            gradient: "from-focus-risk/30 to-focus-risk/10",
            ring: "ring-focus-risk",
            text: "text-focus-risk",
        },
    };
    return styles[key];
};

interface CopilotCarouselProps {
    copilots: Copilot[];
    areaKey: FocusAreaKey;
}

const CopilotCarousel = ({ copilots, areaKey }: CopilotCarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback(
        (index: number) => {
            if (emblaApi) emblaApi.scrollTo(index);
        },
        [emblaApi]
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

    const styles = getAreaStyles(areaKey);

    useEffect(() => {
        if (!emblaApi) return;

        const autoScroll = setInterval(() => {
            emblaApi.scrollNext();
        }, 5000); // 5 seconds

        return () => {
            clearInterval(autoScroll);
        };
    }, [emblaApi]);


    return (
        <div className="relative">
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
                <div className="flex">
                    {copilots.map((copilot, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 px-2">
                            <div className="grid md:grid-cols-2 gap-4 p-8">
                                {/* Left side - Details */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl md:text-3xl font-bold text-esi-primary">
                                        {copilot.name}
                                    </h3>
                                    <p className="text-muted-foreground text-lg">
                                        {copilot.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {copilot.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className={`w-2 h-2 rounded-full mt-2 ${styles.bg} opacity-80`} />
                                                <span className="text-foreground/80">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right side - Image placeholder */}
                                {/* Right side - Image / Placeholder */}
                                <div
                                    className={`relative rounded-xl border-2 ${copilot.imageSource ? "border-solid" : "border-dashed"
                                        } ${styles.border} bg-card/50 backdrop-blur-sm min-h-[320px] flex items-center justify-center overflow-hidden`}
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
                                            <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
                                                {copilot.imagePlaceholder}
                                            </p>
                                            <p className="text-muted-foreground/60 text-xs mt-2">
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

            {/* Navigation arrows */}
            <button
                onClick={scrollPrev}
                className={`absolute -left-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full border ${styles.border} ${styles.bgLight} flex items-center justify-center hover:opacity-100 transition-all duration-300 opacity-50`}
                aria-label="Previous copilot"
            >
                <ChevronLeft className={`w-4 h-4 ${styles.text}`} />
            </button>
            <button
                onClick={scrollNext}
                className={`absolute -right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full border ${styles.border} ${styles.bgLight} flex items-center justify-center hover:opacity-100 transition-all duration-300 opacity-50`}
                aria-label="Next copilot"
            >
                <ChevronRight className={`w-4 h-4 ${styles.text}`} />
            </button>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-6">
                {copilots.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${styles.bg} ${index === selectedIndex
                            ? "opacity-100 scale-125"
                            : "opacity-30 hover:opacity-60"
                            }`}
                        aria-label={`Go to copilot ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export const FocusAreas = () => {
    // const [selectedArea, setSelectedArea] = useState<FocusAreaKey | null>(null);
    const [selectedArea, setSelectedArea] = useState<FocusAreaKey>("finance");

    const handleAreaClick = (key: FocusAreaKey) => {
        setSelectedArea(selectedArea === key ? null : key);
    };



    return (
        <motion.section
            className="py-16 px-4 sm:px-6 lg:px-8 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div variants={itemVariants} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-esi-primary">
                        Key {""}
                        <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">Domains</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Starting with 20 high-impact use cases across key business functions
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                >
                    {focusAreasData.map((area) => {
                        const isSelected = selectedArea === area.key;
                        const styles = getAreaStyles(area.key);

                        return (
                            <motion.div key={area.key} variants={itemVariants}>
                                <Card
                                    onClick={() => handleAreaClick(area.key)}
                                    className={`group relative overflow-hidden cursor-pointer transition-all duration-300 h-full ${isSelected
                                        ? `${styles.bg} border-2 ${styles.border} shadow-lg`
                                        : "bg-card border hover:shadow-md hover:-translate-y-1"
                                        }`}
                                >
                                    <CardContent className="relative p-8 text-center">
                                        <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${isSelected ? "text-esi-primary" : "text-foreground group-hover:text-esi-primary"
                                            }`}>
                                            {area.title}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {area.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Expandable Carousel Section */}
                <AnimatePresence mode="wait">
                    {selectedArea && (
                        <motion.div
                            key={selectedArea}
                            variants={expandVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="overflow-hidden"
                        >
                            {(() => {
                                const area = focusAreasData.find((a) => a.key === selectedArea);
                                if (!area) return null;
                                const styles = getAreaStyles(selectedArea);

                                return (
                                    <div
                                        className={`rounded-2xl border-2 ${styles.border} ${styles.bg} bg-gradient-to-br ${styles.gradient} backdrop-blur-sm p-4`}
                                    >
                                        <div className="bg-card/80 backdrop-blur-sm rounded-xl border border-border/50">
                                            <CopilotCarousel
                                                copilots={area.copilots}
                                                areaKey={selectedArea}
                                            />
                                        </div>
                                    </div>
                                );
                            })()}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.section>
    );
};

export default FocusAreas;
