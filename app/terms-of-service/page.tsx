import { Container } from "@/app/components/ui/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | 22Labs Studio",
    description: "Terms of Service for 22Labs Studio, a SplitxStudio company. Read the rules and regulations for using our website.",
    openGraph: {
        title: "Terms of Service | 22Labs Studio",
        description: "Terms of Service for 22Labs Studio, a SplitxStudio company. Read the rules and regulations for using our website.",
        type: "website",
    },
};

export default function TermsOfService() {
    return (
        <main className="bg-zinc-950 min-h-screen pt-32 pb-24 text-zinc-300">
            <Container className="max-w-4xl">
                <article className="prose prose-invert prose-lg max-w-none">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">Terms of Service</h1>
                    <p className="text-zinc-500 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

                    <section className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using the website of 22Labs Studio (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), a subsidiary of SplitxStudio, you agree to comply with and be legally bound by these Terms of Service. If you do not agree to these terms, please refrain from using our website.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">2. Use of Our Service</h2>
                            <p>
                                Our services are intended for professional and business use related to 3D and CG art production. You agree to use our website and services only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of the website.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">3. Intellectual Property</h2>
                            <p>
                                All content, visuals, trademarks, logos, and materials available on this website are the property of 22Labs Studio (SplitxStudio) or our clients/partners and are protected by applicable intellectual property laws. Unauthorized use, reproduction, or distribution of any content without our express written permission is strictly prohibited.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">4. Limitation of Liability</h2>
                            <p>
                                In no event shall 22Labs Studio, SplitxStudio, nor any of its officers, directors, and employees, be liable for anything arising out of or in any way connected with your use of this website, whether such liability is under contract. 22Labs Studio (SplitxStudio) shall not be liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">5. Disclaimer</h2>
                            <p>
                                The materials on 22Labs Studio&apos;s website are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">6. External Links</h2>
                            <p>
                                Our website may contain links to third-party websites or services that are not owned or controlled by 22Labs Studio (SplitxStudio). We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">7. Termination</h2>
                            <p>
                                We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms of Service.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">8. Governing Law</h2>
                            <p>
                                These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which SplitxStudio operates, without regard to its conflict of law provisions.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">9. Changes to Terms</h2>
                            <p>
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-display font-bold text-white mb-4">10. Contact Us</h2>
                            <p>
                                If you have any questions about these Terms of Service, please contact us at:
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
