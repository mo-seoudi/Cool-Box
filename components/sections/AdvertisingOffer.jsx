import SectionTitle from '../ui/SectionTitle'

export default function AdvertisingOffer() {
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
            <strong>6 × 10 cm</strong>
            <p>Dedicated removable voucher panel</p>
          </div>

          <div className="offerDetails">
            <div>
              <strong>4,000</strong>
              <span>boxes distributed per campaign</span>
            </div>
            <div>
              <strong>8</strong>
              <span>coupon ads per box</span>
            </div>
            <div>
              <strong>4</strong>
              <span>faces available for strip ad banners</span>
            </div>
            <div>
              <strong>2</strong>
              <span>strip banners — top & bottom</span>
            </div>
          </div>

          <p className="ideal">
            <b>Ideal for:</b> restaurants, cafés, sports stores and lifestyle
            venues aiming to boost visits.
          </p>
        </div>
      </div>
    </section>
  )
}
