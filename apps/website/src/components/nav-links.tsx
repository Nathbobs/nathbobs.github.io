'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Me', href: '/about-me' },
];

export function NavLinks() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop nav — pill */}
      <ul className="hidden sm:flex text-sm flex-wrap gap-x-2 border border-zinc-200 px-4 rounded-full shadow-xs hover:shadow-md transition">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link
              className="block text-zinc-500 hover:text-zinc-700 transition-colors font-medium py-2 px-2"
              href={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile nav — hamburger trigger */}
      <div className="sm:hidden">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="text-zinc-500 hover:text-zinc-700 transition-colors p-1"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="19" y2="6" />
            <line x1="3" y1="11" x2="19" y2="11" />
            <line x1="3" y1="16" x2="19" y2="16" />
          </svg>
        </button>

        {open && (
          <div className="fixed inset-0 z-50 bg-white flex flex-col">
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-zinc-500 hover:text-zinc-700 transition-colors p-1"
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="4" y1="4" x2="18" y2="18" />
                  <line x1="18" y1="4" x2="4" y2="18" />
                </svg>
              </button>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="font-medium tracking-tight text-xl"
              >
                Nathaniel Abegunde
              </Link>
              {/* spacer to balance the X button */}
              <div className="w-8" />
            </div>

            {/* Nav items */}
            <nav className="flex flex-col px-6 pt-4">
              {links.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold text-zinc-900 py-5 border-b border-zinc-100 hover:text-zinc-400 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
