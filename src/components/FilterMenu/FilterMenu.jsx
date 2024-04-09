import React from 'react';
import css from './styles.module.scss';

const FilterMenu = () => {
    return (
        <div className={css.FilterMenu}>
            <div className={css.filter}>
                <p>Delivery is available from 3pm. to 10pm.</p>
            </div>
            <div className={css.deliveryTime}>
                <p>Delivery is available from 3pm. to 10pm.</p>
            </div>
        </div>
    );
};

export default FilterMenu;
