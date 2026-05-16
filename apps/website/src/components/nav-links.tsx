'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '~/i18n/navigation';

export function NavLinks() {
  const [open, setOpen] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const links = [
    { label: t('home'), href: '/' },
    { label: t('projects'), href: '/projects' },
    { label: t('resume'), href: '/resume' },
    { label: t('blog'), href: '/blog' },
  ];

  function switchLocale() {
    const next = locale === 'en' ? 'ko' : 'en';
    router.replace(pathname, { locale: next });
  }

  return (
    <>
      {/* Desktop nav — pill */}
      <div className="hidden sm:flex items-center gap-3">
        <ul className="flex text-sm flex-wrap gap-x-2 border border-zinc-200 px-4 rounded-full shadow-xs hover:shadow-md transition">
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
        <button
          onClick={switchLocale}
          className="text-xs font-semibold text-zinc-500 hover:text-zinc-800 transition-colors border border-zinc-200 rounded-full px-3 py-1.5 shadow-xs hover:shadow-md"
        >
          {t('switchTo')}
        </button>
      </div>

      {/* Mobile nav — hamburger trigger */}
      <div className="sm:hidden">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="text-zinc-500 hover:text-zinc-700 transition-colors p-1"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
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
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
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
              <button
                onClick={() => { switchLocale(); setOpen(false); }}
                className="text-2xl font-semibold text-zinc-400 py-5 text-left hover:text-zinc-600 transition-colors"
              >
                {t('switchTo')}
              </button>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
