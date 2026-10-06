import { ArrowRight } from 'lucide-react'
import { siteContent } from '../../content/site'

export default function HeroSection() {
  const { hero } = siteContent

  return (
    <section className="hero" id="top">
      <div className="heroGlow glowOne" />
      <div className="heroGlow glowTwo" />

      <div className="shell heroGrid">
        <div className="heroText">
          <p className="kicker">{hero.kicker}</p>

          <h1>
            {hero.titleStart}
            <br />
            <em>
              {hero.titleEmphasis.split(' ').slice(0, 3).join(' ')}
              <br />
              {hero.titleEmphasis.split(' ').slice(3).join(' ')}
            </em>
          </h1>

          <p className="lead">{hero.description}</p>

          <div className="heroActions">
            <a className="button" href="#what">
              Discover Cool Box <ArrowRight size={17} />
            </a>
            <a className="plain" href="#offer">
              View advertising offer
            </a>
          </div>
        </div>

        <div className="heroComposition">
          <div className="visualHalo" />
          <div className="heroRing ringA" />
          <div className="heroRing ringB" />

          <img className="heroWater waterBack" src="/images/droplets.png" alt="" />
          <img className="heroIce iceBack" src="/images/ice-cubes.png" alt="" />
          <img
            className="heroProduct"
            src="/images/box-bottle.png"
            alt="Cool Box with chilled water bottle"
          />
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
        <div>
          <span>01</span>
          <b>HYDRATION</b>
          <small>Essential water for active participants</small>
        </div>
        <div>
          <span>02</span>
          <b>SAVINGS</b>
          <small>8 redeemable offers from multiple brands</small>
        </div>
        <div>
          <span>03</span>
          <b>SMART ADVERTISING</b>
          <small>Measurable engagement and real results</small>
        </div>
      </div>
    </section>
  )
}
