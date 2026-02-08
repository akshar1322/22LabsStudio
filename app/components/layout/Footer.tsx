'use client';

import { Container } from "@/app/components/ui/Container";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

const links = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

const socials = [
    { name: "Instagram", href: "#" },
    { name: "Twitter / X", href: "#" },
    { name: "ArtStation", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Vimeo", href: "#" },
];

export function Footer() {
    return (
        <footer className="bg-black text-white py-24 border-t border-white/5 relative z-10">
            <Container>
                <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-24">
                    <div className="md:col-span-2 space-y-8">
                        <Link href="/" className="inline-block">
                            <h2 className="text-4xl font-display font-black tracking-tighter uppercase mb-4">
                                22Labs<span className="text-accent">.</span>
                            </h2>
                        </Link>
                        <p className="text-zinc-400 max-w-sm text-lg font-light leading-relaxed">
                            A high-end 3D production studio crafting digital worlds for next-gen games and cinematic experiences.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-500 mb-6">Sitemap</h3>
                        <ul className="space-y-4">
                            {links.map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-lg hover:text-accent transition-colors duration-300 inline-flex items-center gap-2 group">
                                        {link.name}
                                        <MoveUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-500 mb-6">Socials</h3>
                        <ul className="space-y-4">
                            {socials.map(social => (
                                <li key={social.name}>
                                    <a href={social.href} className="text-lg text-zinc-300 hover:text-white transition-colors duration-300">
                                        {social.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest text-zinc-600 gap-4">
                    <p>&copy; {new Date().getFullYear()} 22Labs Studio (SplitxStudio). All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy-policy" className="hover:text-zinc-400 transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-zinc-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
