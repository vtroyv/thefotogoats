// app/work/[slug]/page.tsx
'use client';

import { use } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects, clientToSlug, MediaItem } from '../projects';

type ParamsPromise = Promise<{ slug: string }>;

export default function ProjectDetailPage({ params }: { params: ParamsPromise }) {
  // In Next 15 client components, params is a Promise
  const { slug } = use(params);

  const project = projects.find((p) => clientToSlug(p.client) === slug);
  if (!project) notFound();

  // Always include the original media as the first gallery item
  const baseItem: MediaItem = {
    type: project.type === 'video' ? 'video' : 'image',
    src: project.mediaSrc,
  };

  const gallery: MediaItem[] =
    project.gallery && project.gallery.length > 0
      ? [baseItem, ...project.gallery]
      : [baseItem];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = gallery[activeIndex];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 pt-24 pb-16 sm:px-10 lg:px-24 max-w-6xl mx-auto">
        {/* Label */}
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gray-400">
          Selected Work
        </p>

        {/* Title + meta */}
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            {project.title}
          </h1>
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gray-400">
            {project.client} • {project.location}
          </p>
        </div>

        {/* Main layout */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          {/* LEFT — Main Media */}
          <div className="md:w-1/2">
            {/* MAIN MEDIA BLOCK */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60">
              {activeItem.type === 'image' ? (
                <div className="relative w-full">
                  <Image
                    src={activeItem.src}
                    alt={project.title}
                    width={1600} // maintain aspect ratio
                    height={1067}
                    className="w-full h-auto object-contain"
                    priority={activeIndex === 0}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    unoptimized
                  />
                </div>
              ) : (
                <video
                  src={activeItem.src}
                  className="w-full h-auto"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}
            </div>
          </div>

          {/* RIGHT — Description + Thumbnails */}
          <div className="md:w-1/2 space-y-6">
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-2">
                Overview
              </h2>
              <p className="text-sm sm:text-base text-gray-300">
                {project.description}
              </p>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-6 text-xs sm:text-sm text-gray-300">
              <div>
                <p className="uppercase tracking-[0.25em] text-gray-500 text-[10px] mb-1">
                  Client
                </p>
                <p>{project.client}</p>
              </div>

              <div>
                <p className="uppercase tracking-[0.25em] text-gray-500 text-[10px] mb-1">
                  Location
                </p>
                <p>{project.location}</p>
              </div>

              <div>
                <p className="uppercase tracking-[0.25em] text-gray-500 text-[10px] mb-1">
                  Type
                </p>
                <p>
                  {project.type === 'video'
                    ? 'Video'
                    : project.type === 'image'
                    ? 'Stills'
                    : 'Audio'}
                </p>
              </div>
            </div>

            {/* THUMBNAILS MOVED HERE */}
            {gallery.length > 1 && (
              <div>
                <h3 className="mb-2 text-[10px] uppercase tracking-[0.25em] text-gray-500">
                  Gallery
                </h3>
                <div className="flex flex-wrap gap-3">
                  {gallery.map((item, index) => (
                    <button
                      key={`${item.src}-${index}`}
                      onClick={() => setActiveIndex(index)}
                      className={`relative h-16 w-24 overflow-hidden rounded-xl border transition-all ${
                        index === activeIndex
                          ? 'border-white'
                          : 'border-white/20 hover:border-white/40'
                      }`}
                    >
                      {item.type === 'image' ? (
                        <Image
                          src={item.src}
                          alt=""
                          width={300}
                          height={200}
                          className="h-full w-full object-cover"
                          unoptimized
                        />
                      ) : (
                        <video
                          src={item.src}
                          className="h-full w-full object-cover"
                          muted
                          loop
                          playsInline
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
