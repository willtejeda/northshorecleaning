import Hero from '@/components/Hero'
import Services from '@/components/Services'
import TrustIndicators from '@/components/TrustIndicators'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import FAQPreview from '@/components/FAQPreview'

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustIndicators />
      <Services />
      <Testimonials />
      <FAQPreview />
      <CTA />
    </main>
  )
}