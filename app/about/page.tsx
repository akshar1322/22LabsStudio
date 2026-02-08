'use client';

import { Container } from "@/app/components/ui/Container";
import { BrandVideo } from "@/app/components/sections/BrandVideo";
import { motion } from "framer-motion";
import { Workflow } from "@/app/components/sections/Workflow";

export default function AboutPage() {
    return (
        <>
            <section className="pt-48 pb-24 bg-zinc-950 text-white relative overflow-hidden">
                {/* Header */}
                <Container className="relative z-10">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter mb-12 mix-blend-difference"
                    >
                        Built With <br /> <span className="text-stroke-white text-transparent">Precision.</span>
                    </motion.h1>

                    <div className="grid md:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-xl md:text-2xl leading-relaxed font-light text-zinc-300"
                        >
                            <p className="mb-8">
                                22Labs Studio is a collective of digital craftsmen, technical artists, and storytellers dedicated to pushing the boundaries of real-time graphics.
                            </p>
                            <p>
                                We don&apos;t just create assets; we engineer visual experiences that define the next generation of games and cinematics.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-4">Our Mission</h3>
                                <p className="text-zinc-400">
                                    To bridge the gap between concept art and in-engine implementation, ensuring that the artist&apos;s original vision is preserved in every frame.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-4">Our Stack</h3>
                                <div className="flex flex-wrap gap-3">
                                    {["Unreal Engine 5", "Blender", "Substance Painter", "ZBrush", "Marvelous Designer", "Maya", "Houdini"].map(tool => (
                                        <span key={tool} className="px-3 py-1 border border-white/10 rounded text-xs uppercase text-zinc-400 hover:text-white hover:border-accent transition-colors">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>

                {/* Image Strip */}
                <div className="mt-32 w-full h-[400px] relative flex gap-4 overflow-hidden -rotate-2 scale-110 opacity-60 hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0">
                    {/* Simple marquee effect or just static strip for now */}
                    <div className="flex-1 bg-[url('https://images.pexels.com/photos/3062948/pexels-photo-3062948.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center" />
                    <div className="flex-1 bg-[url('https://images.pexels.com/photos/17485706/pexels-photo-17485706/free-photo-of-an-artist-illustration-of-artificial-intelligence-ai-this-image-visualises-the-processing-of-large-amounts-of-data.png')] bg-cover bg-center" />
                    <div className="flex-1 bg-[url('https://images.pexels.com/photos/3826678/pexels-photo-3826678.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center" />
                    <div className="flex-1 bg-[url('https://images.pexels.com/photos/13735123/pexels-photo-13735123.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center" />
                </div>
            </section>

            <Workflow />
            <BrandVideo />
        </>
    );
}
