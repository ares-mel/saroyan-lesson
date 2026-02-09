"use client";

import { motion } from "framer-motion";

export function CinemaSection() {
    return (
        <section className="w-full bg-black py-24 px-6 flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-center mb-12"
            >
                <span className="text-red-500 tracking-widest uppercase font-bold text-sm mb-4 block">Cinema Mode</span>
                <h2 className="font-serif text-4xl md:text-5xl text-white">The Play</h2>
            </motion.div>

            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.1)] border border-zinc-800"
            >
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/EWiWuNW16JU?start=630"
                    title="My Heart's in the Highlands Play"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </motion.div>
        </section>
    );
}
