import {ReactNode} from 'react';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import type {Metadata} from 'next';
import ScrollProgress from '@/components/ScrollProgress';
import Providers from '@/components/Providers';

const BASE_URL = 'https://sarenecarepe.rs';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Šarene Čarape — Online Shop | Loznica',
    template: '%s | Šarene Čarape',
  },
  description:
    'Šarene Čarape — jedinstven online shop šarenih čarapa iz Loznice. Prugaste, tematske, cvjetne i sport čarape. Brza dostava širom Srbije.',
  keywords: [
    'šarene čarape',
    'kupovina čarapa online',
    'čarape sa uzorkom',
    'čarape Loznica',
    'poklon čarape',
    'tematske čarape',
    'prugaste čarape',
    'online prodavnica čarapa Srbija',
  ],
  authors: [{name: 'Šarene Čarape', url: BASE_URL}],
  creator: 'Šarene Čarape',
  publisher: 'Šarene Čarape',
  robots: {index: true, follow: true},
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: BASE_URL,
    siteName: 'Šarene Čarape',
    title: 'Šarene Čarape — Online Shop | Loznica',
    description:
      'Jedinstven online shop šarenih čarapa iz Loznice. Prugaste, tematske, cvjetne i sport čarape.',
    images: [{url: '/og-image.jpg', width: 1200, height: 630, alt: 'Šarene Čarape Shop'}],
  },
  alternates: {canonical: BASE_URL},
  icons: {icon: '/favicon.png', apple: '/favicon.png'},
};

export default function RootLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <html
      lang={'sr'}
      className={'scroll-smooth'}
      suppressHydrationWarning>
      <head>
        <script
          type={'application/ld+json'}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Store',
              name: 'Šarene Čarape',
              url: BASE_URL,
              description: 'Online shop šarenih čarapa iz Loznice, Srbija.',
              email: 'hello@sarenecarepe.rs',
              telephone: '+381653580793',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Loznica',
                addressRegion: 'Mačvanski okrug',
                addressCountry: 'RS',
              },
              areaServed: {'@type': 'Country', name: 'Srbija'},
              sameAs: ['https://www.instagram.com/sarenecarepe'],
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={'bg-white'}>
        <Providers>
          <ScrollProgress />
          <Navigation />
          {/* offset top for desktop navbar / bottom for mobile tab bar */}
          <div className={'flex min-h-screen flex-col pb-16 md:pt-16 md:pb-0'}>
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
