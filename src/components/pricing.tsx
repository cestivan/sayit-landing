"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import posthog from "posthog-js";

export function Pricing() {
    return (
        <section className="container py-24 sm:py-32">
            <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Simple pricing. <span className="text-primary">Powerful insights.</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Start for free. Upgrade when you need deep AI analysis.
                </p>
            </div>

            <div className="grid max-w-5xl mx-auto gap-8 lg:grid-cols-2">
                {/* Free Plan */}
                <div className="relative rounded-3xl border bg-card/50 p-8 shadow-sm backdrop-blur-sm">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold">Free</h3>
                        <p className="mt-2 text-muted-foreground">Perfect replacement for standard tools.</p>
                        <div className="mt-4 text-4xl font-bold">$0</div>
                    </div>
                    <ul className="mb-8 space-y-4 text-sm text-muted-foreground">
                        {freeFeatures.map((feature) => (
                            <li key={feature} className="flex items-center gap-3">
                                <Check className="h-4 w-4 text-primary" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <Button
                        variant="outline"
                        className="w-full"
                        size="lg"
                        onClick={() => {
                            posthog.capture('download_clicked', {
                                plan: 'free',
                                location: 'pricing_section'
                            });
                            window.open('#download', '_self');
                        }}
                    >
                        Download for Free
                    </Button>
                </div>

                {/* Pro Plan */}
                <div className="relative rounded-3xl border border-primary/50 bg-card/80 p-8 shadow-2xl backdrop-blur-sm">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground hover:bg-primary">
                            Most Popular
                        </Badge>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold">Pro</h3>
                        <p className="mt-2 text-muted-foreground">For users who want full control.</p>
                        <div className="mt-4 flex items-baseline gap-1">
                            <span className="text-4xl font-bold">$19.99</span>
                            <span className="text-muted-foreground">/year</span>
                        </div>
                    </div>
                    <ul className="mb-8 space-y-4 text-sm text-muted-foreground">
                        {proFeatures.map((feature) => (
                            <li key={feature} className="flex items-center gap-3">
                                <Check className="h-4 w-4 text-primary" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <Button
                        className="w-full"
                        size="lg"
                        onClick={() => {
                            posthog.capture('upgrade_clicked', {
                                plan: 'pro',
                                price: '$19.99',
                                location: 'pricing_section'
                            });
                            window.open('https://buy.stripe.com/4gMeVe3ih0Ex3OA0xV4gg00', '_blank');
                        }}
                    >
                        Upgrade to Pro
                    </Button>
                </div>
            </div>
        </section>
    );
}

const freeFeatures = [
    "Real-time power monitoring",
    "Battery temperature & health",
    "PD Charger profiles",
    "24h Power history",
    "Basic alerts",
    "Menu bar widgets",
];

const proFeatures = [
    "Everything in Free",
    "AI Health Explanations",
    "Unsafe Charger Detection",
    "30 / 90 Day Trends",
    "Aging & Lifespan Prediction",
    "External Monitor Impact Analysis",
    "Smart Optimization Suggestions",
];
