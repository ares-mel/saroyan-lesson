"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Users, Scale, AlertCircle } from "lucide-react";

const discussionQuestions = [
    {
        title: "The Highlands Metaphor",
        icon: <MessageSquare className="w-5 h-5" />,
        question: "In the video at [06:23], Jasper says his heart is in the Highlands. If 'The Highlands' isn't a physical place, what exactly is it?",
        prompt: "Is it a memory, a feeling of home, or a set of values?"
    },
    {
        title: "Language and Connection",
        icon: <Users className="w-5 h-5" />,
        question: "Why can Jasper and the grandmother understand each other at [38:38] even though they don't speak the same language?",
        prompt: "Does art create a 'universal language' that is more powerful than words?"
    },
    {
        title: "The Conflict of Responsibility",
        icon: <Scale className="w-5 h-5" />,
        question: "Mr. Kosak (the grocer) says everyone has to work in America [18:00], but Johnny’s father says he works 'night and day' as a poet. Who is right?",
        prompt: "Is the father lazy, or is the world simply too focused on money?"
    },
    {
        title: "The Final Verdict",
        icon: <AlertCircle className="w-5 h-5" />,
        question: "When the family is evicted at the end, Johnny says 'something is wrong somewhere.' What is the 'wrong' thing?",
        prompt: "Is it the poverty, the landlord, or the fact that people have forgotten how to value poetry?"
    }
];

export function DiscussionSection() {
    return (
        <section className="w-full py-24 px-6 md:px-12 bg-stone-100 border-t border-stone-200">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sepia font-bold tracking-widest uppercase text-sm mb-4 block">Class Debate</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">Final Class Discussion: The Saroyan Philosophy</h2>
                    <p className="text-stone-600 max-w-2xl mx-auto text-lg">
                        Reflect on these questions and prepare to defend your perspective.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {discussionQuestions.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Card className="h-full bg-white border-stone-200 hover:border-sepia/50 transition-colors shadow-sm hover:shadow-md">
                                <CardHeader>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-full bg-stone-100 text-sepia">
                                            {item.icon}
                                        </div>
                                        <CardTitle className="font-serif text-xl text-stone-900">{item.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-medium text-stone-800 mb-3 text-lg">{item.question}</p>
                                    <p className="font-sans text-stone-600 italic leading-relaxed">{item.prompt}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-stone-900 text-stone-100 p-8 md:p-12 rounded-2xl text-center shadow-xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10">
                        <h3 className="font-serif text-3xl mb-4 text-sepia">Prepare your arguments for our in-class debate.</h3>
                        <p className="text-xl text-stone-300 font-light">
                            Be ready to defend either the <span className="font-bold text-white">Poet</span> or the <span className="font-bold text-white">Shopkeeper</span>.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
