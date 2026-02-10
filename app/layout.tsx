import type { Metadata, Viewport } from 'next';
import '../styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0f1a',
};

export const metadata: Metadata = {
  title: 'Praneeth - AI & Data Science Portfolio',
  description:
    'Portfolio of Praneeth, an AI & Data Science Student building intelligent systems with Python, Machine Learning, and NLP.',
  keywords: 'AI, Data Science, Machine Learning, NLP, Python, Portfolio',
  authors: [{ name: 'Praneeth' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0b0f1a" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-white">{children}</body>
    </html>
  );
}
