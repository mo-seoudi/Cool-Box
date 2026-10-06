import SectionTitle from '../ui/SectionTitle'
import { siteContent } from '../../content/site'

export default function WhyCoolBox() {
  return (
    <section className="why" id="why">
      <div className="shell">
        <SectionTitle eyebrow="WHY COOL BOX?" white>
          Zero waste.
          <br />
          <em>Maximum impact.</em>
        </SectionTitle>

        <div className="reasonGrid">
          {siteContent.reasons.map((reason, index) => (
            <article key={reason.title}>
              <strong>0{index + 1}</strong>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
