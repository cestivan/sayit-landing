"use client";

import { motion } from "framer-motion";
import { Keyboard, Clock, FileText } from "lucide-react";

const features = [
    {
        name: "Typing Fatigue",
        description: "Long meetings, interviews, or brainstorming sessions leave your fingers exhausted. Typing slows you down when ideas flow fast.",
        icon: Keyboard,
    },
    {
        name: "Lost Ideas",
        description: "You can think faster than you can type. Great ideas evaporate while you struggle to capture them in writing.",
        icon: Clock,
    },
    {
        name: "Manual Transcription Hell",
        description: "Hours wasted transcribing recorded meetings or voice memos. Copy-paste from online tools, formatting fixes, language switching.",
        icon: FileText,
    },
];

export function PainPoints() {
    return (
        <section className="container py-24 sm:py-32">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Your voice is faster than your keyboard. <br />
                    <span className="text-primary">Stop typing. Start speaking.</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    Transform hours of typing into seconds of speaking. Capture thoughts at the speed of conversation.
                </p>
            </div>
            <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col rounded-2xl border bg-card/50 p-8 shadow-sm backdrop-blur-sm transition-colors hover:bg-card/80 hover:border-primary/20"
                        >
                            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                            </div>
                            <dt className="text-lg font-semibold leading-7 text-foreground">
                                {feature.name}
                            </dt>
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                                <p className="flex-auto">{feature.description}</p>
                            </dd>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
