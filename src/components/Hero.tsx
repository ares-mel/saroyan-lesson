"use client";

import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative flex h-screen w-full flex-col items-center justify-center bg-beige text-center px-4 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 max-w-4xl"
            >
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-zinc-900 mb-6 tracking-tight">
                    The Man with the Heart in the Highlands
                </h1>
                <p className="font-serif text-xl md:text-2xl text-zinc-700 italic">
                    A journey into William Saroyan’s world.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 animate-bounce"
            >
                <span className="text-zinc-500 text-sm tracking-widest uppercase">Scroll to Explore</span>
            </motion.div>
        </section>
    );
}
