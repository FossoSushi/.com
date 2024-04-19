import React, { useState } from 'react';
import css from './styles.module.scss';

const DeliveryForm = ({ formData, setFormData, handleSubmit }) => {
  const [errors, setErrors] = useState({});

  // Функція для обробки зміни значення форми
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Функція для валідації форми
  const validateForm = () => {
    const newErrors = {};

    // Перевірка обов'язкових полів
    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else {
      // Перевірка формату телефонного номера (простий приклад)
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(formData.phoneNumber)) {
        newErrors.phoneNumber = 'Invalid phone number';
      }
    }

    // Перевірка інших полів (можете додати свої вимоги до валідації)

    // Якщо є помилки, повертаємо об'єкт з помилками
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    // Якщо помилок немає, очищуємо стан помилок
    setErrors({});
    return true;
  };

  // Обробник відправки форми
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Валідація форми
    if (validateForm()) {
      // Якщо валідація пройшла успішно, викликаємо передану функцію handleSubmit
      handleSubmit();
    }
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <h2>DELIVERY</h2>
      <p>Fill out the form to receive delivery. Once we receive your information, we will call you within 15 minutes to confirm your order.</p>

      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className={errors.firstName ? `${css.errorInput} ${css.firstName}` : css.firstName}
      />
      {errors.firstName && <p className={css.errorMessage}>{errors.firstName}</p>}

      <input
        type="tel"
        name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        className={errors.phoneNumber ? `${css.errorInput} ${css.phoneNumber}` : css.phoneNumber}
      />
      {errors.phoneNumber && <p className={css.errorMessage}>{errors.phoneNumber}</p>}

      <textarea
        name="address"
        placeholder="The address to which you want to receive delivery"
        value={formData.address}
        onChange={handleChange}
        className={css.address}
      />

      <textarea
        name="deliveryTime"
        placeholder="Estimated delivery time and payment method"
        value={formData.deliveryTime}
        onChange={handleChange}
        className={css.deliveryTime}
      />

      <textarea
        name="allergies"
        placeholder="Indicate how many people you need utensils for, and do you have allergies to any products? Here you can specify any additional information that will help us make the best product for you."
        value={formData.allergies}
        onChange={handleChange}
        className={css.allergies}
      />

      <button className={css.btn} type="submit">SEND ORDER</button>
    </form>
  );
};

export default DeliveryForm;
