'use client';

import { Container } from "@/app/components/ui/Container";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    { step: "01", title: "Concept", description: "Visualizing the foundation through sketches and moodboards." },
    { step: "02", title: "Modeling", description: "Sculpting high-fidelity 3D geometry with precision topology." },
    { step: "03", title: "Texturing", description: "Applying photorealistic materials and PBR workflows." },
    { step: "04", title: "Rendering", description: "Lighting and composition for cinematic impact." },
    { step: "05", title: "Integration", description: "Optimizing assets for seamless engine performance." },
];

export function Workflow() {
    const sectionRef = useRef<HTMLElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animate the line height based on scroll
        gsap.fromTo(lineRef.current,
            { height: "0%" },
            {
                height: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                }
            }
        );
    }, []);

    return (
        <section id="process" ref={sectionRef} className="py-24 md:py-32 bg-zinc-950 text-white relative">
            <Container>
                <div className="mb-16 md:mb-24 text-center">
                    <span className="text-accent text-sm font-mono uppercase tracking-[0.3em] mb-4 block">Our Process</span>
                    <h2 className="font-display font-bold uppercase leading-none"
                        style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}>
                        The Pipeline
                    </h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-800 -translate-x-1/2">
                        <div ref={lineRef} className="w-full bg-accent origin-top" />
                    </div>

                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <div key={index} className={`relative flex items-center justify-between md:justify-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                {/* Mobile: content is always right of line. Desktop: alternates */}
                                <div className="ml-12 md:ml-0 md:w-5/12">
                                    <div className={`p-6 border border-white/5 bg-zinc-900/50 backdrop-blur-sm rounded-lg hover:border-accent/30 transition-colors duration-300 ${index % 2 === 0 ? 'text-left md:text-right' : 'text-left'}`}>
                                        <span className="text-6xl font-display font-black text-white/5 absolute -top-8 -z-10 select-none">{step.step}</span>
                                        <h3 className="text-2xl font-bold uppercase mb-2 text-white">{step.title}</h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </div>

                                {/* Center Point */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-950 border-2 border-zinc-700 rounded-full z-10">
                                    <div className="w-full h-full bg-accent rounded-full scale-0 transition-transform duration-300 group-hover:scale-100" />
                                </div>

                                {/* Spacer for alternate side */}
                                <div className="hidden md:block md:w-5/12" />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
