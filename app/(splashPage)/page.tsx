"use client";

import { Logo } from "./logo";

export default function SplashPage() {
  return (
    <main className="relative mb-8 w-full">
      <div className="section-container mt-20 w-full">
        <div className="section-contents mx-auto flex flex-col items-center">
          <Logo />
        </div>
      </div>
    </main>
  );
}
