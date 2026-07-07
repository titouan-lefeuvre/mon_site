import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'les émotions et l\'IA',
  description: 'Une application Next.js moderne et performante',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}