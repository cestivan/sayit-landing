"use client";

import { Logo } from "@/components/logo";

export function LogoShowcase() {
    return (
        <div className="w-full bg-muted/50 py-4 border-b">
            <div className="container flex flex-col sm:flex-row items-center justify-center gap-8">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-muted-foreground">Option 1 (Bolt)</span>
                    <div className="flex items-center gap-2 rounded-lg border bg-background p-2 px-4">
                        <Logo variant="bolt" className="h-6 w-6 text-primary" />
                        <span className="font-bold">BatteryMe</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-muted-foreground">Option 2 (Pulse)</span>
                    <div className="flex items-center gap-2 rounded-lg border bg-background p-2 px-4">
                        <Logo variant="pulse" className="h-6 w-6 text-primary" />
                        <span className="font-bold">BatteryMe</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-muted-foreground">Option 3 (Abstract)</span>
                    <div className="flex items-center gap-2 rounded-lg border bg-background p-2 px-4">
                        <Logo variant="abstract" className="h-6 w-6 text-primary" />
                        <span className="font-bold">BatteryMe</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
