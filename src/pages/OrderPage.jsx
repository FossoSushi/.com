import React, { useEffect } from 'react';
import Modal from '../components/Modal/Modal';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import FilterMenu from '../components/FilterMenu/FilterMenu';
import MenuList from '../components/MenuList/MenuList';
import { useGlobalState } from '../GlobalStateContext/GlobalStateContext';

const Order = () => {
    const { globalState, setGlobalState } = useGlobalState();
    const orderArr = globalState.orderArr;
    const title = {
        textAlign: 'center',
        marginTop: '40px',
    };
    const box = {
        background: '#103533'
    };
    return (
        <div style={box}>
            <Modal />
            <Header />
            <FilterMenu type='order' />
            <h2 style={title}>YOUR ORDER</h2>
            <MenuList type='order' menuList={orderArr} />
            <Footer />
        </div>
    );
}

export default Order;
