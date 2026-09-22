'use client'

import { ArrowRight, Droplets, Gift, MapPin, QrCode, Target, Ticket, Users } from 'lucide-react'

const steps = [
  { n:'01', title:'A useful product', text:'Chilled water is offered free to people where they are already active, gathering or attending.' },
  { n:'02', title:'Brands become part of it', text:'The Cool Box carries branded advertising and detachable offers designed to invite interaction.' },
  { n:'03', title:'People take action', text:'Offers can lead people to a store, a social page, a QR experience or another clear call to action.' },
]

const environments = ['Sports & Padel','Events','Exhibitions','Universities','Festivals','Corporate Gatherings']

export default function Home() {
  return <main>
    <header className="nav shell">
      <a className="brand" href="#top"><span>COOL</span><b>BOX</b></a>
      <nav><a href="#concept">The Concept</a><a href="#advertisers">For Brands</a><a href="#places">Where We Go</a><a href="#about">About</a></nav>
      <a className="button small" href="#contact">Work with us <ArrowRight size={16}/></a>
    </header>

    <section className="hero" id="top">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span></span> MEDIA THAT MOVES WITH YOUR AUDIENCE</div>
          <h1>Advertising<br/>people actually <em>use.</em></h1>
          <p>Cool Box turns a simple moment of refreshment into a physical brand experience — combining chilled water, advertising and detachable offers in one memorable format.</p>
          <div className="actions"><a className="button" href="#concept">Discover Cool Box <ArrowRight size={18}/></a><a className="text-link" href="#advertisers">I’m an advertiser <ArrowRight size={16}/></a></div>
          <div className="micro"><div><strong>8</strong><span>detachable offer positions</span></div><div><strong>1</strong><span>useful physical touchpoint</span></div><div><strong>∞</strong><span>ways to engage</span></div></div>
        </div>
        <div className="hero-art" aria-label="Cool Box product illustration">
          <div className="halo"></div>
          <div className="box3d">
            <div className="lid"><span>STAY COOL.</span></div>
            <div className="face">
              <div className="cbmark">COOL<br/><b>BOX</b></div>
              <div className="water"><Droplets size={19}/> CHILLED WATER INSIDE</div>
              <div className="coupon-grid"><span>BRAND</span><span>OFFER</span><span>SCAN</span><span>SAVE</span></div>
            </div>
            <div className="side"><span>YOUR BRAND</span><span>YOUR OFFER</span><span>YOUR MOMENT</span></div>
          </div>
          <div className="float-card fc1"><Gift size={18}/><span><b>Detachable offers</b>People keep what matters</span></div>
          <div className="float-card fc2"><QrCode size={18}/><span><b>Trackable action</b>Connect print to digital</span></div>
        </div>
      </div>
      <div className="scroll-note">SCROLL TO EXPLORE <span>↓</span></div>
    </section>

    <section className="statement" id="concept"><div className="shell narrow"><div className="eyebrow light"><span></span> THE IDEA</div><h2>Not another ad.<br/>A <em>useful</em> brand moment.</h2><p>People are surrounded by advertising. Cool Box approaches them differently: give them something they want first, then give brands a focused space to be discovered.</p></div></section>

    <section className="how"><div className="shell"><div className="section-head"><div><div className="eyebrow"><span></span> HOW IT WORKS</div><h2>From refreshment<br/>to <em>response.</em></h2></div><p>The Cool Box is designed to move naturally from physical exposure to real interaction.</p></div><div className="steps">{steps.map(s=><article key={s.n}><div className="stepnum">{s.n}</div><div className="stepicon">{s.n==='01'?<Droplets/>:s.n==='02'?<Ticket/>:<Target/>}</div><h3>{s.title}</h3><p>{s.text}</p></article>)}</div></div></section>

    <section className="brands" id="advertisers"><div className="shell brand-grid"><div className="visual-panel"><div className="offer-card"><small>DETACH • KEEP • REDEEM</small><b>YOUR<br/>OFFER</b><div className="fakeqr">▦</div><span>Make your next customer interaction tangible.</span></div><div className="circletext">COOL BOX • STAY COOL • SAVE MORE • </div></div><div className="brand-copy"><div className="eyebrow light"><span></span> FOR ADVERTISERS</div><h2>Be present when<br/>attention is <em>real.</em></h2><p>Cool Box gives brands a physical place in the customer experience. Each campaign can combine visibility with a direct reason to act.</p><div className="features"><div><QrCode/><span><b>Connect physical to digital</b>Use QR-led calls to action and campaign destinations.</span></div><div><Gift/><span><b>Offers worth keeping</b>Detachable panels let people take an offer with them.</span></div><div><Target/><span><b>Focused distribution</b>Place campaigns in selected venues, communities and events.</span></div></div><a className="button white" href="#contact">Advertise with Cool Box <ArrowRight size={18}/></a></div></div></section>

    <section className="places" id="places"><div className="shell"><div className="section-head"><div><div className="eyebrow"><span></span> BUILT TO GO PLACES</div><h2>Meet people where<br/>they <em>already are.</em></h2></div><p>Cool Box started in active environments and is designed to work across places where people gather, participate and engage.</p></div><div className="environment-grid">{environments.map((x,i)=><div className={'env e'+i} key={x}><span>0{i+1}</span><h3>{x}</h3><ArrowRight/></div>)}</div></div></section>

    <section className="network"><div className="shell network-grid"><div><div className="eyebrow light"><span></span> GROWING NETWORK</div><h2>Born in Lebanon.<br/>Built to <em>move.</em></h2><p>Cool Box is already being presented through padel and event environments, with a growing distribution footprint across Greater Beirut, Saida and surrounding areas.</p><div className="network-stats"><div><MapPin/><span><b>Venues</b>Targeted physical distribution</span></div><div><Users/><span><b>Communities</b>People in active moments</span></div></div></div><div className="map-art"><div className="map-line"></div><i className="pin p1"></i><i className="pin p2"></i><i className="pin p3"></i><i className="pin p4"></i><div className="map-label ml1">GREATER BEIRUT</div><div className="map-label ml2">SAIDA & SURROUNDINGS</div></div></div></section>

    <section className="about" id="about"><div className="shell about-grid"><div className="bigword">COOL</div><div><div className="eyebrow"><span></span> OUR POINT OF VIEW</div><h2>Useful wins<br/>attention.</h2><p>Cool Box is built around a simple belief: a brand interaction becomes more meaningful when it gives something back. Refreshment, discovery and an offer come together in one physical experience.</p><p className="tagline">Stay cool. <em>Save more.</em></p></div></div></section>

    <section className="cta" id="contact"><div className="shell"><div className="eyebrow light"><span></span> LET'S CREATE SOMETHING USEFUL</div><h2>Put your brand<br/><em>in their hands.</em></h2><p>Interested in advertising with Cool Box or bringing the experience to your venue or event?</p><a className="button white" href="mailto:info@sparxmediasolutions.com">Start a conversation <ArrowRight size={18}/></a></div></section>

    <footer><div className="shell footer-grid"><div><div className="brand footerbrand"><span>COOL</span><b>BOX</b></div><p>Advertising people actually use.</p></div><div><b>Explore</b><a href="#concept">The Concept</a><a href="#advertisers">For Advertisers</a><a href="#places">Where We Go</a></div><div><b>Contact</b><a href="mailto:info@sparxmediasolutions.com">info@sparxmediasolutions.com</a><span>Lebanon</span></div></div><div className="shell copyright"><span>© {new Date().getFullYear()} Cool Box. All rights reserved.</span><span>A SPARX Media Solutions concept</span></div></footer>
  </main>
}
