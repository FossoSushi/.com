import React, {useEffect, useRef} from 'react';
import css from './styles.module.scss';
import { Delivery } from '../../assets/svgComponents/Delivery';

const FilterMenu = ({type}) => {
    const buttonRef = useRef(null);
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

    
    
    return (
        <div className={css.FilterMenu} id='DELIVERY'>
            {type !== 'order' && 
                <div className={css.Filter}>
                    <button ref={buttonRef} onClick={() => scrollToSection('DELIVERY')}><Delivery />DELIVERY</button>
                    <button onClick={() => scrollToSection('SETS')}>SETS</button>
                    <button onClick={() => scrollToSection('SUSHI')}>SUSHI</button>
                    <button onClick={() => scrollToSection('HOT-ROLLS')}>HOT ROLL</button>
                    <button onClick={() => scrollToSection('TEMPURA')}>TEMPURA</button>
                    <button onClick={() => scrollToSection('SUSHI-BURGER')}>SUSHI-BURGER</button>
                    <button onClick={() => scrollToSection('DRINKS')}>DRINKS</button>
                    <button onClick={() => scrollToSection('ALLERGEN')}>ALLERGEN</button>
                </div>
            }
            <div className={css.deliveryTime}>
                <p>Delivery is available from 3pm. to 10pm.</p>
            </div>
        </div>
    );
};

export default FilterMenu;
