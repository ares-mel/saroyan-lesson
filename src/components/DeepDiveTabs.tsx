"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function DeepDiveTabs() {
    return (
        <section className="w-full py-24 px-6 bg-[#EBE9E4]">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="font-serif text-4xl text-foreground mb-4">The Deep Dive</h2>
                    <p className="text-muted-foreground font-sans">Exploring the layers of meaning in Saroyan&#39;s work.</p>
                </motion.div>

                <Tabs defaultValue="symbolism" className="w-full">
                    <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto bg-stone-200 p-1 rounded-xl">
                        <TabsTrigger value="symbolism" className="font-serif text-lg py-3 text-stone-700 data-[state=active]:bg-stone-800 data-[state=active]:text-white transition-all">The Symbolism</TabsTrigger>
                        <TabsTrigger value="conflict" className="font-serif text-lg py-3 text-stone-700 data-[state=active]:bg-stone-800 data-[state=active]:text-white transition-all">The Conflict</TabsTrigger>
                        <TabsTrigger value="spirit" className="font-serif text-lg py-3 text-stone-700 data-[state=active]:bg-stone-800 data-[state=active]:text-white transition-all">The Armenian Spirit</TabsTrigger>
                    </TabsList>

                    <div className="mt-8">
                        <TabContent value="symbolism" title="The Soul's Cry">
                            <p>The <strong>Trumpet</strong> isn&#39;t just an instrument—it is the voice of longing. In a neighborhood defined by silence and poverty, the music disrupts the status quo.</p>
                            <p className="mt-4">When Jasper MacGregor plays, he doesn&#39;t just make sound; he summons the "Highlands"—a metaphorical place of peace, dignity, and beauty that everyone, regardless of their background, yearns for.</p>
                            <div className="mt-6 p-4 bg-sepia/10 border-l-4 border-sepia italic text-foreground border-stone-400 bg-stone-100">
                                "My heart's in the Highlands, my heart is not here..."
                            </div>

                            <div className="mt-12 border-t border-stone-200 pt-8">
                                <h3 className="font-serif text-2xl text-stone-800 mb-4">The Melody of the Highlands</h3>
                                <p className="mb-6">
                                    To truly understand the "voice of longing" Saroyan describes, listen to this masterpiece by Armenian composer <strong>Arno Babajanyan</strong>, written specifically for the film version of this play.
                                </p>

                                <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg mb-6">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/9QTGMeNr4Tg"
                                        title="Arno Babajanyan - Im sirte lernerum e"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>

                                <div className="bg-stone-100 p-6 rounded-lg border border-stone-200">
                                    <span className="text-xs font-bold tracking-widest text-stone-500 uppercase mb-2 block">Discussion Challenge</span>
                                    <p className="font-medium text-stone-800">
                                        Does this trumpet melody feel more like Fresno, California, or the Armenian Highlands? Why?
                                    </p>
                                </div>
                            </div>
                        </TabContent>

                        <TabContent value="conflict" title="Art vs. Survival">
                            <p>The father is a poet who cannot pay rent. To the grocer (Mr. Kosak), he is a failure. But to his son Johnny, he is a creator of worlds.</p>
                            <p className="mt-4">Saroyan asks a difficult question: Is the father irresponsible for refusing to work a "normal" job, or is he a hero for protecting his soul in a world that wants to crush it?</p>
                            <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
                                <li><strong>The Grocer:</strong> Represents the practical world, commerce, and survival.</li>
                                <li><strong>The Poet:</strong> Represents the spiritual world, art, and legacy.</li>
                            </ul>
                        </TabContent>

                        <TabContent value="spirit" title="Resilience of a People">
                            <p>Saroyan, the son of Armenian immigrants, infuses the play with the specific trauma and resilience of his people.</p>
                            <p className="mt-4">Though not explicitly about the Genocide, the play reflects the displaced person&#39;s constant search for "home." The Highlands are not Scotland; they are the lost Armenia, the lost dignity, the place where they belong.</p>
                            <div className="mt-6 p-4 bg-sepia/10 border-l-4 border-sepia italic text-foreground">
                                "Go ahead, destroy this race... see if they will not laugh, sing and pray again." — William Saroyan
                            </div>
                        </TabContent>
                    </div>
                </Tabs>
            </div>
        </section>
    );
}

function TabContent({ value, title, children }: { value: string, title: string, children: React.ReactNode }) {
    return (
        <TabsContent value={value}>
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
            >
                <Card className="border-none shadow-lg bg-background">
                    <CardHeader>
                        <CardTitle className="font-serif text-3xl text-sepia">{title}</CardTitle>
                    </CardHeader>
                    <CardContent className="font-sans text-lg leading-relaxed text-muted-foreground">
                        {children}
                    </CardContent>
                </Card>
            </motion.div>
        </TabsContent>
    )
}
