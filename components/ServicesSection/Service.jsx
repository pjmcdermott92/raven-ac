import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import s from './ServicesSection.module.scss';

const Service = ({ isVisible, service, setService }) => {
    const { title, imgUrl, imgAlt, content, common } = service;
    return (
        <>
        <button
            className={s.accordian}
            data-active={isVisible}
            onClick={setService}
        >
            <FontAwesomeIcon icon={faCaretRight} />
            <span>{title}</span>
        </button>
        {isVisible ? (
            <div className={s.servicePanel}>
                <h3>{title}</h3>
                <div className={s.serviceWrapper}>
                    <div className={s.serviceImage}>
                        <img src={imgUrl} alt={imgAlt} />
                    </div>
                    <div
                        className={s.serviceContent}
                        dangerouslySetInnerHTML={{__html: content}}
                    />
                </div>
                <div className={s.commonSection}>
                    <h4>Common {title} Services:</h4>
                    <ul>
                        {common.map((point, index) => {
                            return <li key={index}>{point}</li>
                        })}
                    </ul>
                </div>
            </div>) : null
        }
        </>
    )
}

export default Service;
