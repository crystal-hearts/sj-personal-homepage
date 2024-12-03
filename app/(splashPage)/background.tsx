export function Background() {
  return (
    <div className="background fixed top-0 min-h-screen w-full bg-[var(--theme-color-500)] pb-10 transition-colors duration-500">
      <div
        className="bg-scrolling absolute h-full w-full animate-bg-scrolling-12 border-0 border-solid border-[var(--theme-color-100)] border-opacity-80 bg-checkerboard-45 bg-50 opacity-20"
        data-animation-play-state="running"
      />
    </div>
  );
}
