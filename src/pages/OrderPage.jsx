import React, {useState} from 'react';
import Modal from '../components/Modal/Modal';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import FilterMenu from '../components/FilterMenu/FilterMenu';
import MenuList from '../components/MenuList/MenuList';
import DeliveryForm from '../components/DeliveryForm/DeliveryForm';
import PickupForm from '../components/PickupForm/PickupForm';
import { useGlobalState } from '../GlobalStateContext/GlobalStateContext';

const Order = () => {
    const [selectedOption, setSelectedOption] = useState('DELIVERY');
    const { globalState } = useGlobalState();
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
            <FilterMenu selectedOption={selectedOption} setSelectedOption={setSelectedOption} type='order' />
            <h2 style={title}>YOUR ORDER</h2>
            <MenuList type='order' menuList={orderArr} />
            {orderArr.length > 0 && (selectedOption === 'DELIVERY' ? <DeliveryForm/> : <PickupForm/>)}
            <Footer />
        </div>
    );
}

export default Order;
