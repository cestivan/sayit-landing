import { cn } from "@/lib/utils";

interface LogoProps extends React.SVGProps<SVGSVGElement> {}

export function Logo({ className, ...props }: LogoProps) {
    // SayIt Logo: Minimalist Bolt representing voice/speech speed
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
