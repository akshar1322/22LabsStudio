'use client';

import { Services } from "@/app/components/sections/Services";
import { BrandVideo } from "@/app/components/sections/BrandVideo";
import { Workflow } from "@/app/components/sections/Workflow";

export default function ServicesPage() {
    return (
        <>
            <div className="pt-32 bg-zinc-950">
                <Services />
            </div>
            <Workflow />
            <BrandVideo />
        </>
    );
}
