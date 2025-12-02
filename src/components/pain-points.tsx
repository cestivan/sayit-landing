"use client";

import { motion } from "framer-motion";
import { BatteryWarning, ThermometerSun, ZapOff } from "lucide-react";

const features = [
    {
        name: "Battery Health Mystery",
        description: "Your Mac's battery health drops — but you never know why. Was it heat? Bad charging habits?",
        icon: BatteryWarning,
    },
    {
        name: "Fake Charger Wattage",
        description: "Your charger says 65W — but is it actually outputting that? Or is it dangerously fluctuating?",
        icon: ZapOff,
    },
    {
        name: "Phantom Overheating",
        description: "Your laptop gets hot and fans spin up — but you don't know which background app or external display caused it.",
        icon: ThermometerSun,
    },
];

export function PainPoints() {
    return (
        <section className="container py-24 sm:py-32">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    macOS gives you battery numbers. <br />
                    <span className="text-primary">We give you answers.</span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    This app reveals everything Apple doesn&apos;t show you. Stop guessing and start understanding.
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
