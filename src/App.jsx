import './App.css';
import css from './styles.module.scss';
import React from 'react';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import { GlobalStateProvider } from './GlobalStateContext/GlobalStateContext';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUsPage';
import Contact from './pages/ContactPage';
import Order from './pages/OrderPage';

const App = () => {
  return (
    <GlobalStateProvider>
      <div className={css.app}>
        <BrowserRouter basename='/Sushi-Alberta'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </BrowserRouter>
      </div>
    </GlobalStateProvider>
    );
}

export default App;