'use client';

import { Container } from "@/app/components/ui/Container";
import { MoveRight } from "lucide-react";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "3D Character Design",
        description: "AAA-quality character modeling, texturing, and rigging for games and cinematics.",
        icon: "👤",
        image: "https://images.pexels.com/photos/13735123/pexels-photo-13735123.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        title: "Environment Art",
        description: "Immersive 3D environments optimized for Unreal Engine 5 and Unity.",
        icon: "🌍",
        image: "https://images.pexels.com/photos/2085739/pexels-photo-2085739.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        title: "Cinematics",
        description: "Story-driven cutscenes and motion graphics that captivate audiences.",
        icon: "🎬",
        image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        title: "Game Assets",
        description: "Optimized props, vehicles, and weapons ready for production pipelines.",
        icon: "⚔️",
        image: "https://images.pexels.com/photos/13735128/pexels-photo-13735128.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        title: "Concept Art",
        description: "Visual development and art direction to establish the perfect look and feel.",
        icon: "🎨",
        image: "https://images.pexels.com/photos/3826678/pexels-photo-3826678.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
];

export function Services() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cards = cardsRef.current?.children;
        if (cards) {
            gsap.fromTo(cards,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 80%",
                    }
                }
            );
        }
    }, []);

    return (
        <section id="services" ref={sectionRef} className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden text-white">
            {/* Background radial glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <Container>
                <div className="mb-12 md:mb-20">
                    <h2 className="font-display font-bold uppercase tracking-tighter text-white mb-6 leading-[0.9]"
                        style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}>
                        Our Services
                    </h2>
                    <div className="w-20 md:w-24 h-1 bg-accent" />
                </div>

                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative h-[400px] p-8 border border-white/10 bg-zinc-900/50 hover:bg-zinc-800/80 transition-all duration-500 overflow-hidden flex flex-col justify-end"
                        >
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700 bg-black">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                            </div>

                            <div className="relative z-10 space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-md border border-accent/20 mb-4 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                    <span className="text-xl">{service.icon}</span>
                                </div>

                                <h3 className="text-2xl font-display font-bold uppercase text-white group-hover:text-accent transition-colors duration-300">
                                    {service.title}
                                </h3>

                                <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-200 transition-colors opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden duration-300">
                                    {service.description}
                                </p>

                                <div className="pt-4 flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/50 group-hover:text-white transition-colors">
                                    <span className="w-8 h-[1px] bg-white/20 group-hover:bg-accent transition-colors duration-300" />
                                    View Details
                                    <MoveRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>

                            {/* Border glow effect */}
                            <div className="absolute inset-0 border border-white/5 group-hover:border-accent/50 transition-colors duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
