import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="border-t bg-card/50 backdrop-blur-sm">
            <div className="container py-16 text-center">
                <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                    Start transcribing with your voice.
                </h2>
                <p className="mb-10 text-lg text-muted-foreground">
                    Start for free. Upgrade anytime.
                </p>
                <Button
                    size="lg"
                    className="gap-2 text-base"
                    onClick={() => window.open('https://github.com/cross-mind/sayit-macos/releases/latest/download/SayIt-macOS.zip', '_blank')}
                >
                    <Download className="h-4 w-4" />
                    Download for Free
                </Button>
                <div className="mt-16 text-sm text-muted-foreground">
                    © {new Date().getFullYear()} SayIt. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
