/**
 * Fixed background component with a gently-scrolling background
 * If the user has prefers-reduced-motion set, the background does not animate
 */
export function Background() {
  return (
    <div className="background fixed h-screen w-full bg-[var(--theme-color-500)] transition-colors duration-500">
      <div className="bg-scrolling has-global-animation-play-state fixed h-screen w-full bg-checkerboard-45 bg-50 opacity-20 motion-safe:animate-bg-scrolling-12" />
    </div>
  );
}
