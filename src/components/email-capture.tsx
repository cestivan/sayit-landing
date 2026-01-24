"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import posthog from "posthog-js";

export function EmailCapture() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !email.includes("@")) {
            setStatus("error");
            setMessage("Please enter a valid email address");
            return;
        }

        setStatus("loading");

        try {
            // Store email in localStorage for now (will integrate with backend later)
            const emails = JSON.parse(localStorage.getItem("batteryme-emails") || "[]");
            emails.push({
                email,
                timestamp: new Date().toISOString(),
            });
            localStorage.setItem("batteryme-emails", JSON.stringify(emails));

            // Track email signup in PostHog
            posthog.capture('email_captured', {
                source: 'hero_section',
                email_domain: email.split('@')[1]
            });

            setStatus("success");
            setMessage("Thanks! We'll notify you when BatteryMe launches.");
            setEmail("");
        } catch (error) {
            setStatus("error");
            setMessage("Something went wrong. Please try again.");
        }
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-3 text-green-600 dark:text-green-400"
            >
                <CheckCircle2 className="h-5 w-5" />
                <p className="text-sm font-medium">{message}</p>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        disabled={status === "loading"}
                    />
                </div>
                <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="whitespace-nowrap"
                >
                    {status === "loading" ? "Joining..." : "Get Early Access"}
                </Button>
            </div>
            {status === "error" && (
                <p className="mt-2 text-sm text-red-500">{message}</p>
            )}
            <p className="mt-2 text-xs text-muted-foreground">
                Join the waitlist for exclusive launch updates and early bird pricing.
            </p>
        </form>
    );
}
