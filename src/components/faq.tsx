"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What's the difference between Free and Pro versions?",
    answer: "The Free version includes all essential battery monitoring features like health tracking, cycle count, temperature, and charging history. Pro adds AI-powered insights, predictive analytics, personalized optimization tips, smart charging recommendations, battery longevity forecasts, and detailed usage pattern analysis."
  },
  {
    question: "How does the license work?",
    answer: "BatteryMe Pro uses a perpetual license model. Purchase once at $19.99 and own it forever on one Mac. The license is tied to your Mac's hardware ID and activates instantly via email. No subscription required."
  },
  {
    question: "Can I use my license on multiple Macs?",
    answer: "Each license is valid for one Mac device. If you need to transfer your license to a new Mac, contact our support team at support@batteryme.app for assistance."
  },
  {
    question: "What macOS versions are supported?",
    answer: "BatteryMe requires macOS 13.0 (Ventura) or later. It's optimized for Apple Silicon (M1/M2/M3) and Intel-based Macs."
  },
  {
    question: "Is my battery data private and secure?",
    answer: "Absolutely. All battery data is stored locally on your Mac. We don't collect, transmit, or sell any usage data. Your privacy is paramount."
  },
  {
    question: "How accurate are the AI predictions?",
    answer: "Our AI models analyze 30+ battery metrics to provide predictions with 85-90% accuracy. Accuracy improves as BatteryMe learns your usage patterns over time (typically 7-14 days)."
  },
  {
    question: "What if I'm not satisfied with my purchase?",
    answer: "We offer a 30-day money-back guarantee. If BatteryMe Pro doesn't meet your expectations, email support@batteryme.app for a full refund—no questions asked."
  },
  {
    question: "Do I need an internet connection to use BatteryMe?",
    answer: "No. BatteryMe works completely offline after initial license activation. All monitoring, analysis, and AI predictions run locally on your Mac."
  },
  {
    question: "How often is BatteryMe updated?",
    answer: "We release updates regularly with new features, performance improvements, and macOS compatibility updates. All updates are free for Pro license holders."
  },
  {
    question: "Can BatteryMe damage my battery or void my warranty?",
    answer: "No. BatteryMe is a read-only monitoring tool. It safely reads battery data using Apple's official APIs without modifying any system settings or battery behavior. It won't void your warranty."
  }
];

function FAQAccordionItem({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-primary"
      >
        <span className="text-lg font-medium pr-8">{item.question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180 text-primary"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-200 ease-in-out",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="container py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about BatteryMe
          </p>
        </div>

        <div className="rounded-2xl border bg-card/50 backdrop-blur-sm p-6 sm:p-8">
          {faqItems.map((item, index) => (
            <FAQAccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:support@batteryme.app"
            className="text-primary hover:underline font-medium"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
}
