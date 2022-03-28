import Link from 'next/link';
import s from './HeroSection.module.scss';

const HeroSection = () => (
    <section className={s.heroSection}>
        <div className='container'>
            <div className={s.heroContent}>
                <div className={s.heroContentWrapper}>
                    <h1>Helping You Keep Your Cool!</h1>

                    <p>Raven Heating &amp; Cooling is committed to making sure that you are comfortable in your home - no matter what the temperature is outside!</p>
                    <p>Give us a call TODAY to schedule your service or repair!</p>
                    <Link href="#contact">
                        <a className='btn btn-warning'>Contact Us</a>
                    </Link>
                </div>
                <div className={s.heroImage}>
                    <img src='/mat-hero.png' alt='Matt Uselton' />
                </div>
            </div>
        </div>
    </section>
);

export default HeroSection;
