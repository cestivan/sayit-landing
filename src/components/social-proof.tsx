"use client";

import { motion } from "framer-motion";

export function SocialProof() {
    return (
        <section className="container py-24 sm:py-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    Loved by developers, designers, and creators.
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    If you edit videos, run VMs, code, or use external monitors… you&apos;ll finally see exactly what drains your battery.
                </p>
            </div>

            {/* As Seen On */}
            <div className="mb-24">
                <p className="text-center text-sm font-semibold text-muted-foreground mb-8">AS SEEN ON</p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0">
                    {/* Placeholders for logos */}
                    <span className="text-xl font-bold">Hacker News</span>
                    <span className="text-xl font-bold">Product Hunt</span>
                    <span className="text-xl font-bold">MacRumors</span>
                    <span className="text-xl font-bold">9to5Mac</span>
                </div>
            </div>

            {/* Testimonials */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="rounded-2xl border bg-card p-6 shadow-sm"
                    >
                        <blockquote className="text-lg text-muted-foreground">
                            &quot;{testimonial.quote}&quot;
                        </blockquote>
                        <div className="mt-4 flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-primary/20" />
                            <div>
                                <div className="font-semibold text-foreground">{testimonial.author}</div>
                                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

const testimonials = [
    {
        quote: "I finally understand why my battery health dropped 3% in a week. Turns out it was my dock.",
        author: "Alex Chen",
        role: "Software Engineer",
    },
    {
        quote: "Better than coconutBattery and iStat for battery insights. The AI explanations are actually useful.",
        author: "Sarah Miller",
        role: "Product Designer",
    },
    {
        quote: "External monitor power analysis blew my mind. I saved 20% battery just by changing one setting.",
        author: "David Kim",
        role: "Video Editor",
    },
];
