import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

import LoginPage from "../../assets/Playground/Learner/LoginPage.png";
import LearningPath from "../../assets/Playground/Learner/LearningPath.png"
import IntegratedLabs from "../../assets/Playground/Learner/IntegratedLabs.png"
import Assessment from "../../assets/Playground/Learner/Assessment.png"
import UserProfileAndAnalystics from "../../assets/Playground/Learner/UserProfileAndAnalytics.png"

import AdminDashboard from "../../assets/Playground/Admin/AdminDashboard.png"
import UsersManagement from "../../assets/Playground/Admin/UsersManagement.png"
import UserProfileOverview from "../../assets/Playground/Admin/UserProfileOverview.png"
import LabsManagement from "../../assets/Playground/Admin/LabsManagement.png"
import AssessmentsManagement from "../../assets/Playground/Admin/AssessmentsManagement.png"
import Visualization from "../../assets/Playground/Admin/Visualization.png"

type FeatureAreaKey = "learner" | "admin";

interface Feature {
    name: string;
    description: string;
    features: string[];
    imageSource?: string,
    imagePlaceholder: string;
}

interface FeatureArea {
    key: FeatureAreaKey;
    title: string;
    description: string;
    features: Feature[];
}

const featureAreasData: FeatureArea[] = [
    // {
    //     key: "learner",
    //     title: "Learner",
    //     description: "Comprehensive learning experience with hands-on labs and progress tracking",
    //     features: [
    //         {
    //             name: "Enterprise Onboarding & Login",
    //             description: "Seamless enterprise authentication with SSO integration and personalized onboarding flows.",
    //             features: [
    //                 "Single Sign-On (SSO) integration",
    //                 "Role-based access control",
    //                 "Personalized welcome experience",
    //                 "Multi-tenant support",
    //             ],
    //             imageSource: LoginPage,
    //             imagePlaceholder: "Enterprise Onboarding Interface",
    //         },
    //         {
    //             name: "Dedicated Learning Paths",
    //             description: "Curated learning journeys tailored to skill levels and career goals.",
    //             features: [
    //                 "Skill-based path recommendations",
    //                 "Progressive difficulty levels",
    //                 "Milestone achievements",
    //                 "Certification tracking",
    //             ],
    //             imageSource: LearningPath,
    //             imagePlaceholder: "Learning Paths Dashboard",
    //         },
    //         {
    //             name: "Integrated Labs",
    //             description: "Deep learning environments with technologies including Jupyter notebooks, VSCode, Cloud consoles and low-code/no-code environments for hands-on experimentation.",
    //             features: [
    //                 "Pre-configured ML environments",
    //                 "Cloud sandbox environments (AWS, Azure, and more...)",
    //                 "Langflow AI workflows",
    //                 "n8n automation builder",
    //                 "VSCode for standalone development",
    //                 "Cost-controlled resources",
    //                 "Collaborative notebooks",
    //                 "Version-controlled experiments",
    //             ],
    //             imageSource: IntegratedLabs,
    //             imagePlaceholder: "Jupyter Labs Interface",
    //         },
            // {
            //     name: "Cloud Console Access",
            //     description: "Direct access to major cloud platforms for real-world cloud lab experiences.",
            //     features: [
            //         "AWS sandbox environments",
            //         "Azure lab access",
            //         "GCP project provisioning",
            //         "Cost-controlled resources",
            //     ],

            //     imagePlaceholder: "Cloud Console Dashboard",
            // },
            // {
            //     name: "Low-Code / No-Code Labs",
            //     description: "Visual development environments for senior industry experts using Langflow and n8n.",
            //     features: [
            //         "Langflow AI workflows",
            //         "n8n automation builder",
            //         "Visual pipeline design",
            //         "Template library access",
            //     ],
            //     imagePlaceholder: "Low-Code Lab Interface",
            // },
    //         {
    //             name: "Assessment & Evaluation",
    //             description: "Comprehensive assessment mechanisms for scoring and skill evaluation.",
    //             features: [
    //                 "Automated code evaluation",
    //                 "Project-based assessments",
    //                 "Peer review system",
    //                 "Skill competency scoring",
    //             ],
    //             imageSource: Assessment,
    //             imagePlaceholder: "Assessment Dashboard",
    //         },
    //         {
    //             name: "User Profile & Analytics",
    //             description: "Detailed user profiles with progress tracking and learning analytics.",
    //             features: [
    //                 "Learning progress dashboard",
    //                 "Skill radar visualization",
    //                 "Time spent analytics",
    //                 "Achievement badges",
    //             ],
    //             imageSource: UserProfileAndAnalystics,
    //             imagePlaceholder: "User Profile View",
    //         },
    //     ],
    // },
    {
        key: "admin",
        title: "Admin",
        description: "Powerful administrative tools for batch management and user insights",
        features: [
            {
                name: "Dashboard",
                description: "Comprehensive batch-level overview with key metrics and insights.",
                features: [
                    "Batch progress tracking",
                    "Completion rate analytics",
                    "Performance benchmarks",
                    "Real-time activity feed",
                ],
                imageSource: AdminDashboard,
                imagePlaceholder: "Admin Dashboard",
            },
            {
                name: "Users Management",
                description: "Complete user handling with role assignments and access control.",
                features: [
                    "Bulk user operations",
                    "Role and permission management",
                    "User group management",
                    "Activity logging",
                ],
                imageSource: UsersManagement,
                imagePlaceholder: "Users Management Interface",
            },
            {
                name: "User Profile Overview",
                description: "Detailed insights into individual user progress and performance.",
                features: [
                    "Individual learning analytics",
                    "Skill progression tracking",
                    "Engagement metrics",
                    "Performance comparisons",
                ],
                imageSource: UserProfileOverview,
                imagePlaceholder: "User Profile Overview",
            },
            {
                name: "Labs Management",
                description: "Track and manage all lab environments and resources.",
                features: [
                    "Lab status monitoring",
                    "Resource allocation",
                    "Usage analytics",
                    "Environment provisioning",
                ],
                imageSource: LabsManagement,
                imagePlaceholder: "Labs Management Dashboard",
            },
            {
                name: "Assessments Management",
                description: "Create, track, and manage assessments across the platform.",
                features: [
                    "Assessment creation tools",
                    "Grading workflows",
                    "Result analytics",
                    "Feedback management",
                ],
                imageSource: AssessmentsManagement,
                imagePlaceholder: "Assessments Dashboard",
            },
            {
                name: "Client Support & Metrics",
                description: "Custom metric generation and visualization for client reporting.",
                features: [
                    "Custom metric builder",
                    "Report generation",
                    "Data visualization",
                    "Export capabilities",
                ],
                imageSource: Visualization,
                imagePlaceholder: "Client Support Interface",
            },
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

const getAreaStyles = (key: FeatureAreaKey) => {
    const styles = {
        learner: {
            border: "border-playground-learner",
            bg: "bg-playground-learner",
            bgLight: "bg-playground-learner-bg",
            gradient: "from-playground-learner/30 to-playground-learner/10",
            ring: "ring-playground-learner",
            text: "text-playground-learner",
        },
        admin: {
            border: "border-playground-admin",
            bg: "bg-playground-admin",
            bgLight: "bg-playground-admin-bg",
            gradient: "from-playground-admin/30 to-playground-admin/10",
            ring: "ring-playground-admin",
            text: "text-playground-admin",
        },
    };
    return styles[key];
};

interface FeatureCarouselProps {
    features: Feature[];
    areaKey: FeatureAreaKey;
}

const FeatureCarousel = ({ features, areaKey }: FeatureCarouselProps) => {
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

    return (
        <div className="relative">
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
                <div className="flex">
                    {features.map((feature, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 px-2">
                            <div className="grid md:grid-cols-2 gap-8 p-8">
                                {/* Left side - Details */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl md:text-3xl font-bold text-esi-primary">
                                        {feature.name}
                                    </h3>
                                    <p className="text-muted-foreground text-lg">
                                        {feature.description}
                                    </p>
                                    <ul className="space-y-3">
                                        {feature.features.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className={`w-2 h-2 rounded-full mt-2 ${styles.bg} opacity-80`} />
                                                <span className="text-foreground/80">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right side - Image placeholder */}
                                <div
                                    className={`relative rounded-xl border-2 ${feature.imageSource ? "border-solid" : "border-dashed"
                                        } ${styles.border} bg-card/50 backdrop-blur-sm min-h-[320px] flex items-center justify-center overflow-hidden`}
                                >
                                    {feature.imageSource ? (
                                        <img
                                            src={feature.imageSource}
                                            alt={feature.name}
                                            className="w-full h-full object-contain p-2"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="text-center p-8">
                                            <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
                                                {feature.imagePlaceholder}
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
                aria-label="Previous feature"
            >
                <ChevronLeft className={`w-4 h-4 ${styles.text}`} />
            </button>
            <button
                onClick={scrollNext}
                className={`absolute -right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full border ${styles.border} ${styles.bgLight} flex items-center justify-center hover:opacity-100 transition-all duration-300 opacity-50`}
                aria-label="Next feature"
            >
                <ChevronRight className={`w-4 h-4 ${styles.text}`} />
            </button>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-6">
                {features.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${styles.bg} ${index === selectedIndex
                                ? "opacity-100 scale-125"
                                : "opacity-30 hover:opacity-60"
                            }`}
                        aria-label={`Go to feature ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export const PlaygroundFeatures = () => {
    const [selectedArea, setSelectedArea] = useState<FeatureAreaKey | null>(null);

    const handleAreaClick = (key: FeatureAreaKey) => {
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
                        AI {""}
                        <span className="bg-gradient-to-r from-ai-purple to-ai-blue bg-clip-text text-transparent">Builder Playground</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Comprehensive learning and administration platform for AI skill development
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                    variants={containerVariants}
                >
                    {featureAreasData.map((area) => {
                        const isSelected = selectedArea === area.key;
                        const styles = getAreaStyles(area.key);

                        return (
                            <motion.div key={area.key} variants={itemVariants}>
                                <Card
                                    onClick={() => handleAreaClick(area.key)}
                                    className={`group relative overflow-hidden cursor-pointer transition-all duration-300 h-full ${isSelected
                                            ? `${styles.bgLight} border-2 ${styles.border} shadow-lg`
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
                                const area = featureAreasData.find((a) => a.key === selectedArea);
                                if (!area) return null;
                                const styles = getAreaStyles(selectedArea);

                                return (
                                    <div
                                        className={`rounded-2xl border-2 ${styles.border} ${styles.bgLight} bg-gradient-to-br ${styles.gradient} backdrop-blur-sm p-4`}
                                    >
                                        <div className="bg-card/80 backdrop-blur-sm rounded-xl border border-border/50">
                                            <FeatureCarousel
                                                features={area.features}
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

export default PlaygroundFeatures;
