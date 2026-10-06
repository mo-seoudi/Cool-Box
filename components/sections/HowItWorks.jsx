import { QrCode, Ticket, Users } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

export default function HowItWorks() {
  return (
    <section className="ctaFlow">
      <div className="shell">
        <SectionTitle eyebrow="FROM EXPOSURE TO ACTION">
          Awareness → Interaction → <em>Store Visit</em>
        </SectionTitle>

        <div className="flow">
          <div>
            <QrCode />
            <h3>Sponsors Place Offers</h3>
            <p>Brands add redeemable vouchers to the Cool Box.</p>
          </div>

          <i />

          <div>
            <Ticket />
            <h3>Box to Attendees</h3>
            <p>
              Handed directly to engaged participants at events and active
              environments.
            </p>
          </div>

          <i />

          <div>
            <Users />
            <h3>Brands Track Engagement</h3>
            <p>Real data on redemptions and store visits.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
