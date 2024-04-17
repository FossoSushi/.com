import React, { useState } from 'react';
import css from './styles.module.scss';

const DeliveryForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    phoneNumber: '',
    address: '',
    deliveryTime: '',
    allergies: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Тут ви можете обробити дані форми, використовуючи formData
    console.log(formData);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
        <h2>DELIVERY</h2>
        <p>Fill out the form to receive delivery. Once we receive your information, we will call you within 15 minutes to confirm your order.</p>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="address"
          placeholder="The address to which you want to receive delivery"
          value={formData.address}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="deliveryTime"
          placeholder="Estimated delivery time and payment method"
          value={formData.deliveryTime}
          onChange={handleChange}
        />
        <textarea
          placeholder="Indicate how many people you need utensils for, and do you have allergies to any products? Here you can specify any additional information that will help us make the best product for you."
          type="text"
          name="allergies"
          value={formData.allergies}
          onChange={handleChange}
        />
      <button className={css.btn} type="submit">SEND ORDER</button>
    </form>
  );
};

export default DeliveryForm;
