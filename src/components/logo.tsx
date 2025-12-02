import { cn } from "@/lib/utils";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
    variant?: "bolt" | "pulse" | "abstract";
}

export function Logo({ variant = "bolt", className, ...props }: LogoProps) {
    if (variant === "bolt") {
        // Option 1: Minimalist Bolt in Circle
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn("h-6 w-6", className)}
                {...props}
            >
                <circle cx="12" cy="12" r="10" />
                <path d="M13 2L9 22" />
                <path d="M2 13h20" className="opacity-0" /> {/* Spacer/Balance if needed, but keeping it minimal */}
                <path d="M10 9l5-4-2 6h4l-5 6 1-4H9z" fill="currentColor" stroke="none" />
            </svg>
        );
    }

    if (variant === "pulse") {
        // Option 2: Battery Pulse
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn("h-6 w-6", className)}
                {...props}
            >
                <rect x="2" y="7" width="20" height="10" rx="2" ry="2" />
                <line x1="22" y1="11" x2="22" y2="13" />
                <path d="M6 12h2l2-3 2 6 2-3h2" />
            </svg>
        );
    }

    // Option 3: Abstract Geometric
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("h-6 w-6", className)}
            {...props}
        >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
    );
}
