export default function SectionTitle({ eyebrow, children, white = false }) {
  return (
    <div className={`sectionTitle ${white ? 'white' : ''}`}>
      <span />

      <div>
        <p>{eyebrow}</p>
        <h2>{children}</h2>
      </div>
    </div>
  )
}
