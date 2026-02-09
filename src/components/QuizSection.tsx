"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type Question = {
    id: number;
    question: string;
    options: { label: string; isCorrect: boolean }[];
};

const questions: Question[] = [
    {
        id: 1,
        question: "Who is Jasper MacGregor?",
        options: [
            { label: "A rich landlord", isCorrect: false },
            { label: "An old actor & trumpeter", isCorrect: true },
        ],
    },
    {
        id: 2,
        question: "What does the trumpet symbolize?",
        options: [
            { label: "Money and status", isCorrect: false },
            { label: "The beauty of art", isCorrect: true },
        ],
    },
];

export function QuizSection() {
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number | null>>({});

    const handleSelect = (questionId: number, optionIndex: number) => {
        setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
    };

    return (
        <section className="w-full bg-zinc-50 py-24 px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
                <h2 className="font-serif text-3xl md:text-4xl text-zinc-900 mb-12 text-center">Test Your Understanding</h2>

                <div className="space-y-12">
                    {questions.map((q) => (
                        <div key={q.id} className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
                            <h3 className="text-xl font-medium text-zinc-800 mb-6">{q.question}</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {q.options.map((opt, idx) => {
                                    const isSelected = selectedAnswers[q.id] === idx;
                                    const isAnswered = selectedAnswers[q.id] !== undefined;
                                    const isCorrect = opt.isCorrect;

                                    return (
                                        <motion.button
                                            key={idx}
                                            whileHover={!isAnswered ? { scale: 1.01 } : {}}
                                            whileTap={!isAnswered ? { scale: 0.99 } : {}}
                                            onClick={() => !isAnswered && handleSelect(q.id, idx)}
                                            className={cn(
                                                "relative flex items-center justify-between p-4 rounded-xl border-2 text-left transition-colors duration-300",
                                                !isAnswered && "hover:border-zinc-300 border-zinc-200",
                                                isAnswered && isCorrect && isSelected && "border-green-500 bg-green-50",
                                                isAnswered && !isCorrect && isSelected && "border-red-500 bg-red-50",
                                                isAnswered && isCorrect && !isSelected && "border-green-200 bg-green-50/50 opacity-70",
                                                isAnswered && !isCorrect && !isSelected && "border-zinc-100 opacity-50"
                                            )}
                                        >
                                            <span className="font-medium text-zinc-700">{opt.label}</span>
                                            <AnimatePresence>
                                                {isAnswered && isSelected && (
                                                    <motion.div
                                                        initial={{ scale: 0, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                        exit={{ scale: 0, opacity: 0 }}
                                                    >
                                                        {isCorrect ? (
                                                            <CheckCircle className="w-6 h-6 text-green-500" />
                                                        ) : (
                                                            <XCircle className="w-6 h-6 text-red-500" />
                                                        )}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
