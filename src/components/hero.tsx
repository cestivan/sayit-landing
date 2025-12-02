"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Zap } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/ui/border-beam";

export function Hero() {
    return (
        <section className="relative overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
            <div className="container relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Badge variant="secondary" className="mb-6 gap-2 px-4 py-1.5 text-sm">
                        <Zap className="h-3.5 w-3.5 fill-primary text-primary" />
                        <span>New: AI Battery Insights</span>
                    </Badge>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-4xl bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl"
                >
                    Meet the smartest battery companion for your Mac.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
                >
                    Real-time power. Deep insights. Finally understand <span className="italic text-foreground">why</span> your battery loses health — and how to make it last longer.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                    <Button size="lg" className="gap-2 text-base">
                        <Download className="h-4 w-4" />
                        Download for Free
                    </Button>
                    <Button size="lg" variant="outline" className="gap-2 text-base">
                        See Pro Features
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="relative mt-20 w-full max-w-5xl rounded-xl border bg-card/50 shadow-2xl backdrop-blur-sm"
                >
                    <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br from-card to-muted/20 p-8 flex items-center justify-center">
                        {/* Placeholder for the app screenshot */}
                        <div className="flex flex-col items-center gap-4 text-muted-foreground">
                            <div className="h-24 w-24 rounded-full border-4 border-primary/20 border-t-primary flex items-center justify-center text-3xl font-bold text-foreground">
                                85%
                            </div>
                            <p>App Screenshot Placeholder</p>
                        </div>
                    </div>
                    <BorderBeam size={300} duration={12} delay={9} />
                </motion.div>
            </div>

            {/* Background Gradient */}
            <div className="absolute top-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        </section>
    );
}
