export function Background() {
  return (
    <div className="background fixed h-screen w-full bg-[var(--theme-color-500)] transition-colors duration-500">
      <div className="bg-scrolling has-global-animation-play-state fixed h-screen w-full animate-bg-scrolling-12 bg-checkerboard-45 bg-50 opacity-20" />
    </div>
  );
}
