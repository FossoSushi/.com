import React, {useState} from 'react';
import ModalMenu from '../components/ModalMenu/ModalMenu';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import FilterMenu from '../components/FilterMenu/FilterMenu';
import MenuList from '../components/MenuList/MenuList';
import DeliveryForm from '../components/DeliveryForm/DeliveryForm';
import PickupForm from '../components/PickupForm/PickupForm';
import { useGlobalState } from '../GlobalStateContext/GlobalStateContext';
import Modal from '../components/Modal/Modal';

const Order = () => {
    const [selectedOption, setSelectedOption] = useState('DELIVERY');
    const { globalState, setGlobalState } = useGlobalState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formDataPickup, setFormDataPickup] = useState({
        firstName: '',
        phoneNumber: '',
        pickingTime: '',
        allergies: '',
    });
    const [formDataDelivery, setFormDataDelivery] = useState({
        firstName: '',
        phoneNumber: '',
        address: '',
        deliveryTime: '',
        allergies: '',
    });
    const orderArr = globalState.orderArr;
    const title = {
        textAlign: 'center',
        marginTop: '40px',
    };
    const box = {
        background: '#103533'
    };
    const handleSubmitPickup = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
        setGlobalState(prevState => ({
            ...prevState,
            orderArr: []
        }));
        console.log(formDataPickup);
    };

    const handleSubmitDelivery = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
        setGlobalState(prevState => ({
            ...prevState,
            orderArr: []
        }));
        console.log(formDataDelivery);
    };
    
    return (
        <div style={box}>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <ModalMenu />
            <Header />
            <FilterMenu selectedOption={selectedOption} setSelectedOption={setSelectedOption} type='order' />
            <h2 style={title}>YOUR ORDER</h2>
            <MenuList type='order' menuList={orderArr} />
            {orderArr.length > 0 && (selectedOption === 'DELIVERY' ?
                <DeliveryForm
                    formData={formDataDelivery}
                    setFormData={setFormDataDelivery}
                    handleSubmit={handleSubmitDelivery}
                /> :
                <PickupForm
                    formData={formDataPickup}
                    setFormData={setFormDataPickup}
                    handleSubmit={handleSubmitPickup}
                />)}
            <Footer />
        </div>
    );
}

export default Order;
