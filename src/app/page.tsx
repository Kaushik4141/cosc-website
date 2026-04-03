import HeroLogo from '@/components/HeroLogo';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen items-center justify-center bg-white font-sans dark:bg-black overflow-hidden relative">
      <main className="flex flex-1 w-full flex-col items-center justify-center z-10 p-4">
        <HeroLogo />
      </main>

      {/* Decorative background grid or radial light to emphasize the developer tool aesthetic */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-100/50 via-zinc-50 to-white dark:from-zinc-900/50 dark:via-black dark:to-black z-0 pointer-events-none" />
    </div>
  );
}
