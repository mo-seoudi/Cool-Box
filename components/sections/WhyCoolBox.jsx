import SectionTitle from '../ui/SectionTitle'

/*
  EDIT THIS SECTION
  -----------------
  Change the reasons below to update the visible cards.
*/

const reasons = [
  { title: '100% Hand-to-Hand Distribution', description: 'Every box reaches an engaged attendee who will use it.' },
  { title: 'No Wasted Impressions', description: 'Unlike flyers or banners, every unit drives measurable action.' },
  { title: 'High-Value Active Audience', description: 'Target participants who are already engaged and motivated.' },
  { title: 'Offers That Get Redeemed', description: 'Detachable vouchers drive actual store visits and conversions.' },
  { title: 'Utility That Drives Brand Recall', description: "People don't throw it away. They use it." },
]

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
          {reasons.map((reason, index) => (
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
