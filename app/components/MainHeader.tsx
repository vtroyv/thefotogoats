// components/MainHeader.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/case-studies', label: 'Case Studies' }, 
    { href: '/services', label: 'Services' },
    // { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top header (fixed so it overlays the hero video too) */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 sm:px-10">
   {/* Logo */}
<Link href="/" className="flex items-center gap-3">
  <div className="flex h-10 w-10 items-center justify-center rounded-full">
    <Image
      src="/images/logo.png"
      alt="FOTO GOATS Logo"
      width={200}
      height={200}
      className="w-full h-auto opacity-90"
    />
  </div>

  <span className="text-sm font-semibold uppercase text-white tracking-[0.25em]">
    FOTO GOATS
  </span>
</Link>


        {/* Hamburger (no circle, just 3 lines) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex flex-col justify-center gap-1.5 cursor-pointer"
          aria-label="Open navigation menu"
        >
          <span className="block h-0.5 w-6 sm:w-7 bg-white rounded" />
          <span className="block h-0.5 w-6 sm:w-7 bg-white rounded" />
          <span className="block h-0.5 w-6 sm:w-7 bg-white rounded" />
        </button>
      </header>

      {/* Dark overlay when menu open */}
      {menuOpen && (
        <button
          aria-label="Close menu"
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar navigation */}
   <aside
  className={`fixed inset-y-0 right-0 z-40 w-64 max-w-[80%] bg-black/90 px-6 py-8 shadow-2xl backdrop-blur-md transition-transform duration-300 ${
    menuOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>
  <div className="mb-8 flex items-center justify-between">
    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-300">
      Menu
    </span>
    <button
      onClick={() => setMenuOpen(false)}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-sm text-white"
    >
      ✕
    </button>
  </div>

  {/* NAV LINKS */}
  <nav className="flex flex-col gap-4 text-lg font-medium">
    {navItems.map((item) => {
      const active = pathname === item.href;
      return (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => setMenuOpen(false)}
          className={`hover:text-gray-300 ${
            active ? 'text-white' : 'text-gray-200'
          }`}
        >
          {item.label}
        </Link>
      );
    })}
  </nav>

  {/* BOTTOM-CENTER IMAGE */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 opacity-80">
    {/* Placeholder — replace with your actual logo or artwork */}
    <div className="h-32 w-full bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-[10px] uppercase tracking-widest text-gray-400">
      <Image 
  src="/images/sidebar-image.jpg" 
  alt="Sidebar Art" 
  width={200}
  height={200}
  className="w-full h-auto opacity-90"
/>
    </div>
  </div>
</aside>

    </>
  );
}
