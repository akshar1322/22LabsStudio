'use client';

import { Container } from "@/app/components/ui/Container";

export function BrandVideo() {
    return (
        <section className="relative w-full h-[60vh] flex items-center justify-center bg-black overflow-hidden border-t border-white/5">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
            >
                <source src="https://videos.pexels.com/video-files/852421/852421-hd_1920_1080_30fps.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />

            {/* Content */}
            <Container className="relative z-10 text-center space-y-6 md:space-y-8">
                <h2 className="font-display font-black text-white mix-blend-difference tracking-tighter leading-none select-none uppercase"
                    style={{ fontSize: 'clamp(4rem, 20vw, 12rem)' }}>
                    22<span className="text-accent italic">LABS</span>
                </h2>

                <p className="text-sm md:text-xl lg:text-2xl font-light text-white/60 tracking-[0.3em] uppercase max-w-2xl mx-auto">
                    Crafting the Future of Digital Entertainment
                </p>
            </Container>
        </section>
    );
}
