"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        audioRef.current = new Audio("https://cdn.freesound.org/previews/337/337049_3236293-lq.mp3"); // Placeholder trumpet sound
        audioRef.current.loop = true;
        audioRef.current.volume = 0.3;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Button
                variant="outline"
                size="icon"
                onClick={toggleAudio}
                className={cn(
                    "h-12 w-12 rounded-full border-2 shadow-lg transition-all duration-300",
                    isPlaying ? "bg-sepia text-white border-sepia animate-pulse-slow" : "bg-background text-foreground border-input"
                )}
                aria-label="Toggle background music"
            >
                {isPlaying ? <Volume2 className="h-6 w-6" /> : <VolumeX className="h-6 w-6" />}
            </Button>
            {isPlaying && (
                <div className="absolute -top-12 right-0 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-serif italic text-muted-foreground whitespace-nowrap border border-border">
                    Now Playing: Distant Trumpet
                </div>
            )}
        </div>
    );
}
