import Link from 'next/link';

const links = [
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Resume',
    href: '/resume',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'About Me',
    href: '/about-me',
  },
];

export function NavLinks() {
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

      {/* Mobile nav — breadcrumb */}
      <nav className="flex sm:hidden items-center gap-x-1 text-sm text-zinc-500">
        {links.map(({ label, href }, i) => (
          <span key={href} className="flex items-center gap-x-1">
            {i > 0 && <span className="text-zinc-300">/</span>}
            <Link
              className="font-medium hover:text-zinc-700 transition-colors"
              href={href}
            >
              {label}
            </Link>
          </span>
        ))}
      </nav>
    </>
  );
}
