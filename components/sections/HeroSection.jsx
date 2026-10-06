import { ArrowRight } from 'lucide-react'
import { siteContent } from '../../content/site'

export default function HeroSection() {
  const { hero, heroHighlights } = siteContent

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
              {hero.titleEmphasisLine1}
              <br />
              {hero.titleEmphasisLine2}
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

          <img className="heroWater waterBack" src={hero.images.droplets} alt="" />
          <img className="heroIce iceBack" src={hero.images.ice} alt="" />
          <img
            className="heroProduct"
            src={hero.images.product}
            alt="Cool Box with chilled water bottle"
          />
          <img className="heroCoupon couponOne" src={hero.images.coupons[0]} alt="" />
          <img className="heroCoupon couponTwo" src={hero.images.coupons[1]} alt="" />
          <img className="heroCoupon couponThree" src={hero.images.coupons[2]} alt="" />
          <img className="heroCoupon couponFour" src={hero.images.coupons[3]} alt="" />
          <img className="heroIce iceFront" src={hero.images.ice} alt="" />

          <span className="bubble bubble1" />
          <span className="bubble bubble2" />
          <span className="bubble bubble3" />
        </div>
      </div>

      <div className="shell heroValueStrip">
        {heroHighlights.map((item) => (
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
