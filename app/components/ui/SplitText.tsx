import { cn } from "@/app/utils/cn";
import React from "react";

export function SplitText({
    text,
    className,
    wordClassName,
    charClassName,
}: {
    text: string;
    className?: string;
    wordClassName?: string;
    charClassName?: string;
}) {
    const words = text.split(" ");

    return (
        <span className={cn("inline-block", className)}>
            {words.map((word, i) => (
                <span key={i} className={cn("inline-block whitespace-nowrap overflow-hidden", wordClassName)}>
                    {word.split("").map((char, j) => (
                        <span
                            key={j}
                            className={cn("inline-block translate-y-full opacity-0", charClassName)} // Default hidden state for GSAP to target
                            data-char={char}
                        >
                            {char}
                        </span>
                    ))}
                    <span className="inline-block">&nbsp;</span>
                </span>
            ))}
        </span>
    );
}
