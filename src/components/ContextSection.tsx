"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function ContextSection() {
    return (
        <section id="context-section" className="w-full py-24 px-6 md:px-12 lg:px-24 bg-background">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left Column: Historical Context */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="inline-block border-b-2 border-sepia pb-1">
                        <h2 className="font-serif text-4xl font-bold text-foreground">Fresno, 1914</h2>
                    </div>

                    <p className="font-serif text-xl leading-relaxed text-muted-foreground">
                        William Saroyan wrote about the <span className="text-foreground font-semibold">Armenian immigrant experience</span> in California.
                        The characters in his plays are often starving, struggling to pay rent, and facing systemic poverty.
                    </p>

                    <p className="font-serif text-xl leading-relaxed text-muted-foreground">
                        Yet, when a stranger appears with a trumpet, they don't turn him away. They feed him. They gather around him.
                        <br /><br />
                        <span className="italic text-sepia font-medium">Why does a community with nothing give everything for a song?</span>
                    </p>
                </motion.div>

                {/* Right Column: Interactive Card */}
                <div className="flex justify-center lg:justify-end">
                    <DidYouKnowCard />
                </div>
            </div>
        </section>
    );
}

function DidYouKnowCard() {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleFlip = () => {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    };

    return (
        <div
            className="group relative w-full max-w-sm h-96 cursor-pointer perspective-1000"
            onClick={handleFlip}
        >
            <motion.div
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                onAnimationComplete={() => setIsAnimating(false)}
                style={{ transformStyle: "preserve-3d" }}
                className="w-full h-full relative"
            >
                {/* Front */}
                <Card className="absolute inset-0 w-full h-full bg-stone-100 border-2 border-stone-300 shadow-xl backface-hidden flex flex-col items-center justify-center p-8 text-center bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
                    <CardContent className="space-y-4">
                        <span className="text-stone-600 text-sm font-bold tracking-widest uppercase">Did You Know?</span>
                        <h3 className="font-serif text-3xl font-bold text-stone-900">Who is Johnny?</h3>
                        <p className="text-stone-500 text-sm mt-4 italic">(Tap to reveal)</p>
                    </CardContent>
                </Card>

                {/* Back */}
                <Card
                    className="absolute inset-0 w-full h-full bg-stone-800 text-stone-100 border-2 border-stone-700 shadow-xl backface-hidden flex flex-col items-center justify-center p-8 text-center"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <CardContent>
                        <p className="font-serif text-lg leading-relaxed">
                            Johnny (aged 6) represents the <span className="font-bold">innocent observer</span>, likely Saroyan himself.
                            He watches his father struggle to be a poet in a world that only values money, learning that dignity
                            comes from the <span className="italic">heart</span>, not the wallet.
                        </p>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
