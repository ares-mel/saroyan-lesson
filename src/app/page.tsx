import { Hero } from "@/components/Hero";
import { ContextSection } from "@/components/ContextSection";
import { DocumentarySection } from "@/components/DocumentarySection";
import { CinemaSection } from "@/components/CinemaSection";
import { DeepDiveTabs } from "@/components/DeepDiveTabs";
import { QuizSection } from "@/components/QuizSection";
import { DiscussionSection } from "@/components/DiscussionSection";
import { VocabularyDeck } from "@/components/VocabularyDeck";
import { WritingTask } from "@/components/WritingTask";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Hero />
      <ContextSection />
      <DocumentarySection />
      <CinemaSection />
      <DeepDiveTabs />
      <QuizSection />
      <DiscussionSection />

      <footer className="py-12 text-center text-muted-foreground text-sm bg-background border-t border-border mt-12 bg-[#EBE9E4]">
        <p className="font-serif italic mb-2">&quot;The Highlands are not a place on a map, but a place in the heart.&quot;</p>
        <p>© {new Date().getFullYear()} The Highlands Experience. Created for Education.</p>
      </footer>
    </main>
  );
}
