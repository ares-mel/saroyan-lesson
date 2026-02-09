"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    const scrollToContext = () => {
        const contextSection = document.getElementById("context-section");
        contextSection?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] bg-fixed">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />

            <div className="container px-4 z-10 flex flex-col md:flex-row items-center gap-12 md:gap-24">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex-1 text-center md:text-left"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-sepia/10 text-sepia text-sm font-medium tracking-wide mb-6">
                        Interactive Literature Lesson
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-[0.9] tracking-tight">
                        My Heart&#39;s <br />
                        <span className="text-sepia italic">in the Highlands</span>
                    </h1>
                    <p className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-10 mx-auto md:mx-0">
                        A story about poverty, dignity, and the necessity of art. Explore William Saroyan&#39;s poignant masterpiece about an aspiring poet and his son in 1914 Fresno.
                    </p>

                    <Button
                        onClick={scrollToContext}
                        size="lg"
                        className="text-lg px-8 py-6 rounded-full font-serif bg-foreground text-background hover:bg-sepia transition-colors duration-300"
                    >
                        Enter the Play
                    </Button>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    className="flex-1 relative"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        {/* Abstract Trumpet Representation */}
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl opacity-90">
                            <path fill="#8C7B75" d="M42.7,-72.8C54.8,-67.2,63.6,-53.4,69.8,-40.1C75.9,-26.8,79.4,-14,78.2,-1.8C77.1,10.5,71.3,22.1,64.3,33.3C57.3,44.5,49.1,55.3,38.7,62.8C28.3,70.3,15.7,74.5,1.7,71.6C-12.3,68.7,-27.7,58.7,-40.4,49.2C-53.1,39.7,-63.1,30.7,-67.6,19.3C-72.1,8,-71.1,-5.7,-66.1,-18.2C-61.1,-30.7,-52.1,-42,-41.4,-48.2C-30.7,-54.4,-18.3,-55.5,-5.2,-46.5C7.9,-37.5,15.8,-18.4,23.1,-9.5" transform="translate(100 100) scale(1.1)" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <MusicIcon />
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 animate-bounce left-1/2 -translate-x-1/2 text-muted-foreground/50"
            >
                <ArrowDown size={32} />
            </motion.div>
        </section>
    );
}

function MusicIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-48 h-48 text-[#FDFBF7]"
        >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
        </svg>
    )
}
