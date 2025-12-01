// app/contact/page.tsx
'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
    enquiry: '',
  });

  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || 'Something went wrong');
      }

      setStatus('success');
      setForm({ name: '', email: '', number: '', enquiry: '' });
    } catch (err: unknown) {
      console.error(err);
      setStatus('error');
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setErrorMessage(message);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 pt-28 pb-24 sm:px-10 lg:px-24 max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="mb-12">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-gray-400">
            Contact
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Let’s work together.
          </h1>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-gray-400">
            Fill out the form or reach out through the details below. We’ll get back to you shortly.
          </p>
        </header>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* LEFT SIDE — Business details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-2">
                Contact Details
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Email: <span className="text-white">contact@thefotogoats.com</span><br />
                Location: <span className="text-white">London, United Kingdom</span>
              </p>
            </div>

            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-2">
                Socials
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Instagram: @thefotogoats<br />
                TikTok: @thefotogoats<br />
              </p>
            </div>

            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-2">
                Working Hours
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Monday – Friday: 9AM – 6PM<br />
                Weekends: Shoot dependent
              </p>
            </div>
          </div>

          {/* RIGHT SIDE — Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-white/30"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-white/30"
              />
            </div>

            {/* Number (optional) */}
            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
                Phone (optional)
              </label>
              <input
                type="text"
                name="number"
                value={form.number}
                onChange={handleChange}
                className="w-full rounded-lg bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-white/30"
              />
            </div>

            {/* Enquiry */}
            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-gray-400 mb-2">
                Enquiry *
              </label>
              <textarea
                name="enquiry"
                value={form.enquiry}
                onChange={handleChange}
                required
                rows={6}
                className="w-full rounded-lg bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-white/30"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-4 inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-white hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <p className="text-xs text-green-400 mt-2">
                Thanks, we&apos;ve got your message. We&apos;ll get back to you as soon as possible.
              </p>
            )}

            {status === 'error' && (
              <p className="text-xs text-red-400 mt-2">
                {errorMessage || 'Something went wrong. Please try again.'}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
