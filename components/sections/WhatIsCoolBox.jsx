import { Check, Droplets, Ticket, Users } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

export default function WhatIsCoolBox() {
  return (
    <section className="what" id="what">
      <div className="shell">
        <SectionTitle eyebrow="WHAT IS THE “COOL BOX”?">
          Hydration + <em>8 redeemable offers.</em>
        </SectionTitle>

        <div className="whatGrid">
          <div className="conceptCard">
            <div className="conceptVisual">
              <div className="conceptGlow" />
              <img className="conceptWater" src="/images/droplets.png" alt="" />
              <img className="conceptIce" src="/images/ice-cubes.png" alt="" />
              <img
                className="conceptBox"
                src="/images/box-2.png"
                alt="Cool Box advertising panels"
              />
              <img
                className="conceptCoupon conceptCouponA"
                src="/images/coupon-3.png"
                alt="Example removable Cool Box voucher"
              />
              <img
                className="conceptCoupon conceptCouponB"
                src="/images/coupon-1.png"
                alt=""
              />
              <img
                className="conceptCoupon conceptCouponC"
                src="/images/coupon-4.png"
                alt=""
              />
            </div>
          </div>

          <div className="facts">
            <div>
              <Droplets />
              <p>
                <b>Chilled water bottles</b> are placed inside the Cool Box and
                distributed <b>FREE to the audience.</b>
              </p>
            </div>

            <div>
              <Ticket />
              <p>
                The exterior features <b>8 separate ad panels</b>. Each ad is
                designed as a <b>removable voucher coupon.</b>
              </p>
            </div>

            <div>
              <Check />
              <p>
                Consumers can tear off coupons and redeem them for{' '}
                <b>discounts, freebies or offers</b> at the advertiser’s business.
              </p>
            </div>

            <div>
              <Users />
              <p>
                Cool Box delivers <b>brand exposure + direct customer engagement</b>{' '}
                at the same time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
