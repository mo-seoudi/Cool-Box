import SectionTitle from '../ui/SectionTitle'
import { siteContent } from '../../content/site'

export default function AdvertisingOffer() {
  const { advertisingOffer } = siteContent

  return (
    <section className="offer" id="offer">
      <div className="shell">
        <SectionTitle eyebrow="ADVERTISING OFFER">
          Your space on
          <br />
          <em>Cool Box.</em>
        </SectionTitle>

        <div className="offerGrid">
          <div className="price">
            <small>AD SPACE</small>
            <strong>{advertisingOffer.adSpace}</strong>
            <p>{advertisingOffer.adSpaceDescription}</p>
          </div>

          <div className="offerDetails">
            {advertisingOffer.details.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <p className="ideal">
            <b>Ideal for:</b> {advertisingOffer.idealFor}
          </p>
        </div>
      </div>
    </section>
  )
}
