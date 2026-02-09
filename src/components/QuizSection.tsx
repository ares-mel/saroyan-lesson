"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Sparkles, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { quizData } from "@/lib/data";

type Question = {
    id: number;
    question: string;
    options: string[];
    correct: number;
    feedback: string;
};

export function QuizSection() {
    const [mode, setMode] = useState<"plot" | "symbolism">("plot");
    const questions: Question[] = mode === "plot" ? quizData.plotQuiz : quizData.symbolismQuiz;

    return (
        <section className="w-full py-24 px-6 md:px-12 bg-background">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl text-foreground mb-4">Test Your Understanding</h2>
                    <p className="text-muted-foreground mb-8">Choose your difficulty level:</p>

                    {/* Mode Toggle */}
                    <div className="flex justify-center gap-4">
                        <Button
                            variant={mode === "plot" ? "default" : "outline"}
                            onClick={() => setMode("plot")}
                            className={cn(
                                "px-6 py-3 font-sans transition-all",
                                mode === "plot" ? "bg-stone-800 text-white hover:bg-stone-700" : "bg-background text-foreground border-stone-300"
                            )}
                        >
                            <BookOpen className="w-4 h-4 mr-2" />
                            Easy Mode
                        </Button>
                        <Button
                            variant={mode === "symbolism" ? "default" : "outline"}
                            onClick={() => setMode("symbolism")}
                            className={cn(
                                "px-6 py-3 font-sans transition-all",
                                mode === "symbolism" ? "bg-stone-800 text-white hover:bg-stone-700" : "bg-background text-foreground border-stone-300"
                            )}
                        >
                            <Sparkles className="w-4 h-4 mr-2" />
                            Deep Mode
                        </Button>
                    </div>
                </div>

                <div className="space-y-8">
                    {questions.map((q) => (
                        <QuizCard key={q.id} question={q} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function QuizCard({ question }: { question: Question }) {
    const [selected, setSelected] = useState<number | null>(null);
    const isCorrect = selected === question.correct;

    return (
        <Card className="overflow-hidden border-2 border-muted hover:border-stone-400 transition-colors duration-300">
            <CardContent className="p-8">
                <div className="mb-6">
                    <span className="text-xs font-bold tracking-widest text-stone-500 uppercase block mb-2">Question {question.id}</span>
                    <h3 className="font-serif text-xl text-foreground">{question.question}</h3>
                </div>

                <div className="grid grid-cols-1 gap-3">
                    {question.options.map((opt, idx) => (
                        <Button
                            key={idx}
                            variant="outline"
                            className={cn(
                                "h-auto py-4 px-6 justify-between text-left whitespace-normal font-sans text-base transition-all",
                                selected === idx
                                    ? idx === question.correct
                                        ? "bg-green-100 border-green-500 text-green-900 hover:bg-green-100 hover:text-green-900"
                                        : "bg-red-100 border-red-500 text-red-900 hover:bg-red-100 hover:text-red-900"
                                    : selected !== null && idx === question.correct
                                        ? "bg-green-50 border-green-300 text-green-800"
                                        : "hover:border-stone-400 hover:text-foreground bg-stone-50 text-stone-800"
                            )}
                            onClick={() => setSelected(idx)}
                            disabled={selected !== null}
                        >
                            <span>{opt}</span>
                            {selected === idx && (
                                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                    {idx === question.correct ? <CheckCircle2 className="w-5 h-5 text-green-600" /> : <XCircle className="w-5 h-5 text-red-600" />}
                                </motion.span>
                            )}
                        </Button>
                    ))}
                </div>

                <AnimatePresence>
                    {selected !== null && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="mt-6 pt-6 border-t border-border"
                        >
                            <div className={cn(
                                "p-4 rounded-lg",
                                isCorrect ? "bg-stone-100 text-stone-900" : "bg-red-50 text-red-900"
                            )}>
                                <p className="font-medium text-base">{question.feedback}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </CardContent>
        </Card>
    );
}
