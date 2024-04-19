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
import emailjs from '@emailjs/browser';

const Order = () => {
    const serviceId = 'service_jp5ey5m';
    const userId = '685QO5Je5D_QH2K8C';
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
    const nameAndQuantityArray = orderArr.map(item => `${item.name}:(${item.quantity})pcs.`)
    const text = nameAndQuantityArray.join('\n');
    const handleSubmitPickup = (e) => {
        e.preventDefault();
        setIsModalOpen(true);

        const smsData = {
            name: formDataPickup.firstName,
            number: formDataPickup.phoneNumber,
            pickingTime: formDataPickup.pickingTime,
            allergies: formDataPickup.allergies,
            sushi: text,
        };
        const templateId = 'template_1lcxxp4';
        emailjs.send(serviceId, templateId, smsData, userId)
            .then((response) => {
                console.log('SMS sent successfully:', response.status);
            })
            .catch((error) => {
                console.error('Error sending SMS:', error);
            });
        setGlobalState(prevState => ({
            ...prevState,
            orderArr: []
        }));
        window.scrollTo(0, 0);
    };

    const handleSubmitDelivery = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
        const smsData = {
            name: formDataDelivery.firstName,
            number: formDataDelivery.phoneNumber,
            address: formDataDelivery.address,
            pickingTime: formDataDelivery.deliveryTime,
            allergies: formDataDelivery.allergies,
            sushi: text,
        };
        const templateId = 'template_1lcxxp4';
        emailjs.send(serviceId, templateId, smsData, userId)
            .then((response) => {
                console.log('SMS sent successfully:', response.status);
            })
            .catch((error) => {
                console.error('Error sending SMS:', error);
            });
        setGlobalState(prevState => ({
            ...prevState,
            orderArr: []
        }));
        window.scrollTo(0, 0);
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
