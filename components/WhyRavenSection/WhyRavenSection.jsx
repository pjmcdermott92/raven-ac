import s from './WhyRavenSection.module.scss';

const WhyRavenSection = () => (
    <section id='whyUs' className={s.whyUsSection}>
        <div className={`${s.sectionWrapper} container`}>    
            <div className={s.sectionImage}>
                <img src='/truck.png' alt='Matt Uselton' />
            </div>
            <div className={s.contentWrapper}>
                <h1>Why Choose <br/> <em>Raven Heating &amp; Cooling?</em></h1>
                <p>At Raven Heating &amp; Cooling, <em>we treat you like family</em>! We pride ourselves on working closely with our clients and listening to their needs, and discussing every possible option with them. We are not here to sell you the most expensive option, but rather to make your HVAC repair and maintenance experience as easy and pain-free as possible. We are committed to quality workmanship, unwavering customer service, and ethical practices.</p>
                <p  className='text-large'>Reach out to Raven Heating &amp; Cooling for all of your heating and cooling needs, and we promise that you will have a wonderful experience.</p>
                <a href="#contact" className='btn btn-warning'>Contact Us</a>
            </div>
        </div>
    </section>
);

export default WhyRavenSection;
