import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import s from './ContactSection.module.scss';

const TESTIMONIES = [
    {
        name: 'Steve D.',
        content: `
            <p>Matthew came out promptly, diagnosed and provided a reasonable quote. When approved he did the repair timely and professional manner. I will be using Raven Heating & Cooling in the future and recommend them highly.</p>
        `
    },
    {
        name: 'Chris M.',
        content: `
            <p>Awesome Tucson family owned company.</p>
            <p>We called Matthew on Monday. By the next day we were up and running and back to cold.</p>
            <p>Call them for all your heating and cooling needs.</p>
            <ul>
                <li>On Time</li>
                <li>Affordable</li>
                <li>Professional</li>
                <li>Very Satisfied Customer.</li>
            </ul>
            <p>Thanks!</p>
        `
    },
    {
        name: 'Matt O.',
        content: `
            <p>Matt is by far the most knowledgeable, honest, trustworthy air conditioning contractor that I know in Tucson. Not only have I worked for a lot of AC companies in this town but I also work at an AC supply house here and meet a lot of these so called "contractors". He's not out to rob your bank account and leave you and your home unsatisfied. Any job big or small don't hesitate to give him a call and get your self outta the hot seat and into a cool seat.</p>
        `
    }
];

const ContactSection = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const changeSlide = direction => {
        if (direction === 1) {
            if (slideIndex >= TESTIMONIES.length - 1) setSlideIndex(0);
            else setSlideIndex(slideIndex+1);
        }
        if (direction === -1) {
            if (slideIndex === 0) setSlideIndex(TESTIMONIES.length - 1);
            else setSlideIndex(slideIndex-1);
        }
    }

    useEffect(() => {
        const testimonyInterval = setInterval(() => changeSlide(1), 5000);
        return () => clearInterval(testimonyInterval);
    }, [slideIndex]);

    return (
        <div className={s.lowerSection}>
            <div className={s.sectionWrapper}>
                <section className={s.testimonialsSection}>
                    <h1 className='section-heading'>What People Say</h1>
                    {TESTIMONIES.length && TESTIMONIES.map((testimony, index) => {
                        const { name, content } = testimony;
                        if (slideIndex !== index) return null;
                        return (
                            <div key={index} className={s.clientTestimony}>
                                <div className={s.testimonyBody} dangerouslySetInnerHTML={{__html: content}} />
                                <p className={s.testimonyName}>- {name}</p>
                            </div>
                        )
                    })}
                    <div className={s.testimonyCount}>
                        <div
                            role='button'
                            className={s.testimonyDirection}
                            onClick={() => changeSlide(-1)}
                        >
                            <FontAwesomeIcon icon={faCaretLeft} />
                        </div>
                        {TESTIMONIES.length && TESTIMONIES.map((item, index) => {
                            return <span
                                key={index}
                                className={s.testimonyDot}
                                data-active={slideIndex === index}
                                onClick={() => setSlideIndex(index)}
                            />
                        })}
                        <div
                            role='button'
                            className={s.testimonyDirection}
                            onClick={() => changeSlide(1)}
                        >
                            <FontAwesomeIcon icon={faCaretRight} />
                        </div>
                    </div>
                </section>
                <section className={s.contactSection}>
                    <h1 className='section-heading'>Contact Us</h1>
                </section>
            </div>
        </div>
    )
}

export default ContactSection;
