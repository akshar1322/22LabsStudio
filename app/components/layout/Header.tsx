'use client';

import { Container } from "@/app/components/ui/Container";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Header() {
    const headerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.fromTo(
            headerRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.5 }
        );
    }, []);

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 w-full z-50 py-6 mix-blend-difference text-white"
        >
            <Container className="flex items-center justify-between">
                <Link href="/" className="font-display font-bold text-2xl tracking-tighter uppercase relative group">
                    22Labs<span className="text-accent">.</span>
                </Link>
                <nav className="hidden md:flex gap-8">
                    {['Work', 'Services', 'Studio', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="font-display text-sm tracking-widest uppercase hover:text-accent transition-colors duration-300"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
                <button className="md:hidden space-y-1.5 group">
                    <span className="block w-8 h-0.5 bg-white group-hover:bg-accent transition-colors" />
                    <span className="block w-6 h-0.5 bg-white group-hover:bg-accent transition-colors ml-auto" />
                </button>
            </Container>
        </header>
    );
}
