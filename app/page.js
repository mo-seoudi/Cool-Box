import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/sections/HeroSection'
import WhatIsCoolBox from '../components/sections/WhatIsCoolBox'
import WhyCoolBox from '../components/sections/WhyCoolBox'
import HowItWorks from '../components/sections/HowItWorks'
import Environments from '../components/sections/Environments'
import ActiveCommunities from '../components/sections/ActiveCommunities'
import CampaignGallery from '../components/sections/CampaignGallery'
import AdvertisingOffer from '../components/sections/AdvertisingOffer'
import ContactSection from '../components/sections/ContactSection'

export default function Home() {
  return (
    <main>
      <Header />

      <HeroSection />
      <WhatIsCoolBox />
      <WhyCoolBox />
      <HowItWorks />
      <Environments />
      <ActiveCommunities />

      {/* Hidden automatically until campaigns are added in content/campaigns.js */}
      <CampaignGallery />

      <AdvertisingOffer />
      <ContactSection />

      <Footer />
    </main>
  )
}
