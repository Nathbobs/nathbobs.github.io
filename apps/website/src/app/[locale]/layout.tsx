import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '~/i18n/routing';
import { Container } from '~/components/container';
import { Footer } from '~/components/footer';
import '../../styles/globals.css';

export const metadata: Metadata = {
  title: 'Nathaniel Abegunde',
  description: 'Software Engineer, experienced in building Data and Backend Systems.',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <Container>
            {children}
            <Footer />
          </Container>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
