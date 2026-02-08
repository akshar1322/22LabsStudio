import { cn } from "@/app/utils/cn";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "relative inline-flex items-center justify-center font-display font-medium transition-all duration-300 uppercase tracking-widest overflow-hidden group border",
                    variant === "primary"
                        ? "bg-accent text-white border-accent hover:bg-transparent hover:text-accent"
                        : variant === "outline"
                            ? "bg-transparent text-white border-white/20 hover:border-accent hover:text-accent"
                            : "bg-transparent text-white border-transparent hover:text-accent",
                    size === "sm" ? "px-4 py-2 text-xs" : size === "lg" ? "px-10 py-4 text-base" : "px-6 py-3 text-sm",
                    className
                )}
                {...props}
            >
                <span className="relative z-10">{props.children}</span>
                {variant !== "ghost" && (
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                )}
            </button>
        );
    }
);
Button.displayName = "Button";
