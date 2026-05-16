import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '~/i18n/routing';
import { Header } from '~/components/header';
import { NavLinks } from '~/components/nav-links';
import { LunchboxGrid } from '~/lunchbox/core/lunchbox-grid';
import { LunchboxItemLinkGitHub } from '~/lunchbox/prebuilt/lunchbox-item-link-github';
import { LunchboxItemLinkLinkedIn } from '~/lunchbox/prebuilt/lunchbox-item-link-linkedin';
import { LunchboxItemLinkEmail } from '~/lunchbox/prebuilt/lunchbox-item-link-email';
import { LunchboxItemLinkMedium } from '~/lunchbox/prebuilt/lunchbox-item-link-medium';
import { LunchboxItemLinkKaggle } from '~/lunchbox/prebuilt/lunchbox-item-link-kaggle';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  return {
    title: 'Nathaniel Abegunde',
    description: t('bio'),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');

  return (
    <div>
      <Header rightContents={<NavLinks />} />
      <div className="flex flex-col gap-y-12">
        <section className="grid gap-y-4">
          <h2 className="sr-only tracking-tight font-medium text-4xl">About</h2>
          <p className="text-zinc-600 max-w-lg text-pretty">{t('bio')}</p>
        </section>
        <section className="grid gap-y-6">
          <h2 className="tracking-tight font-medium text-xl">{t('findMeOnline')}</h2>
          <LunchboxGrid>
            <LunchboxItemLinkLinkedIn rows={1} cols={4} username="abegundenathaniel" />
            <LunchboxItemLinkGitHub rows={2} cols={4} username="nathbobs" />
            <LunchboxItemLinkEmail
              rows={1}
              cols={4}
              email="aanathaniel@gmail.com"
              subtitle="aanathaniel [at] gmail [dot] com"
            />
            <LunchboxItemLinkKaggle rows={1} cols={4} username="nathbob" />
            <LunchboxItemLinkMedium rows={1} cols={4} username="nathbobs" />
          </LunchboxGrid>
        </section>
      </div>
    </div>
  );
}
