import { motion } from "framer-motion";
import { CheckCircle2, UserPlus, MonitorPlay, BarChart2, TrendingUp } from "lucide-react";

export function HowItWorksSection({
    containerVariants,
    itemVariants,
}: {
    features?: any[];
    containerVariants?: any;
    itemVariants?: any;
}) {
    const steps = [
        {
            icon: CheckCircle2,
            title: "Subscription",
            description: "Enterprise buys Playground subscription for fixed no of seats",
            color: "text-blue-500",
            bg: "bg-blue-500/10",
        },
        {
            icon: UserPlus,
            title: "Onboarding",
            description: "Users onboarded, assigned to designated learning paths",
            color: "text-purple-500",
            bg: "bg-purple-500/10",
        },
        {
            icon: MonitorPlay,
            title: "Assignment",
            description: "Users assigned new learner & builder labs, assessments in their learning paths, every month",
            color: "text-cyan-500",
            bg: "bg-cyan-500/10",
        },
        {
            icon: BarChart2,
            title: "Monitoring",
            description: "Progress on a user's labs & assessments usage is monitored & converted to skill score & usage analytics",
            color: "text-pink-500",
            bg: "bg-pink-500/10",
        },
        {
            icon: TrendingUp,
            title: "Impact",
            description: "Continuous practice on our app improves skill score & project readiness of users.",
            color: "text-green-500",
            bg: "bg-green-500/10",
        },
    ];

    return (
        <motion.div
            className="max-w-5xl mx-auto px-4"
            variants={containerVariants}
        >
            <div className="relative">
                {/* Connecting Line (Hidden on mobile) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-20 -translate-x-1/2" />

                <div className="space-y-12 md:space-y-24 relative">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Content Side */}
                            <div className="flex-1 text-center md:text-left">
                                <div className={`flex flex-col gap-4 ${index % 2 === 0 ? "md:items-start" : "md:items-end md:text-right"}`}>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 text-sm font-medium text-muted-foreground w-fit mx-auto md:mx-0">
                                        Step 0{index + 1}
                                    </div>
                                    <h3 className="text-2xl font-bold">{step.title}</h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Center Point */}
                            <div className="relative shrink-0 z-10">
                                <div className={`w-16 h-16 rounded-full ${step.bg} flex items-center justify-center border-4 border-background shadow-xl`}>
                                    <step.icon className={`w-8 h-8 ${step.color}`} />
                                </div>
                            </div>

                            {/* Empty Side for layout balance */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

