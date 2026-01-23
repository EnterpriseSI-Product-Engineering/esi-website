import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

/* =========================
   Animated Number
========================= */

function AnimatedNumber({
    value,
    decimals = 0,
    suffix = "",
    className = "",
}: {
    value: number;
    decimals?: number;
    suffix?: string;
    className?: string;
}) {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        const controls = animate(0, value, {
            duration: 1.2,
            ease: "easeOut",
            onUpdate(latest) {
                setDisplayValue(latest);
            },
        });

        return () => controls.stop();
    }, [value]);

    return (
        <span className={className}>
            {displayValue.toFixed(decimals)}
            {suffix}
        </span>
    );
}


/* =========================
   Small UI Helpers
========================= */

function MetricChip({ label, value }: { label: string; value: number }) {
    return (
        <div className="px-3 py-2 rounded-lg bg-muted/10 text-sm">
            {label}: <AnimatedNumber value={value} suffix="%" />
        </div>
    );
}

function MetricCard({
    label,
    value,
    suffix = "",
    decimals = 0,
}: {
    label: string;
    value: number;
    suffix?: string;
    decimals?: number;
}) {
    return (
        <div className="p-4 rounded-xl bg-muted/10 text-center">
            <p className="text-xs text-muted-foreground">{label}</p>
            <AnimatedNumber
                value={value}
                decimals={decimals}
                suffix={suffix}
                className="text-xl font-semibold"
            />
        </div>
    );
}

/* =========================
   Main Section
========================= */

export function HowItWorksSection({
    features,
    containerVariants,
    itemVariants,
}: {
    features: any[];
    containerVariants: any;
    itemVariants: any;
}) {
    return (
        <motion.section
            className="grid grid-cols-1 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <Card
                            className="
    group relative overflow-hidden h-full
    rounded-2xl
    bg-white/10 dark:bg-white/5
    backdrop-blur-xl
    border border-white/20 dark:border-white/10
    shadow-[0_8px_30px_rgba(0,0,0,0.12)]
    translate-y-2 hover:scale-[1.01]
    transition-all duration-500
  "
                        >

                            {/* Background layers */}
                            <div className="absolute inset-0 bg-gradient-to-br from-border/20 via-border/10 to-transparent rounded-xl" />
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition duration-500`}
                            />
                            <div className="absolute inset-[1px] bg-background/80 backdrop-blur-xl rounded-xl" />

                            {/* Header */}
                            <CardHeader className="relative text-center">
                                <motion.div
                                    whileHover={{ scale: 1.05, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                    className="mx-auto mb-4"
                                >
                                    <div
                                        className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
                                    >
                                        <feature.icon className="h-8 w-8 text-white" />
                                    </div>
                                </motion.div>

                                <CardTitle className="text-xl font-semibold">
                                    {feature.title}
                                </CardTitle>
                            </CardHeader>

                            {/* Content */}
                            <CardContent className="relative">
                                {/* ===== AI Native Skill Score ===== */}
                                {feature.title === "AI Native Skill Score" && (
                                    <div className="flex flex-col md:flex-row gap-6 items-center">
                                        {/* Score */}
                                        <div className="relative">
                                            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-ai-cyan to-neural-pink p-1">
                                                <div className="w-24 h-24 rounded-full bg-background flex items-center justify-center">
                                                    <AnimatedNumber
                                                        value={82}
                                                        className="text-3xl font-bold"
                                                    />
                                                </div>
                                            </div>
                                            <p className="absolute -bottom-5 w-full text-xs text-center text-muted-foreground">
                                                Composite Score
                                            </p>
                                        </div>

                                        {/* Description */}


                                        {/* Breakdown */}
                                        <div className="flex-1 w-full">
                                            <p className="py-5 px-3 text-sm text-muted-foreground max-w-md">
                                                Composite score derived from knowledge checks, hands-on lab
                                                performance, and operational readiness.
                                            </p>
                                            <div className="flex gap-3 mb-3">
                                                <MetricChip label="Knowledge" value={80} />
                                                <MetricChip label="Applied" value={75} />
                                                <MetricChip label="Ops-Ready" value={70} />
                                            </div>

                                            <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: "82%" }}
                                                    transition={{ duration: 1 }}
                                                    className="h-full bg-gradient-to-r from-ai-cyan to-ai-purple"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* ===== Performance Analytics ===== */}
                                {feature.title === "Performance Analytics" && (
                                    <div className="space-y-6">
                                        <p className="text-sm text-muted-foreground">
                                            User performance is captured and analyzed using
                                            industry-relevant metrics.
                                        </p>

                                        <div className="grid grid-cols-3 gap-4">
                                            <MetricCard label="Success Rate" value={91} suffix="%" />
                                            <MetricCard label="Accuracy" value={88} suffix="%" />
                                            <MetricCard
                                                label="Confidence"
                                                value={0.92}
                                                decimals={2}
                                            />
                                        </div>

                                        <div className="p-4 rounded-xl bg-background/50">
                                            <p className="text-xs text-muted-foreground mb-1">
                                                Trend Insight
                                            </p>
                                            <p className="text-sm">
                                                Performance improved by{" "}
                                                <span className="font-semibold text-green-600">
                                                    12%
                                                </span>{" "}
                                                month-over-month.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* ===== Default ===== */}
                                {![
                                    "AI Native Skill Score",
                                    "Performance Analytics",
                                ].includes(feature.title) && (
                                        <CardDescription className="text-center text-muted-foreground">
                                            {feature.description}
                                        </CardDescription>
                                    )}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
