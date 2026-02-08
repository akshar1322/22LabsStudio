'use client';

import { Container } from "@/app/components/ui/Container";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function Intro() {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Parallax for image
        gsap.fromTo(imageRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            }
        );

        // Text reveal
        gsap.fromTo(textRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                delay: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            }
        );

    }, []);

    return (
        <section ref={containerRef} className="py-32 bg-zinc-950 text-white relative">
            <Container className="grid md:grid-cols-2 gap-16 items-center">
                {/* Left Grid: Image */}
                <div ref={imageRef} className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-white/10 group">
                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <Image
                        src="/images/6073527895277113021 (1).jpg"
                        alt="Founder"
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                </div>

                {/* Right Grid: Content */}
                <div ref={textRef} className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight leading-[0.9]">
                        Architects of the <br /> <span className="text-accent">Unreal.</span>
                    </h2>

                    <div className="w-20 h-1 bg-white/20" />

                    <p className="text-zinc-400 text-lg leading-relaxed font-light">
                        My name is Akshar Patel, founder of 22Labs and SplitX Studio. My work
                        focuses on the balance between cinematic visual quality and real-time
                        performance, creating 3D assets that are both expressive and technically
                        reliable.
                        </p>


                    <p className="text-zinc-400 text-lg leading-relaxed font-light">
                        At 22Labs and SplitX Studio, each project is approached with care and
                        intention. Characters, environments, and digital scenes are crafted with
                        close attention to form, scale, and detail, ensuring they integrate
                        naturally into real-time workflows.
                        </p>

                    <div className="pt-4">
                            <span className="text-sm font-mono uppercase tracking-widest text-zinc-500 block mb-2">
                                Core Philosophy
                            </span>
                            <p className="text-xl font-display text-white italic">
                                &quot;Clarity, balance, and purpose guide every asset.&quot;
                            </p>
    </div>

                </div>
            </Container>
        </section>
    );
}
