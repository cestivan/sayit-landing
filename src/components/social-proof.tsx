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
                    Join thousands who have transformed the way they create content with voice.
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
        quote: "Game changer for meeting notes. I can focus on the conversation while SayIt captures everything perfectly.",
        author: "Alex Chen",
        role: "Software Engineer",
    },
    {
        quote: "The multi-language support is incredible. I switch between English and Chinese seamlessly during calls.",
        author: "Sarah Miller",
        role: "Product Designer",
    },
    {
        quote: "I write 10x faster by speaking my thoughts. SayIt makes content creation effortless.",
        author: "David Kim",
        role: "Video Editor",
    },
];
