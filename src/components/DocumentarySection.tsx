"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Film } from "lucide-react";
import { cn } from "@/lib/utils";

const documentaryQuestions = [
    {
        id: 1,
        question: "Where was William Saroyan born?",
        options: ["New York", "Fresno, California", "Armenia", "Los Angeles"],
        correct: 1,
        feedback: "Correct! Saroyan was born in Fresno, California in 1908 to Armenian immigrant parents."
    },
    {
        id: 2,
        question: "What major literary prize did Saroyan famously refuse?",
        options: ["Nobel Prize", "Pulitzer Prize", "National Book Award", "Booker Prize"],
        correct: 1,
        feedback: "Yes! He refused the 1940 Pulitzer Prize for Drama, saying commerce should not judge art."
    },
    {
        id: 3,
        question: "What recurring theme appears in Saroyan's work?",
        options: ["Wealth and power", "Human dignity despite poverty", "Revenge stories", "Science fiction"],
        correct: 1,
        feedback: "Exactly. Saroyan celebrated the human spirit and dignity even in the face of hardship."
    }
];

export function DocumentarySection() {
    return (
        <section className="w-full py-24 px-6 md:px-12 bg-[#F5F5DC]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-800 text-stone-100 rounded-full text-sm font-medium mb-6">
                        <Film className="w-4 h-4" />
                        Documentary
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">Meet William Saroyan</h2>
                    <p className="text-stone-600 max-w-2xl mx-auto">
                        Before we explore his play, let&apos;s learn about the man himself—his life, his struggles, and his vision.
                    </p>
                </motion.div>

                {/* Video Embed */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-stone-300 mb-16"
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

                {/* Documentary Quiz */}
                <div className="max-w-3xl mx-auto">
                    <h3 className="font-serif text-2xl text-stone-800 text-center mb-8">
                        After watching, test your knowledge:
                    </h3>
                    <div className="space-y-6">
                        {documentaryQuestions.map((q) => (
                            <DocumentaryQuizCard key={q.id} question={q} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function DocumentaryQuizCard({ question }: { question: typeof documentaryQuestions[0] }) {
    const [selected, setSelected] = useState<number | null>(null);
    const isCorrect = selected === question.correct;

    return (
        <Card className="border-stone-300 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
                <p className="font-medium text-stone-800 mb-4">{question.id}. {question.question}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {question.options.map((opt, idx) => (
                        <Button
                            key={idx}
                            variant="outline"
                            size="sm"
                            className={cn(
                                "justify-start text-left h-auto py-3 px-4 font-normal",
                                selected === idx
                                    ? idx === question.correct
                                        ? "bg-green-100 border-green-500 text-green-900"
                                        : "bg-red-100 border-red-500 text-red-900"
                                    : selected !== null && idx === question.correct
                                        ? "bg-green-50 border-green-300"
                                        : "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100"
                            )}
                            onClick={() => setSelected(idx)}
                            disabled={selected !== null}
                        >
                            {opt}
                            {selected === idx && (
                                <span className="ml-auto">
                                    {idx === question.correct ? (
                                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                                    ) : (
                                        <XCircle className="w-4 h-4 text-red-600" />
                                    )}
                                </span>
                            )}
                        </Button>
                    ))}
                </div>

                <AnimatePresence>
                    {selected !== null && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="mt-4 pt-4 border-t border-stone-200"
                        >
                            <p className={cn(
                                "text-sm font-medium",
                                isCorrect ? "text-green-700" : "text-red-700"
                            )}>
                                {question.feedback}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </CardContent>
        </Card>
    );
}
