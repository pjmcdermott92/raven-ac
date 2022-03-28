import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Service from './Service';
import s from './ServicesSection.module.scss';

const SERVICES = [
    {
        name: 'maintenance',
        title: 'HVAC Maintenance',
        imgUrl: '/maintenance.png',
        imgAlt: 'HVAC Maintenance Service',
        content: `
            <p>The key to preventing most imminent breakdowns and keeping your warranty valid is to have your system serviced two times each year: once in the cooling season, and once in the heating season.</p>
            <p>Raven Heating &amp; Cooling offers one-time tune-ups, or a yearly maintenance plan that includes two yearly services and additional specials and discounts in the event that your system does need some work.</p>
            `,
        common: ['Air Duct Cleaning', 'Air Duct Sanitization', 'Air Filter Cleaning', 'Cleaning of Coils, Drains, and Internal Components']
    },
    {
        name: 'repair',
        title: 'HVAC Repair',
        imgUrl: '/repair.png',
        imgAlt: 'HVAC Repair Service',
        content: `
            <p>Summertime in Tucson can be brutal - especially if your AC breaks down in the middle of summer. Raven Heating & Cooling is here to help you get cooling as quickly and painlessly as possible. We offer customers as many options as possible - not just the most expensive one - and will walk you through the pros and cons of each option, so that we can find the best solution for your needs at the best price possible.</p>
            `,
            common: ['Air Duct Repair', 'Flame Sensor Repair', 'Thermostat Repair', 'Furnace Repiar']
    },
    {
        name: 'replacement',
        title: 'HVAC Replacement',
        imgUrl: '/replacement.png',
        imgAlt: 'HVAC Replacement',
        content: `
            <p>When it comes to replacing your HVAC system, there are a lot of options out there. At Raven Heating & Cooling, we know that each person has different priorities when it comes to their HVAC system, from cost to efficiency and reputation. It is our goal to help you find the best option for you and your family. When it comes to such a large purchase, Matthew is here to listen to you and your needs, and to present you with the best options to choose from.</p>
            <p><em>We also offer <strong>FREE Estimates</strong></em>.</p>
            `,
            common: ['System Replacement', 'Furnace Installation', 'Ductless/Mini-Split Installation', 'FREE Estimates']
    }
];

const ServicesSection = () => {
    const [activeService, setActiveService] = useState('maintenance');

    return (
        <section id='services' className={s.servicesSection}>
            <div className='container'>
                <h1 className='section-heading'>Our Services</h1>
                <p className='section-sub-heading'>Raven Heating &amp; Cooling is a full-service HVAC repair and maintenance company. We offer solutions for all of your heating and cooling needs. Here are some of our most popular services:</p>

                <div className={s.services}>
                    <div className={s.serviceSelector}>
                        <ul className={s.selectorBtns}>
                            {SERVICES.length && SERVICES.map((service, index) => {
                                return (
                                    <li
                                        key={index}
                                        data-active={activeService === service.name}
                                        onClick={() => setActiveService(service.name)}
                                    >
                                        <FontAwesomeIcon icon={faCaretRight} />
                                        <span>{service.title}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                   
                    {SERVICES.length && SERVICES.map((service, index) => {
                        return <Service
                                    key={index}
                                    isVisible={activeService === service.name}
                                    service={service}
                                    setService={() => setActiveService(service.name)}
                                />
                    })}
                </div>
            </div>
        </section>
    )
}

module.exports = ServicesSection;
