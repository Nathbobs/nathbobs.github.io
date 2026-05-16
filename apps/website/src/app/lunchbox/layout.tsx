import type { ReactNode } from 'react';
import '../../styles/globals.css';

export default function LunchboxLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
