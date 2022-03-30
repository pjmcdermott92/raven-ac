import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ClientTestimonials from './ClientTestimonials';
import ContactForm from './ContactForm';
import s from './ContactSection.module.scss';

const ContactSection = () => {

    return (
        <div className={s.lowerSection}>
            <div className={s.sectionWrapper}>
                <ClientTestimonials />
                <section id='contact' className={s.contactSection}>
                    <h1 className='section-heading'>Contact Us</h1>
                    <div className={s.contactDetail}>
                        <span className={s.contactIcon}>
                            <FontAwesomeIcon icon={faPhone} />
                        </span>
                        <span>
                            <a href='tel:5202448627'>(520) 244-8627</a>
                        </span>
                    </div>
                    <div className={s.contactDetail}>
                        <span className={s.contactIcon}>
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <span>
                            <a href='mailto:comfort@ravenac.com'>comfort@ravenac.com</a>
                        </span>
                    </div>
                    <ContactForm />
                </section>
            </div>
        </div>
    )
}

export default ContactSection;
