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
        <section ref={containerRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Cinematic Background Video */}
            <div className="hero-video absolute inset-0 w-full h-[120%] -top-[10%] z-0 pointer-events-none">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
                >
                    <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black z-10" />
            </div>

            <Container className="relative z-20 flex flex-col items-center text-center">
                <h1 ref={headlineRef} className="font-display font-black text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter uppercase mb-8 mix-blend-difference text-white">
                    <SplitText text="Cinematic 3D" className="block" charClassName="translate-y-full opacity-0" />
                    <SplitText text="For Digital Worlds" className="block text-outline-white" charClassName="translate-y-full opacity-0" />
                </h1>

                <p ref={subRef} className="max-w-xl mx-auto text-neutral-300 text-lg md:text-xl font-light tracking-wide mb-12 drop-shadow-md">
                    High-end 3D art production studio built for AAA games and cinematic experiences.
                </p>

                <div ref={btnRef} className="flex flex-col sm:flex-row gap-6">
                    <Button variant="primary" size="lg">View Work</Button>
                    <Button variant="outline" size="lg">Get In Touch</Button>
                </div>
            </Container>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neutral-500 z-20">
                <span className="text-xs uppercase tracking-widest writing-mode-vertical">Scroll</span>
            </div>
        </section>
    );
}
