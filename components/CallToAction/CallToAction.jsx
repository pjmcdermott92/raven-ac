import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import s from './CallToAction.module.scss';

const CallToAction = () => (
    <section className={s.ctaSection}>
        <div className='container'>
            <div className={s.ctaWrapper}>
                <h1>Contact Us TODAY</h1>
                <p>To learn more about the services we offer, or to schedule your HVAC maintenance, repair, or replacement, <a href='#contct'>contact us</a> today.</p>

                <div className={s.ctaContact}>
                    <a href='#contact' className='btn btn-warning'>Contact Us</a>
                    <a href='tel:5202448627' className={s.ctaTel}>
                        <FontAwesomeIcon icon={faPhone} />
                        <span>(520) 244-8627</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default CallToAction;
