"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import { discussionPrompts } from "@/lib/data";

export function DiscussionSection() {
    return (
        <section className="w-full py-24 px-6 md:px-12 bg-[#EBE9E4]">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="font-serif text-4xl text-foreground mb-4">Discussion Prompts</h2>
                    <p className="text-muted-foreground font-sans">
                        Think deeply, share freely. There are no wrong answers here.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {discussionPrompts.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Card className="h-full bg-background border-stone-200 hover:border-stone-400 transition-colors shadow-sm hover:shadow-md">
                                <CardHeader>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-full bg-stone-100 text-stone-600">
                                            <MessageCircle className="w-5 h-5" />
                                        </div>
                                        <CardTitle className="font-serif text-xl text-stone-800">{item.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-sans text-stone-600 leading-relaxed">{item.prompt}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
