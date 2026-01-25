"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    Mic,
    Languages,
    Lock,
    Zap,
} from "lucide-react";

export function FeaturesSection() {
    return (
        <section className="container py-24 sm:py-32">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Everything you need to <span className="text-primary">speak freely</span>.
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    From instant transcription to multi-language support.
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
        title: "Lightning Fast Transcription",
        description: "Real-time voice-to-text with zero lag. Native macOS performance.",
        header: <Skeleton color="from-blue-500/20 to-blue-500/5" />,
        icon: <Zap className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Multi-Language Support",
        description: "Speak in English, Chinese, or Japanese. Automatic language detection.",
        header: <Skeleton color="from-purple-500/20 to-purple-500/5" />,
        icon: <Languages className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Privacy First",
        description: "All processing happens on your device. Your voice never leaves your Mac.",
        header: <Skeleton color="from-green-500/20 to-green-500/5" />,
        icon: <Lock className="h-4 w-4 text-neutral-500" />,
    },
];
