import { Instagram, Mail, Phone } from 'lucide-react'

/*
  EDIT THIS SECTION
  -----------------
  Contact details and visible contact text are kept here.
*/

export default function ContactSection() {
  const phoneDisplay = '+961 3 152 071'
  const phoneLink = '009613152071'
  const email = 'wael@sparxme.com'
  const instagram = 'https://www.instagram.com/cool_box.official/'

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
          Essential water, 8 redeemable offers from multiple brands, measurable engagement and real results.
        </p>

        <div className="contactActions">
          <div className="contactMethod">
            <a className="contactIcon" href={`tel:${phoneLink}`} aria-label="Call Cool Box">
              <Phone size={19} />
            </a>
            <span><strong>{phoneDisplay}</strong></span>
          </div>

          <div className="contactMethod">
            <a className="contactIcon" href={`mailto:${email}`} aria-label="Email Cool Box">
              <Mail size={19} />
            </a>
            <span><strong>{email}</strong></span>
          </div>
        </div>

        <div className="socialFollow">
          <span>FOLLOW US</span>
          <a href={instagram} target="_blank" rel="noreferrer" aria-label="Follow Cool Box on Instagram">
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
