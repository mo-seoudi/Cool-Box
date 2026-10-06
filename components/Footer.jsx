import Logo from './Logo'

export default function Footer() {
  return (
    <footer>
      <div className="shell">
        <Logo footer />
        <p>© {new Date().getFullYear()} Cool Box · SPARX Media Solutions</p>
      </div>
    </footer>
  )
}
