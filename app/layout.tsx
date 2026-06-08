import { Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chris Bradshaw | Anthropic Application',
  description: 'AI Transformation Leader and Applied AI Architect candidate introduction for Anthropic.',
  openGraph: {
    title: 'Chris Bradshaw | Anthropic Application',
    description: 'AI Transformation Leader and Applied AI Architect candidate introduction for Anthropic.',
    url: 'https://anthropic.chrisbradshaw.ai',
    siteName: 'Chris Bradshaw',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chris Bradshaw | Anthropic Application',
    description: 'AI Transformation Leader and Applied AI Architect candidate introduction for Anthropic.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
