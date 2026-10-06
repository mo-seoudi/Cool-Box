import { Instagram, Mail, Phone } from 'lucide-react'
import { siteContent } from '../../content/site'

export default function ContactSection() {
  const { contact } = siteContent

  return (
    <section className="contact" id="contact">
      <div className="shell">
        <p>BRING COOL BOX TO YOUR NEXT EVENT</p>

        <h2>
          Hydration. Savings.
          <br />
          <em>Smart advertising.</em>
        </h2>

        <p className="contactLead">
          Essential water, 8 redeemable offers from multiple brands, measurable
          engagement and real results.
        </p>

        <div className="contactActions">
          <div className="contactMethod">
            <a
              className="contactIcon"
              href={`tel:${contact.phoneLink}`}
              aria-label="Call Cool Box"
            >
              <Phone size={19} />
            </a>
            <span>
              <strong>{contact.phoneDisplay}</strong>
            </span>
          </div>

          <div className="contactMethod">
            <a
              className="contactIcon"
              href={`mailto:${contact.email}`}
              aria-label="Email Cool Box"
            >
              <Mail size={19} />
            </a>
            <span>
              <strong>{contact.email}</strong>
            </span>
          </div>
        </div>

        <div className="socialFollow">
          <span>FOLLOW US</span>
          <a
            href={contact.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Follow Cool Box on Instagram"
          >
            <Instagram size={22} />
          </a>
        </div>

        <div className="sparx">
          <img src="/images/sparx-logo.png" alt="SPARX Media Solutions" />
        </div>
      </div>
    </section>
  )
}
