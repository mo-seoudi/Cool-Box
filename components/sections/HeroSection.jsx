import { ArrowRight } from 'lucide-react'

/*
  EDIT THIS SECTION
  -----------------
  All visible Hero text and image paths are kept here.
*/

const highlights = [
  { number: '01', title: 'HYDRATION', description: 'Essential water for active participants' },
  { number: '02', title: 'SAVINGS', description: '8 redeemable offers from multiple brands' },
  { number: '03', title: 'SMART ADVERTISING', description: 'Measurable engagement and real results' },
]

export default function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="heroGlow glowOne" />
      <div className="heroGlow glowTwo" />

      <div className="shell heroGrid">
        <div className="heroText">
          <p className="kicker">AN INNOVATIVE MARKETING & ENGAGEMENT CONCEPT</p>
          <h1>
            Smart advertising
            <br />
            <em>
              that moves with
              <br />
              your audience.
            </em>
          </h1>
          <p className="lead">
            Cool Box delivers a fresh approach to connecting with consumers — combining
            hydration, redeemable offers and smart advertising in one physical experience.
          </p>
          <div className="heroActions">
            <a className="button" href="#what">Discover Cool Box <ArrowRight size={17} /></a>
            <a className="plain" href="#offer">View advertising offer</a>
          </div>
        </div>

        <div className="heroComposition">
          <div className="visualHalo" />
          <div className="heroRing ringA" />
          <div className="heroRing ringB" />
          <img className="heroWater waterBack" src="/images/droplets.png" alt="" />
          <img className="heroIce iceBack" src="/images/ice-cubes.png" alt="" />
          <img className="heroProduct" src="/images/box-bottle.png" alt="Cool Box with chilled water bottle" />
          <img className="heroCoupon couponOne" src="/images/coupon-1.png" alt="" />
          <img className="heroCoupon couponTwo" src="/images/coupon-2.png" alt="" />
          <img className="heroCoupon couponThree" src="/images/coupon-3.png" alt="" />
          <img className="heroCoupon couponFour" src="/images/coupon-4.png" alt="" />
          <img className="heroIce iceFront" src="/images/ice-cubes.png" alt="" />
          <span className="bubble bubble1" />
          <span className="bubble bubble2" />
          <span className="bubble bubble3" />
        </div>
      </div>

      <div className="shell heroValueStrip">
        {highlights.map((item) => (
          <div key={item.number}>
            <span>{item.number}</span>
            <b>{item.title}</b>
            <small>{item.description}</small>
          </div>
        ))}
      </div>
    </section>
  )
}
