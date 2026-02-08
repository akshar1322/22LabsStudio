'use client';

import { Container } from "@/app/components/ui/Container";
import { Portfolio } from "@/app/components/sections/Portfolio";
import { BrandVideo } from "@/app/components/sections/BrandVideo";

export default function WorkPage() {
    return (
        <>
            <div className="pt-32 pb-16 bg-zinc-950">
                <Container>
                    <h1 className="text-6xl md:text-9xl font-display font-black uppercase tracking-tighter text-white/10 select-none absolute top-40 left-0 w-full text-center z-0">
                        Showcase
                    </h1>
                </Container>
            </div>
            <Portfolio />
            <BrandVideo />
        </>
    );
}
