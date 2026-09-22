import './globals.css'

export const metadata = {
  title: 'Cool Box | Advertising people actually use',
  description: 'Cool Box turns chilled water into a useful, interactive advertising experience for brands, venues and events.',
}

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>
}
