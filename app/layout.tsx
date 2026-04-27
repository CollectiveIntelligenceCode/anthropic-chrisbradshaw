import { Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chris Bradshaw - CV | Applied AI Leader',
  description: 'Professional CV for Chris Bradshaw: Applied AI Leader, Startup Builder, and Technical Team Architect. Manager, Applied AI experience across EMEA.',
  openGraph: {
    title: 'Chris Bradshaw - CV',
    description: 'Applied AI Leader | Startup Builder | Technical Team Architect',
    url: 'https://cv.chrisbradshaw.ai',
    siteName: 'Chris Bradshaw CV',
    // NOTE: OG image to be added later - requires 1200x630px image
    // Remove images array for now to avoid 404 errors
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chris Bradshaw - CV',
    description: 'Applied AI Leader | Startup Builder | Technical Team Architect',
    // OG image to be added later
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
