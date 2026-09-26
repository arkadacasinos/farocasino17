import type { Metadata, Viewport } from 'next'
import './globals.css'
import './faro-casino.css'

const SITE_URL = 'https://farocasino17.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Faro Casino — официальный сайт, зеркало рабочее, играть онлайн в казино',
    template: '%s | Faro Casino',
  },
  description:
    'Faro Casino — официальный сайт для игры онлайн. Зеркало рабочее, бонусы 100% + 200 FS, слоты, рулетка, live-дилеры. Играть в Faro Casino на ПК и мобильном.',
  keywords: [
    'faro casino',
    'faro casino зеркало',
    'faro casino играть',
    'faro casino официальный',
    'faro casino официальный сайт',
    'faro казино',
    'фарo казино',
    'фарo казино зеркало',
    'фарo казино зеркало рабочее',
    'фарo казино играть',
    'фарo казино онлайн',
    'фарo казино официальный',
    'фарo казино официальный сайт',
  ],
  authors: [{ name: 'Faro Casino' }],
  creator: 'Faro Casino',
  publisher: 'Faro Casino',
  applicationName: 'Faro Casino',
  generator: 'Next.js',
  alternates: {
    canonical: SITE_URL + '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL + '/',
    siteName: 'Faro Casino',
    title: 'Faro Casino — официальный сайт, зеркало рабочее, играть онлайн',
    description:
      'Faro Casino — официальный сайт для игры онлайн. Зеркало рабочее, бонусы, слоты, рулетка, live-дилеры.',
    images: [
      {
        url: '/hero-art.png',
        width: 1200,
        height: 630,
        alt: 'Faro Casino — официальный сайт для игры онлайн',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faro Casino — официальный сайт, зеркало рабочее, играть онлайн',
    description:
      'Faro Casino — официальный сайт для игры онлайн. Зеркало рабочее, бонусы, слоты, рулетка, live-дилеры.',
    images: ['/hero-art.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  other: {
    'theme-color': '#0b1220',
    'msapplication-TileColor': '#0b1220',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1220' },
  ],
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Faro Casino" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Faro Casino" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="3 days" />
        <meta name="language" content="Russian" />
        <meta name="geo.region" content="RU" />
        <meta name="yandex-verification" content="" />
        <meta name="google-site-verification" content="" />
        <meta name="msvalidate.01" content="" />
        <meta property="og:site_name" content="Faro Casino" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:locale:alternate" content="ru_RU" />
        <meta property="og:title" content="Faro Casino — официальный сайт, зеркало рабочее, играть онлайн" />
        <meta property="og:description" content="Faro Casino — официальный сайт для игры онлайн. Зеркало рабочее, бонусы, слоты, рулетка, live-дилеры." />
        <meta property="og:url" content={SITE_URL + '/'} />
        <meta property="og:image" content={SITE_URL + '/hero-art.png'} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Faro Casino — официальный сайт для игры онлайн" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Faro Casino — официальный сайт, зеркало рабочее, играть онлайн" />
        <meta name="twitter:description" content="Faro Casino — официальный сайт для игры онлайн. Зеркало рабочее, бонусы, слоты, рулетка, live-дилеры." />
        <meta name="twitter:image" content={SITE_URL + '/hero-art.png'} />
        <link rel="canonical" href={SITE_URL + '/'} />
        <link rel="alternate" hrefLang="ru-RU" href={SITE_URL + '/'} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL + '/'} />
        <link rel="icon" href="/favicon.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon.png" sizes="16x16" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
