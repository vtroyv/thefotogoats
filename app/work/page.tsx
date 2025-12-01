// app/work/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { projects, Project, MediaType, clientToSlug } from './projects';

import Image from 'next/image';

function MediaFront({ project }: { project: Project }) {
  if (project.type === 'video') {
    return (
      <video
        src={project.mediaSrc}
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
    );
  }

  if (project.type === 'image') {
    return (
      <Image
        src={project.mediaSrc}
        alt={project.title}
        fill
        className="object-cover"
      />
    );
  }

  // Audio card front – simple graphic
  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
      <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-zinc-300">
        <span className="h-px w-5 bg-zinc-500" />
        <span>Audio</span>
        <span className="h-px w-5 bg-zinc-500" />
      </div>
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-500 text-xs text-zinc-100">
        ▶
      </span>
    </div>
  );
}

export default function WorkPage() {
  const [labelVisible, setLabelVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLabelVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="pt-24 pb-8 px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Thin strip at top with SELECTED WORK */}
        <div className="mb-4 md:mb-6">
          <p
            className={`text-[10px] font-semibold uppercase tracking-[0.35em] text-gray-400
            transition-all duration-700 ease-out
            ${labelVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
          `}
          >
            Selected Work
          </p>
        </div>

        {/* Full-width-ish grid */}
        <div className="grid grid-cols-2 gap-[2px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {projects.map((project) => {
            const slug = clientToSlug(project.client);

            return (
              <Link
                key={project.id}
                href={`/work/${slug}`}
                className="card-3d group aspect-square block"
              >
                <div className="card-inner relative h-full w-full rounded-xl bg-zinc-900/60 shadow-lg">
                  {/* FRONT */}
                  <div className="card-face absolute inset-0 overflow-hidden rounded-xl">
                    <MediaFront project={project} />
                  </div>

                  {/* BACK */}
                  <div className="card-face card-back absolute inset-0 flex flex-col justify-between rounded-xl bg-zinc-950 px-4 py-4">
                    <div className="space-y-2">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
                        {project.client}
                      </p>
                      <h2 className="text-sm font-semibold sm:text-base">
                        {project.title}
                      </h2>
                      <p className="text-[11px] text-gray-300 sm:text-xs">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      <span>{project.location}</span>
                      <span>
                        {project.type === 'video'
                          ? 'Video'
                          : project.type === 'image'
                          ? 'Stills'
                          : 'Audio'}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
