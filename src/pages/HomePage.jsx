import React from 'react';
import Modal from '../components/Modal/Modal';
import Header from '../components/Header/Header';
import Logo from '../components/Logo/Logo';
import Hero from '../components/Hero/Hero';
import Delivery from '../components/Deliveri/Delivery';
import Recommend from '../components/Recommend/Recommend';
import Footer from '../components/Footer/Footer';

function HomePage() {  
  
  return (
    <>
      <Modal />
      <Header type={'home'} />
      <Logo />
      <Hero />
      <Delivery />
      <Recommend />
      <Footer/>
    </>
  );
}

export default HomePage;