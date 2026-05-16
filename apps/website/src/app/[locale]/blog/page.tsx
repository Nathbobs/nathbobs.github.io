import Link from 'next/link';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { compareDesc } from 'date-fns';
import { allPosts } from 'content-collections';
import { routing } from '~/i18n/routing';
import { Header } from '~/components/header';
import { NavLinks } from '~/components/nav-links';
import { Timestamp } from '~/components/timestamp';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'nav' });
  return {
    title: `${t('blog')} | Nathaniel Abegunde`,
    description: 'Blog posts by Nathaniel Abegunde',
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function BlogIndexPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <>
      <Header rightContents={<NavLinks />} />
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li className="flex gap-x-4 justify-between md:items-center" key={post.url}>
            <Link href={`/${locale}/blog/${post.slug}`} className="hover:underline">
              <h2 className="text-zinc-900 tracking-tight font-medium">{post.title}</h2>
            </Link>
            {post.date && (
              <p className="text-zinc-700 text-sm whitespace-nowrap">
                <Timestamp date={post.date} />
              </p>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
