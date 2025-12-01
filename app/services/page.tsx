// app/services/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 pt-24 pb-16 sm:px-10 lg:px-24">
        {/* Page intro */}
        <header className="mb-12 sm:mb-16">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gray-400">
            Services
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Where Content Meets Culture
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-gray-400">
            Everyone focuses on your performance, but few help you build the story behind it. 
            We manage your online presence like a brand so every moment, on and off the pitch, builds your fanbase, attracts brands and shapes your legacy.
          </p>
        </header>

        <div className="space-y-16 sm:space-y-20">
          {/* ROW 1 – media left, text right */}
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            {/* Media */}
            <div className="md:w-1/2">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60">
                <div className="relative h-72 w-full sm:h-80 md:h-96">
                  <Image
                    src="/services/service-1.jpg"
                    alt="Service 1 placeholder"
                    fill
                    className="object-cover"
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="md:w-1/2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gray-400">
                Service One
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">
                Social Media Management
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-300">
                Strategy, content, scheduling, captions and analytics.
              </p>
            </div>
          </div>

          {/* ROW 2 – text left, media right */}
          <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center">
            {/* Text */}
            <div className="md:w-1/2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gray-400">
                Service Two
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">
                Content Production
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-300">
                Filming, editing, creative direction, travel shoots and storytelling.
              </p>
            </div>

            {/* Media */}
            <div className="md:w-1/2">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60">
                <video
                  src="/services/service-2.mp4"
                  className="h-72 w-full object-cover sm:h-80 md:h-96"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>

          {/* ROW 3 – media left, text right again */}
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            {/* Media */}
            <div className="md:w-1/2">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60">
                <div className="relative h-72 w-full sm:h-80 md:h-96">
                  <Image
                    src="/services/service-3.jpg"
                    alt="Service 3 placeholder"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="md:w-1/2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gray-400">
                Service Three
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">
                Brand Partnerships
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-300">
                Deal sourcing, negoiations, campaign management.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom text + CTA */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="max-w-2xl text-sm sm:text-base text-gray-300">
            Players choose us because we understand football culture. The pressue, the lifestyle and power of perception.
            We don&apos;t just make content, we shape how the world sees you. 
          </p>
          <br />
          <p className="max-w-2xl text-sm sm:text-base text-gray-300">
            Every club, player, and brand has a different story. These are the starting points,
            not the limits. If you have something specific in mind, we can build a package around it.
          </p>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-white hover:bg-white hover:text-black transition-colors"
          >
            Get in contact
          </Link>
        </div>
      </section>
    </main>
  );
}
