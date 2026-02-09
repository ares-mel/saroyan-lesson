import { Hero } from "@/components/Hero";
import { ContextSection } from "@/components/ContextSection";
import { CinemaSection } from "@/components/CinemaSection";
import { QuizSection } from "@/components/QuizSection";
import { VocabularyDeck } from "@/components/VocabularyDeck";
import { WritingTask } from "@/components/WritingTask";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <ContextSection />
      <CinemaSection />
      <QuizSection />
      <VocabularyDeck />
      <WritingTask />

      <footer className="py-8 text-center text-zinc-400 text-sm bg-zinc-50 border-t border-zinc-100">
        <p>© {new Date().getFullYear()} Saroyan Lesson. Built for education.</p>
      </footer>
    </main>
  );
}
