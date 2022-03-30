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
    <footer>
      <p>Copyright - &copy;{ new Date().getFullYear()} Raven Heating &amp; Cooling, LLC. All rights reserved.</p>
      <p>Website by <a href='http://www.pjmcdermott.com/' target='_blank' rel='noreferrer'>PJMcDermott</a>.</p>
    </footer>
    </>
  )
}
