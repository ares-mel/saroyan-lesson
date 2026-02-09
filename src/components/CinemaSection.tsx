"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const TIMESTAMPS = [
    { label: "Enter Jasper MacGregor", time: 630 }, // 10:30
    { label: "The Song of the Highlands", time: 840 }, // 14:00
    { label: "The Neighbors Bring Food", time: 1320 }, // 22:00
];

export function CinemaSection() {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const seekTo = (seconds: number) => {
        if (iframeRef.current) {
            // Re-setting the src is a safe way to seek in a simple iframe without full API overhead being perfectly tracked
            // Ideally we'd use the YouTube Player API, but for this constraint-based setup, this works reliably.
            const baseUrl = "https://www.youtube.com/embed/EWiWuNW16JU";
            const newUrl = `${baseUrl}?start=${seconds}&autoplay=1`;
            iframeRef.current.src = newUrl;
        }
    };

    return (
        <section className="w-full bg-stone-950 py-24 px-6 flex flex-col items-center justify-center border-y-8 border-double border-sepia/20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <span className="text-sepia tracking-[0.2em] uppercase font-bold text-sm mb-4 block">The Theater</span>
                <h2 className="font-serif text-4xl md:text-5xl text-[#FDFBF7]">Watch the Performance</h2>
            </motion.div>

            {/* Video Player */}
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-5xl aspect-video rounded-sm overflow-hidden shadow-[0_0_100px_rgba(140,123,117,0.15)] border-4 border-stone-800 bg-black relative"
            >
                <iframe
                    ref={iframeRef}
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

            {/* Smart Timestamps */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 flex flex-wrap justify-center gap-4"
            >
                {TIMESTAMPS.map((ts, idx) => (
                    <Button
                        key={idx}
                        variant="outline"
                        onClick={() => seekTo(ts.time)}
                        className="bg-stone-900 border-stone-700 text-stone-300 hover:bg-sepia hover:text-white hover:border-sepia transition-all duration-300 font-sans"
                    >
                        <Play className="w-4 h-4 mr-2" />
                        [{Math.floor(ts.time / 60)}:{(ts.time % 60).toString().padStart(2, '0')}] {ts.label}
                    </Button>
                ))}
            </motion.div>
        </section>
    );
}
