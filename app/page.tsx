'use client';

import { useState } from 'react';

const videos = [
  { src: '/videos/hero-1.mp4', label: 'Highlight Reel' },
  { src: '/videos/hero-2.mp4', label: 'Game Day' },
  { src: '/videos/hero-3.mp4', label: 'Behind the Scenes' },
];

export default function HomePage() {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const currentLabel =
    activeVideoIndex + 1 === 1
      ? 'BALLER LEAGUE'
      : activeVideoIndex + 1 === 2
      ? 'NOA LANG'
      : 'JAMIE GITTENS';

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-white">
      {/* Video background – single video whose src changes with the carousel */}
      <div className="absolute inset-0">
        <video
          key={videos[activeVideoIndex].src} // reload when src changes
          src={videos[activeVideoIndex].src}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* CONTENT LAYER */}
      {/* MOBILE-ONLY: centered bottom text + controls */}
      <div className="relative z-20 flex h-full flex-col justify-end sm:hidden">
        <div className="w-full flex flex-col items-center justify-end text-center px-6 pb-10 gap-4">
          <div className="max-w-xs">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gray-200/80">
              Content • Strategy • Branding
            </p>

            <h1 className="text-2xl font-bold leading-tight">
              <span className="block text-white">Aesthetic Visuals</span>
              <span className="mt-1 block text-gray-100/80 text-sm font-normal">
                Creating impact for players and creatives.
              </span>
            </h1>
          </div>

          {/* Carousel controls directly underneath */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-2">
              {videos.map((video, index) => (
                <button
                  key={video.src}
                  onClick={() => setActiveVideoIndex(index)}
                  className={`h-2 w-7 rounded-full border border-white/60 transition-all ${
                    index === activeVideoIndex ? 'bg-white' : 'bg-white/10'
                  }`}
                  aria-label={`Show video: ${video.label}`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-200/80 tracking-wide">
              {currentLabel}
            </span>
          </div>
        </div>
      </div>

      {/* DESKTOP/TABLET: your original layout, untouched */}
      <div className="relative z-20 hidden h-full flex-col justify-end sm:flex">
        {/* Bottom-left heading block (original) */}
        <div className="flex w-full items-end justify-between px-6 pb-20 sm:px-10 sm:pb-24 md:pb-28">
          <div className="max-w-[90%]">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gray-200/80 sm:text-xs">
              Content • Strategy • Branding
            </p>

            <h1 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="block text-white">Aesthetic Visuals</span>
              <span className="mt-1 block text-gray-100/80 text-sm sm:text-base md:text-lg font-normal">
                Creating impact for players and creatives.
              </span>
            </h1>
          </div>
        </div>

        {/* Carousel controls – original positioning */}
        <div
          className="
            pointer-events-none absolute z-20
            bottom-16 right-6
            sm:bottom-24 sm:left-1/2 sm:right-auto sm:-translate-x-1/2
          "
        >
          <div className="pointer-events-auto flex flex-col items-center gap-2">
            <div className="flex gap-2">
              {videos.map((video, index) => (
                <button
                  key={video.src}
                  onClick={() => setActiveVideoIndex(index)}
                  className={`h-2 w-7 rounded-full border border-white/60 transition-all ${
                    index === activeVideoIndex ? 'bg-white' : 'bg-white/10'
                  }`}
                  aria-label={`Show video: ${video.label}`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-200/80 tracking-wide">
              {currentLabel}
            </span>
          </div>
        </div>

        {/* SOUND ON / SOUND OFF – original */}
        <button
          onClick={() => setIsMuted(prev => !prev)}
          className="
            hidden sm:block
            absolute right-6 sm:right-10
            sm:bottom-24 md:bottom-28
            z-20 text-[10px] sm:text-xs tracking-[0.25em] uppercase
            text-white/80 hover:text-white
          "
          aria-label={isMuted ? 'Enable sound' : 'Mute sound'}
        >
          {isMuted ? 'SOUND OFF' : 'SOUND ON'}
        </button>
      </div>
    </main>
  );
}
