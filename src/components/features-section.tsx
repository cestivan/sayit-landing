"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    Activity,
    BrainCircuit,
    ShieldAlert,
    Zap,
} from "lucide-react";

export function FeaturesSection() {
    return (
        <section className="container py-24 sm:py-32">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Everything you need to <span className="text-primary">master your battery</span>.
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    From real-time monitoring to AI-powered insights.
                </p>
            </div>
            <BentoGrid className="max-w-4xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 1 || i === 2 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </section>
    );
}

const Skeleton = ({ color }: { color: string }) => (
    <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 ${color}`} />
);

const items = [
    {
        title: "Real-time Monitoring",
        description: "See power usage, temperature, and charging speed in one glance.",
        header: <Skeleton color="from-green-500/20 to-green-500/5" />,
        icon: <Activity className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "AI Explanations",
        description: "Understand every drop in battery health. High temp? Bad charger? We tell you why.",
        header: <Skeleton color="from-blue-500/20 to-blue-500/5" />,
        icon: <BrainCircuit className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Intelligent Alerts",
        description: "Prevent damage with smart notifications for high temps and unsafe chargers.",
        header: <Skeleton color="from-red-500/20 to-red-500/5" />,
        icon: <ShieldAlert className="h-4 w-4 text-neutral-500" />,
    },
];
