'use client';

import { Container } from "@/app/components/ui/Container";
import { cn } from "@/app/utils/cn";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "Project: NEON",
        category: "Environment Art",
        size: "col-span-1 md:col-span-2 row-span-2",
        image: "https://images.pexels.com/photos/13735128/pexels-photo-13735128.jpeg?auto=compress&cs=tinysrgb&w=1260",
    },
    {
        id: 2,
        title: "Mecha Unit 01",
        category: "Character Design",
        size: "col-span-1 md:col-span-1 row-span-1",
        image: "https://images.pexels.com/photos/17483868/pexels-photo-17483868/free-photo-of-an-artist-illustration-of-artificial-intelligence-ai-this-image-visualises-the-processing-of-large-amounts-of-data.png?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 3,
        title: "Void Runner",
        category: "Vehicle Asset",
        size: "col-span-1 md:col-span-1 row-span-1",
        image: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 4,
        title: "Lost Temple",
        category: "Cinematics",
        size: "col-span-1 md:col-span-2 row-span-1",
        image: "https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=1260",
    },
    {
        id: 5,
        title: "Cyber Skull",
        category: "Concept Art",
        size: "col-span-1 md:col-span-1 row-span-2",
        image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: 6,
        title: "Deep Space",
        category: "Environment",
        size: "col-span-1 md:col-span-1 row-span-1",
        image: "https://images.pexels.com/photos/2085739/pexels-photo-2085739.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
];

export function Portfolio() {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const items = gridRef.current?.querySelectorAll('.project-item');
        if (items) {
            items.forEach((item) => {
                gsap.fromTo(item,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 90%",
                        }
                    }
                );
            });
        }
    }, []);

    return (
        <section id="work" className="py-24 md:py-32 bg-zinc-950 text-white relative">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
                    <div className="max-w-3xl">
                        <h2 className="font-display font-black uppercase tracking-tighter mb-4 leading-[0.9]"
                            style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>
                            Selected Work
                        </h2>
                        <p className="text-zinc-500 font-mono text-xs md:text-sm tracking-widest uppercase">/ Recent Projects 2024-2025</p>
                    </div>
                    <div className="hidden lg:block">
                        <div className="text-right text-[10px] font-mono text-zinc-600 uppercase tracking-tighter">
                            Total Projects: {projects.length} <br />
                            Status: Production Ready
                        </div>
                    </div>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={cn(
                                "project-item group relative overflow-hidden bg-zinc-900 border border-white/5",
                                project.size
                            )}
                        >
                            {/* Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 z-10">
                                <span className="text-accent text-xs font-mono uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl font-display font-bold uppercase tracking-tight group-hover:text-white transition-colors">
                                    {project.title}
                                </h3>
                            </div>

                            {/* Hover overlay for 'View Project' */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                                    <span className="text-xs uppercase tracking-widest font-bold">View Case Study</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
