'use client';

import { Contact } from "@/app/components/sections/Contact";
import { BrandVideo } from "@/app/components/sections/BrandVideo";

export default function ContactPage() {
    return (
        <>
            <div className="pt-32 bg-zinc-950">
                <Contact />
            </div>
            <BrandVideo />
        </>
    );
}
