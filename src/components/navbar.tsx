"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Logo className="h-6 w-6 text-primary" />
                    <span className="hidden font-bold sm:inline-block">SayIt</span>
                </Link>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link
                        href="#features"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        Features
                    </Link>
                    <Link
                        href="#pricing"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="#about"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        About
                    </Link>
                </nav>
                <div className="ml-auto flex items-center space-x-4">
                    <Button variant="ghost" size="sm">
                        Sign In
                    </Button>
                    <Button size="sm">Download</Button>
                </div>
            </div>
        </header>
    );
}
