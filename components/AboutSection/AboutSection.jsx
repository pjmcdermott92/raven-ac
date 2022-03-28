import s from './AboutSection.module.scss';

const AboutSection = () => (
    <section id='aboutUs' className={s.aboutSection}>
        <div className={`${s.sectionWrapper} container`}>
            <div className={s.contentWrapper}>
                <h1>About <span>Raven Heating &amp; Cooling</span></h1>
                <p>Raven Heating &amp; Cooling is a family-owned and operated business located in Tucson, Arizona. Since we are a family-owned business, we believe in treating our customer like family, too. We have set a standard on professionalism, quality workmanship, and customer satisfaction. Here at Raven Heating &amp; Cooling, your satisfaction and comfort are our top priority.</p>
                <p>Raven Heating &amp; Cooling has been providing HVAC repair and maintenance solutions right here in Tucson, AZ since 2010. The owner, Matthew Uselton, has been working in the HVAC repair industry for more that 20 years, after learning his trade from his grandfather - who was also a technician and business owner in Tucson. Matthew’s passion for helping others and the many years that he has spent building his skills as a technician led him to want to build his own company that is rooted in integrity.</p>
                <p>Matthew’s passion for what he does - both in helping others and in repairing and maintaining HVAC systems - drives every facet of his business. Raven Heating &amp; Cooling puts you - the customer - first. We truly are committed to treating you like a part of our family, and because of this, we offer unwavering customer support, quality service and workmanship, and a satisfaction guarantee that you are not likely to get from the “big guys”.</p>
            </div>
            <div className={s.imagesWrapper}>
                <div className={s.image}>
                    <img src='/raven-family.jpg' alt='The Raven Family' />
                </div>
                <div className={s.image}>
                    <img src='/matt.png' alt='Owner Matt Uselton' />
                </div>
            </div>
        </div>
    </section>
);

module.exports = AboutSection;
