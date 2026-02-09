"use client";

import { motion } from "framer-motion";

export function ContextSection() {
    return (
        <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    <h2 className="font-serif text-4xl font-bold text-zinc-900">William Saroyan</h2>
                    <div className="h-1 w-20 bg-zinc-900" />
                    <p className="text-zinc-700 text-lg leading-relaxed">
                        Saroyan was a dramatist and author who wrote about the immigrant experience in America.
                        His works often explore themes of <span className="font-semibold text-zinc-900">poverty</span>,
                        <span className="font-semibold text-zinc-900"> dignity</span>, and the resilience of the human spirit.
                    </p>
                    <p className="text-zinc-700 text-lg leading-relaxed">
                        &quot;My Heart&apos;s in the Highlands&quot; is a poignant play that reflects his own struggles and the
                        universal search for beauty amidst hardship.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl"
                >
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/o5_v_HNStqQ"
                        title="William Saroyan Documentary"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
}
