import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileMenu from '@/components/layout/MobileMenu'
import ScrollTop from '@/components/ui/ScrollTop'
import SettingsColor from '@/components/ui/SettingsColor'
import RouteReinit from '@/components/RouteReinit'
import ScriptSequencer from '@/components/ScriptSequencer'

export const metadata: Metadata = {
  title: 'SwiftBuild - AI Agency',
  description: 'AI-Driven Agency. Your AI Sprint Team on Demand.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-US">
      <head>
        <link rel="shortcut icon" href="/assets/images/logo/favicon.svg" />
        <link rel="apple-touch-icon-precomposed" href="/assets/images/logo/favicon.svg" />
        {/* Fonts & Icons */}
        <link rel="stylesheet" href="/assets/fonts/fonts.css" />
        <link rel="stylesheet" href="/assets/icon/icomoon/style.css" />
        {/* Vendor CSS */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/slick.theme.css" />
        {/* Main stylesheet */}
        <link rel="stylesheet" href="/assets/css/styles.css" />
        {/* jQuery — must load synchronously before everything else */}
        <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
      </head>
      <body>
        <ScrollTop />
        <main id="wrapper">
          <Header />
          {children}
          <Footer />
        </main>
        <MobileMenu />
        <SettingsColor />
        <RouteReinit />
        <ScriptSequencer />
      </body>
    </html>
  )
}
