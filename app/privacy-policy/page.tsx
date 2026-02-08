import { Container } from "@/app/components/ui/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | 22Labs Studio",
    description: "Privacy Policy for 22Labs Studio, a SplitxStudio company. Learn how we collect, use, and protect your data.",
    openGraph: {
        title: "Privacy Policy | 22Labs Studio",
        description: "Privacy Policy for 22Labs Studio, a SplitxStudio company. Learn how we collect, use, and protect your data.",
        type: "website",
    },
};

export default function PrivacyPolicy() {
    return (
        <main className="bg-zinc-950 min-h-screen pt-32 pb-24 text-zinc-300">
            <Container className="max-w-4xl">
                <article className="prose prose-invert prose-lg max-w-none">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Privacy Policy</h1>
                    <p className="text-zinc-500 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

                    <section className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">1. Introduction</h2>
                            <p>
                                Welcome to 22Labs Studio (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), a subsidiary of SplitxStudio. We respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or contact us for services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">2. Information We Collect</h2>
                            <p className="mb-4">We collect information that you voluntarily provide to us, including but not limited to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                                <li>Personal identification information (Name, Email address, Phone number).</li>
                                <li>Project details, briefs, and other business-related inquiries.</li>
                                <li>Technical data such as IP address, browser type, and usage patterns via standard analytics tools.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">3. How We Use Your Information</h2>
                            <p className="mb-4">The information we collect is used solely for the following purposes:</p>
                            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                                <li>To respond to your inquiries and provide quotes for our 3D & CG services.</li>
                                <li>To communicate with you regarding ongoing projects or collaborations.</li>
                                <li>To improve our website functionality and user experience.</li>
                                <li>To comply with legal obligations and protect our rights.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">4. Data Protection & Security</h2>
                            <p>
                                We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">5. Third-Party Services</h2>
                            <p>
                                We may use trusted third-party services (such as email providers, hosting services, and analytics tools) to operate our business. These parties have access to your information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">6. Cookies</h2>
                            <p>
                                Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some website functionality.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">7. Your Rights</h2>
                            <p>
                                Depending on your location, you may have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us at hello@22labs.studio.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">8. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. We encourage you to review this page periodically for any changes. Continued use of our website after any modifications constitutes acceptance of the new terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">9. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <address className="not-italic mt-4 text-zinc-400">
                                <strong>22Labs Studio (SplitxStudio)</strong><br />
                                Email: <a href="mailto:hello@22labs.studio" className="text-accent hover:underline">hello@22labs.studio</a>
                            </address>
                        </div>
                    </section>
                </article>
            </Container>
        </main>
    );
}
