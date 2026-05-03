import '../styles/globals.css';
import type { Metadata } from 'next';
import { Container } from '~/components/container';
import { Footer } from '~/components/footer';

export const metadata: Metadata = {
  title: 'Nathaniel Abegunde',
  description:
    'Software Engineer, experienced in building Data and Backend Systems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Container>
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
