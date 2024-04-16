import React from 'react';
import Modal from '../components/Modal/Modal';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import FilterMenu from '../components/FilterMenu/FilterMenu';
import MenuList from '../components/MenuList/MenuList';

const Order = () => {
    return (
        <div>
            <Modal />
            <Header />
            <FilterMenu type='order' />
            <MenuList type='order' menuList={[]} />
            <Footer />
        </div>
    );
}

export default Order;