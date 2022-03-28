import Head from 'next/head';
import CallToAction from '../components/CallToAction/CallToAction';
import HeroSection from '../components/HeroSection/HeroSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import WhyRavenSection from '../components/WhyRavenSection/WhyRavenSection';
import AboutSection from '../components/AboutSection/AboutSection';
import ContactSection from '../components/ContactSection/ContactSection';

export default function Home() {
  return (
    <>
    <Head>
      <title>Raven Heating &amp; Cooling, LLC</title>
    </Head>

    <HeroSection />
    <ServicesSection />
    <CallToAction />
    <WhyRavenSection />
    <AboutSection />
    <ContactSection />
    </>
  )
}
