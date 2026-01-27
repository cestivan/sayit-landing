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
    answer: "The Free version gives you 5 minutes of transcription per day - perfect for quick notes and short meetings. Pro unlocks unlimited transcription, multi-language support (Chinese, English, Japanese), cross-device sync, and priority support."
  },
  {
    question: "How does the subscription work?",
    answer: "SayIt Pro offers flexible subscription options: $9.99/month or $99/year (save 17%). Subscribe directly in the app using Stripe - no iTunes account needed. Cancel anytime with no questions asked."
  },
  {
    question: "Can I use SayIt Pro on multiple Macs?",
    answer: "Yes! Your Pro subscription syncs across all your Macs where you sign in with the same account. Use SayIt on your work laptop, home iMac, or MacBook - all covered by one subscription."
  },
  {
    question: "What macOS versions are supported?",
    answer: "SayIt requires macOS 13.0 (Ventura) or later. It's optimized for Apple Silicon (M1/M2/M3) and Intel-based Macs with native speech recognition."
  },
  {
    question: "Is my voice data private and secure?",
    answer: "Absolutely. All transcription happens locally on your Mac using Apple's Speech framework. Your audio never leaves your device. We don't store, transmit, or analyze your voice recordings."
  },
  {
    question: "How accurate is the transcription?",
    answer: "SayIt uses Apple's native Speech Recognition API, delivering 90-95% accuracy for clear speech in supported languages. Accuracy improves with better microphone quality and minimal background noise."
  },
  {
    question: "What if I'm not satisfied with my subscription?",
    answer: "We offer a 7-day money-back guarantee. If SayIt Pro doesn't meet your expectations, email support@crossmind.io within 7 days for a full refund—no questions asked."
  },
  {
    question: "Do I need an internet connection to use SayIt?",
    answer: "No. After initial subscription activation, SayIt works completely offline. All speech recognition runs locally using Apple's on-device models with zero network latency."
  },
  {
    question: "Which languages does SayIt support?",
    answer: "Free version supports English only. Pro unlocks Chinese (Mandarin), Japanese, and English with automatic language detection. More languages coming based on user feedback."
  },
  {
    question: "Can SayIt transcribe pre-recorded audio files?",
    answer: "Not yet - SayIt currently focuses on live transcription for maximum speed and accuracy. Audio file transcription is on our roadmap for a future update."
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
            Everything you need to know about SayIt
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
            href="mailto:support@crossmind.io"
            className="text-primary hover:underline font-medium"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
}
