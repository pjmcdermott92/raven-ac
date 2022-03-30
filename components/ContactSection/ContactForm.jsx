import { useState } from 'react';
import s from './ContactSection.module.scss';

const INIT_INPUTS = { firstName: '', lastName: '', email: '', phone: '', message: '' };

const ContactForm = () => {
    const [fieldValues, setFieldValues] = useState(INIT_INPUTS);
    const [fieldErrors, setFieldErrors] = useState({});
    const [messageSent, setMessageSent] = useState(false);

    const onChange = ({ target: { name, value } }) => {
        setFieldValues({ ...fieldValues, [name]: value });
    }

    const onSubmit = e => {
        e.preventDefault();
        setFieldErrors({});
        const errors = {};
        if (!fieldValues.firstName.length || fieldValues.firstName.length < 2) errors = {
            ...errors, firstName: 'Please enter your First Name'
        };
        if (!fieldValues.lastName.length || fieldValues.lastName.length < 2) errors = {
            ...errors, lastName: 'Please enter your Last Name'
        };
        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(fieldValues.email)) errors = {
            ...errors, email: 'Please enter a valid Email Address'
        };
        if (!fieldValues.message.length || fieldValues.message.length < 1) errors = {
            ...errors, message: 'Please enter your Message'
        };
        if (Object.keys(errors).length) return setFieldErrors(errors);
    }

    return (
        <div className={s.contactForm}>
            {
                messageSent ? (
                    <>
                    <h1 className={s.sentText}>Your message has been sent.</h1>
                    <p>We will get back to you as soon as possible.</p>
                    </>
                ) : (
                    <>
                    <h3>Get In Touch</h3>
                    <form onSubmit={onSubmit}>
                        <div className='form-group'>
                            <input
                                id='firstName'
                                type='text'
                                name='firstName'
                                placeholder='John'
                                value={fieldValues.firstName}
                                onChange={e => onChange(e)}
                                className={fieldValues.firstName.length > 0 ? 'populated': ''}
                            />
                            <label htmlFor='firstName'>First Name</label>
                            {
                                fieldErrors.firstName &&
                                fieldErrors.firstName.length &&
                                <span className='field-error'>{fieldErrors.firstName}</span>
                            }
                        </div>
                        <div className='form-group'>
                            <input
                                id='lastName'
                                type='text'
                                name='lastName'
                                placeholder='Smith'
                                value={fieldValues.lastName}
                                onChange={e => onChange(e)}
                                className={fieldValues.lastName.length > 0 ? 'populated': ''}
                            />
                            <label htmlFor='lastName'>Last Name</label>
                            {
                                fieldErrors.lastName &&
                                fieldErrors.lastName.length &&
                                <span className='field-error'>{fieldErrors.lastName}</span>
                            }
                        </div>
                        <div className='form-group'>
                            <input
                                id='email'
                                type='email'
                                name='email'
                                placeholder='someone@example.com'
                                value={fieldValues.email}
                                onChange={e => onChange(e)}
                                className={fieldValues.email.length > 0 ? 'populated': ''}
                            />
                            <label htmlFor='email'>Email</label>
                            {
                                fieldErrors.email &&
                                fieldErrors.email.length &&
                                <span className='field-error'>{fieldErrors.email}</span>
                            }
                        </div>
                        <div className='form-group'>
                            <input
                                id='phone'
                                type='tel'
                                name='phone'
                                placeholder='xxx-xxx-xxxx'
                                value={fieldValues.phone}
                                onChange={e => onChange(e)}
                                className={fieldValues.phone.length > 0 ? 'populated': ''}
                            />
                            <label htmlFor='phone'>Phone</label>
                            {
                                fieldErrors.phone &&
                                fieldErrors.phone.length &&
                                <span className='field-error'>{fieldErrors.phone}</span>
                            }
                        </div>
                        <div className='form-group'>
                            <textarea
                                id='message'
                                name='message'
                                placeholder='Type your message...'
                                value={fieldValues.message}
                                onChange={e => onChange(e)}
                                className={fieldValues.message.length > 0 ? 'populated': ''}
                            />
                            <label htmlFor='message'>Message</label>
                            {
                                fieldErrors.message &&
                                fieldErrors.message.length &&
                                <span className='field-error'>{fieldErrors.message}</span>
                            }
                        </div>
                        <button className='btn btn-secondary' type='submit'>Submit</button>
                    </form>
                    </>
                )
            }
        </div>
    )
}

export default ContactForm;