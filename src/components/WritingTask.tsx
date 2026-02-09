"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Send } from "lucide-react";

export function WritingTask() {
    const [text, setText] = useState("");
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        if (!text.trim()) return;

        setSaved(true);
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#f5f5dc', '#ef4444', '#22c55e', '#3b82f6'] // beige, red, green, blue
        });

        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <section className="w-full bg-white py-24 px-6 flex justify-center">
            <div className="w-full max-w-2xl text-center">
                <h2 className="font-serif text-3xl md:text-4xl text-zinc-900 mb-6">Reflection</h2>
                <p className="text-zinc-600 mb-8">
                    How does Saroyan portray the struggle between the need for food (survival) and the need for music (beauty)?
                </p>

                <div className="relative group">
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Write your thoughts here..."
                        className="w-full h-48 p-6 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-zinc-900 focus:border-transparent outline-none resize-none transition-all duration-300 font-serif text-lg leading-relaxed shadow-inner"
                    />

                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={handleSave}
                            disabled={!text.trim() || saved}
                            className="flex items-center gap-2 bg-zinc-900 text-white px-8 py-3 rounded-full hover:bg-zinc-800 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm tracking-wide"
                        >
                            {saved ? "Saved!" : "Save Reflection"}
                            {!saved && <Send className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
