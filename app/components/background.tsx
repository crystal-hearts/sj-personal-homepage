export function Background() {
  return (
    <div className="background fixed top-0 min-h-screen w-full bg-[var(--theme-color-500)] pb-10 transition-colors duration-500">
      <div className="bg-scrolling has-global-animation-play-state absolute h-full w-full animate-bg-scrolling-12 border-16 border-solid border-[var(--theme-color-200)] border-opacity-80 bg-checkerboard-45 bg-50 opacity-20" />
    </div>
  );
}
