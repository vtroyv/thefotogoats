// app/case-studies/page.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 pt-24 pb-16 sm:px-10 lg:px-24">
        {/* Intro */}
        <header className="mb-12 sm:mb-16">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gray-400">
            Case Studies
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Bringing community, identity, and football into one frame.
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-gray-400">
            The modern player needs both a game and a brand. You handle the first. We’ll handle the second.
            Here are two of the players we work closely with to achieve this
          </p>
        </header>

        <div className="space-y-16 sm:space-y-20">
          {/* Case Study 1 */}
          <article className="flex flex-col gap-8 md:flex-row md:items-center">
            {/* Mockup / media */}
            <div className="md:w-1/2">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60">
                <div className="relative h-72 w-full sm:h-80 md:h-96">
                  <Image
                    src="/case-studies/case-1.jpg"
                    alt="Case study 1 mockup"
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
                Ridle Baku
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">
                Building a visual language for a new-era competition.
              </h2>

              <p className="mt-4 text-sm sm:text-base text-gray-300">
                We positioned Ridle for lifestyle partnerships that reflect his personality and extend his brand beyond football
              </p>

              <div className="mt-4 grid grid-cols-2 gap-4 text-[11px] sm:text-xs text-gray-400">
                <div>
                  <p className="uppercase tracking-[0.25em] text-gray-500">Social Growth</p>
                  <p className="mt-1">
                    674K+ instagram views
                  </p>
                  <p className="mt-1">
                    Growing audience by more than 40% in 2 weeks
                  </p>
                </div>
                <div>
                  <p className="uppercase tracking-[0.25em] text-gray-500">Content Creation</p>
                  <p className="mt-1">
                    Direction, shoot, edit, colour.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Case Study 2 */}
          <article className="flex flex-col-reverse gap-8 md:flex-row md:items-center">
            {/* Text */}
            <div className="md:w-1/2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-gray-400">
                Jamie Gittens
              </p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">
                Turning photos into engagement.
              </h2>

              <p className="mt-4 text-sm sm:text-base text-gray-300">
                We built and launched Jamie&apos;s Tiktok strategy, growing his audience from 784 to 57.8K+ followers and boosting engagement across every video/
              </p>

              <div className="mt-4 grid grid-cols-2 gap-4 text-[11px] sm:text-xs text-gray-400">
                <div>
                  <p className="uppercase tracking-[0.25em] text-gray-500">Content Creation</p>
                  <p className="mt-1">
                    Lifestyle, consistent Visuals, engagement.
                  </p>
                </div>
                <div>
                  <p className="uppercase tracking-[0.25em] text-gray-500">Brand Positioning</p>
                  <p className="mt-1">
                    Verification, Credibility, Opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Mockup / media */}
            <div className="md:w-1/2">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60">
                <div className="relative h-72 w-full sm:h-80 md:h-96">
                  <Image
                    src="/case-studies/case-2.jpg"
                    alt="Case study 2 mockup"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Bottom text + CTA */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="max-w-2xl text-sm sm:text-base text-gray-300">
            These are a handful of examples. If you want to see something closer to your club,
            league, or brand, we can pull a tailored selection and walk you through the process end to end.
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
