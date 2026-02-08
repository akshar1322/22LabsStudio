'use client';

import { Container } from "@/app/components/ui/Container";
import { Button } from "@/app/components/ui/Button";
import { useState } from "react";

export function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Failed to send message');
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Something went wrong");
        }
    };

    return (
        <section id="contact" className="py-24 md:py-32 bg-zinc-950 text-white relative overflow-hidden">
            <Container>
                <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                    <div>
                        <h2 className="font-display font-black uppercase tracking-tighter mb-8 leading-[0.8]"
                            style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>
                            Let&apos;s <br /> <span className="text-accent underline decoration-1 underline-offset-[12px]">Create.</span>
                        </h2>
                        <p className="text-zinc-400 text-base md:text-lg mb-8 md:mb-12 max-w-md">
                            Ready to build the unseen? Reach out for collaborations, careers, or project inquiries.
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:hello@22labs.studio" className="block text-lg md:text-xl hover:text-accent transition-colors font-mono tracking-tighter">hello@22labs.studio</a>
                            <p className="text-zinc-500 font-mono text-sm tracking-widest">+1 (555) 000-0000</p>
                            <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">Tokyo / Los Angeles / Remote</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 mt-12 md:mt-0">
                        <div className="group relative">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="peer w-full bg-transparent border-b border-zinc-800 py-4 text-xl focus:outline-none focus:border-accent transition-colors placeholder:text-transparent"
                                placeholder="Name"
                            />
                            <label className="absolute left-0 top-4 text-zinc-500 text-xl transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-accent peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl pointer-events-none uppercase tracking-widest">
                                Name
                            </label>
                        </div>

                        <div className="group relative">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="peer w-full bg-transparent border-b border-zinc-800 py-4 text-xl focus:outline-none focus:border-accent transition-colors placeholder:text-transparent"
                                placeholder="Email"
                            />
                            <label className="absolute left-0 top-4 text-zinc-500 text-xl transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-accent peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl pointer-events-none uppercase tracking-widest">
                                Email
                            </label>
                        </div>

                        <div className="group relative">
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="peer w-full bg-transparent border-b border-zinc-800 py-4 text-xl focus:outline-none focus:border-accent transition-colors placeholder:text-transparent resize-none"
                                placeholder="Message"
                            />
                            <label className="absolute left-0 top-4 text-zinc-500 text-xl transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-accent peer-placeholder-shown:top-4 peer-placeholder-shown:text-xl pointer-events-none uppercase tracking-widest">
                                Project Details
                            </label>
                        </div>

                        <div className="flex items-center gap-4">
                            <Button type="submit" variant="primary" size="lg" disabled={status === "loading" || status === "success"}>
                                {status === "loading" ? "Sending..." : status === "success" ? "Message Sent" : "Send Message"}
                            </Button>
                            {status === "error" && <p className="text-red-500 text-sm">{errorMessage}</p>}
                            {status === "success" && <p className="text-green-500 text-sm">Thank you! We&apos;ll be in touch.</p>}
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    );
}
