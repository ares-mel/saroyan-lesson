import { useState } from "react";
import { motion } from "framer-motion";

type Card = {
    id: number;
    term: string;
    definition: string;
};

const cards: Card[] = [
    { id: 1, term: "Dignity", definition: "The state of being worthy of honor or respect." },
    { id: 2, term: "Poverty", definition: "The state of being extremely poor." },
    { id: 3, term: "Highlands", definition: "A mountainous region, here symbolizing a place of spiritual belonging." },
    { id: 4, term: "Resilience", definition: "The capacity to recover quickly from difficulties." },
];

export function VocabularyDeck() {
    return (
        <section className="w-full bg-beige py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="font-serif text-3xl md:text-4xl text-zinc-900 mb-12">Vocabulary</h2>

                <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
                    {cards.map((card) => (
                        <FlipCard key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FlipCard({ card }: { card: Card }) {
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
            className="relative w-72 h-96 flex-shrink-0 cursor-pointer perspective-1000 snap-center"
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
                <div className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-lg flex items-center justify-center border border-zinc-200 backface-hidden">
                    <h3 className="font-serif text-3xl font-bold text-zinc-900">{card.term}</h3>
                    <span className="absolute bottom-6 text-xs uppercase tracking-widest text-zinc-400">Tap to flip</span>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 w-full h-full bg-zinc-900 rounded-2xl shadow-lg flex items-center justify-center p-8 text-center backface-hidden"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <p className="text-zinc-100 text-lg leading-relaxed font-medium">{card.definition}</p>
                </div>
            </motion.div>
        </div>
    );
}
