'use client';

import { Container } from "@/app/components/ui/Container";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const navLinks = [
    { name: 'Work', href: '/work' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        gsap.fromTo(
            headerRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: 'power4.out', delay: 0.8 }
        );
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

    return (
        <>
            <header
                ref={headerRef}
                className="fixed top-0 left-0 w-full z-[100] py-6 md:py-8 transition-all duration-300 pointer-events-none"
            >
                <Container className="flex items-center justify-between pointer-events-auto">
                    <Link href="/" className="font-display font-black text-2xl md:text-3xl tracking-tighter uppercase mix-blend-difference text-white group">
                        22Labs<span className="text-accent group-hover:scale-125 inline-block transition-transform duration-300">.</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="font-display text-xs tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors duration-300 mix-blend-difference"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="md:hidden flex items-center justify-center p-2 text-white mix-blend-difference group"
                    >
                        <div className="flex flex-col gap-1.5 items-end">
                            <span className="block w-8 h-[2px] bg-white group-hover:bg-accent transition-all duration-300" />
                            <span className="block w-5 h-[2px] bg-white group-hover:bg-accent transition-all duration-150" />
                        </div>
                    </button>
                </Container>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[110] bg-black flex flex-col items-center justify-center"
                    >
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-8 right-8 text-white p-2 hover:text-accent transition-colors"
                        >
                            <X size={40} strokeWidth={1} />
                        </button>

                        <nav className="flex flex-col items-center gap-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="font-display text-4xl font-bold tracking-tighter uppercase text-white hover:text-accent transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="absolute bottom-12 text-center">
                            <p className="text-zinc-600 text-[10px] uppercase tracking-widest mb-4">Get In Touch</p>
                            <a href="mailto:hello@22labs.studio" className="text-zinc-400 text-sm hover:text-white transition-colors">
                                hello@22labs.studio
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
