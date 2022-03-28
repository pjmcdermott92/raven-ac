import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faL, faPhone } from '@fortawesome/free-solid-svg-icons';
import s from './Navbar.module.scss';

const LINKS = [
    { href: '/', label: 'Home' },
    { href: '#services', label: 'Our Services' },
    { href: '#whyUs', label: 'Why Choose Us' },
    { href: '#aboutUs', label: 'About Us' },
    { href: '#contact', label: 'Contact Us' }
];

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <>
        <header className={s.pageHeader}>
            <div className={s.brandLogo}>
                <Link href='/'>
                    <a>
                        <img src='/logo.png' alt='Raven Heating &amp; Cooling' />
                    </a>
                </Link>
            </div>

            <div className={s.navWrapper}>
                <span className={s.telephone}>
                    <FontAwesomeIcon icon={faPhone} className={s.phoneIcon} />
                    <a href='tel:5202448627'>(520) 244-8627</a>
                </span>
                <nav className={s.navbar}>
                    <ul className={s.navLinks}>
                        {LINKS.length && LINKS.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href}>
                                    <a>{link.label}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div
                role="presentation"
                className={s.mobileBtn}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                <span />
            </div>
        </header>
        {showMobileMenu && <div
            className={s.mobileNavMenu}
            onClick={() => setShowMobileMenu(false)}
        >
            <div
                className={s.closeMenuBtn}
                role='presentation'
                onClick={() => setShowMobileMenu(false)}
            >
                &times;
            </div>
            <nav>
                <span className={s.telephone}>
                    <FontAwesomeIcon icon={faPhone} className={s.phoneIcon} />
                    <a href='tel:5202448627'>(520) 244-8627</a>
                </span>
                <ul className={s.mobileNavLinks}>
                    {LINKS.length && LINKS.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href}>
                                <a>{link.label}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>}
        </>
    )
}

export default Navbar;
