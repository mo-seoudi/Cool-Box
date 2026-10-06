export default function Logo({ footer = false }) {
  return (
    <a className={`officialLogo ${footer ? 'footerLogo' : ''}`} href="#top">
      <img
        src="/images/cool-boxpng.png"
        alt="Cool Box — Stay cool. Save more"
      />
    </a>
  )
}
