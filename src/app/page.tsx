import { LayoutDashboard } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50">
      <div className="flex flex-col items-center gap-2">
        <LayoutDashboard className="h-12 w-12 text-blue-500" />
        <h1 className="text-2xl font-bold tracking-tight">Saroyan Lesson</h1>
        <p className="text-zinc-500 dark:text-zinc-400">Project initialized successfully.</p>
      </div>
    </div>
  );
}
