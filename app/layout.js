import './globals.css'
import './mobile.css'
import './visual-polish.css'

export const metadata = {
  title: 'Cool Box | Advertising people actually use',
  description: 'Cool Box turns chilled water into a useful, interactive advertising experience for brands, venues and events.',
  icons: {
    icon: [
      { url: '/images/favicon/favicon.ico' },
      { url: '/images/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/images/favicon/apple-touch-icon.png',
  },
  manifest: '/images/favicon/site.webmanifest',
}

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>
}
