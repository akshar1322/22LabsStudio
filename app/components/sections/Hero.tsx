'use client';

import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "@/app/components/ui/SplitText";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);
    const btnRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Ensure video plays
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error("Video autoplay failed:", error);
            });
        }

        const chars = headlineRef.current?.querySelectorAll('[data-char]');

        tl.to(chars || [], {
            y: 0,
            opacity: 1,
            stagger: 0.02,
            duration: 1,
            delay: 0.2,
        })

        tl.fromTo(subRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            "-=0.5"
        )

        tl.fromTo(btnRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 },
            "-=0.8"
        );

        gsap.to(".hero-video", {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
            {/* Cinematic Background Video */}
            <div className="hero-video absolute inset-0 w-full h-[120%] -top-[10%] z-0 pointer-events-none">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-60 transition-opacity duration-1000"
                >
                    <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                </video>
                {/* Fallback pattern/color for mobile/slow networks */}
                <div className="absolute inset-0 bg-zinc-900 -z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black z-10" />
            </div>

            <Container className="relative z-20 flex flex-col items-center text-center px-4 md:px-8">
                <div className="max-w-[1200px] w-full">
                    <h1 ref={headlineRef} className="font-display font-black leading-[0.85] tracking-[calc(-0.03em)] uppercase mb-6 md:mb-10 lg:mb-12 mix-blend-difference text-white"
                        style={{ fontSize: 'clamp(2.5rem, 12vw, 8rem)' }}>
                        <SplitText text="Cinematic 3D" className="block" charClassName="translate-y-full opacity-0" />
                        <SplitText text="For Digital Worlds" className="block text-outline-white" charClassName="translate-y-full opacity-0" />
                    </h1>

                    <p ref={subRef} className="max-w-xl md:max-w-2xl mx-auto text-neutral-300 text-base md:text-xl lg:text-2xl font-light tracking-wide mb-8 md:mb-12 lg:mb-16 drop-shadow-md opacity-0">
                        High-end 3D art production studio built for AAA games and cinematic experiences.
                    </p>

                    <div ref={btnRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 opacity-0">
                        <Button variant="primary" size="lg" className="w-full sm:w-auto min-w-[180px]">View Work</Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[180px]">Get In Touch</Button>
                    </div>
                </div>
            </Container>

            {/* Scroll indicator - hidden on small mobiles if height is tight */}
            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neutral-500 z-20 hidden sm:block">
                <span className="text-[10px] uppercase tracking-[0.3em] writing-mode-vertical">Scroll</span>
            </div>
        </section>
    );
}
