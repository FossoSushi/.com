import React, {useEffect, useRef, useState} from 'react';
import css from './styles.module.scss';
import { Delivery } from '../../assets/svgComponents/Delivery';

const FilterMenu = () => {
    const buttonRef = useRef(null);
    const filterRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    useEffect(() => {
        if (buttonRef.current) {
            buttonRef.current.focus();
        }
    }, []);
    
    useEffect(() => {
        const handleScroll = () => {
        if (filterRef.current) {
            const { top } = filterRef.current.getBoundingClientRect();
            setIsSticky(top <= 0);
        }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
        }, []);

    useEffect(() => {
        const handleScrollUp = () => {
        if (isSticky && window.scrollY === 0) {
            setIsSticky(false);
        }
        };

        window.addEventListener('scroll', handleScrollUp);

        return () => {
        window.removeEventListener('scroll', handleScrollUp);
        };
    }, [isSticky]);
    
    return (
        <div className={css.FilterMenu} id='DELIVERY'>
            <div className={isSticky ? `${css.Filter} ${css.Sticky}` : css.Filter} ref={filterRef}>
                <button ref={buttonRef} onClick={() => scrollToSection('DELIVERY')}><Delivery />DELIVERY</button>
                <button onClick={() => scrollToSection('SETS')}>SETS</button>
                <button onClick={() => scrollToSection('SUSHI')}>SUSHI</button>
                <button onClick={() => scrollToSection('HOT-ROLLS')}>HOT ROLL</button>
                <button onClick={() => scrollToSection('TEMPURA')}>TEMPURA</button>
                <button onClick={() => scrollToSection('SUSHI-BURGER')}>SUSHI-BURGER</button>
                <button onClick={() => scrollToSection('DRINKS')}>DRINKS</button>
                <button onClick={() => scrollToSection('ALLERGEN')}>ALLERGEN</button>
            </div>
            <div className={css.deliveryTime}>
                <p>Delivery is available from 3pm. to 10pm.</p>
            </div>
        </div>
    );
};

export default FilterMenu;
