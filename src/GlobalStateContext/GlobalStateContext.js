import React, { createContext, useState, useContext } from 'react';

// Створюємо контекст глобального стану
const GlobalStateContext = createContext();

// Створюємо компонент-постачальник для надання стану дочірнім компонентам
export const GlobalStateProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState({
        isModalOpen: false,
    });

    return (
        <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

// Власний хук для зручного отримання та оновлення глобального стану
export const useGlobalState = () => useContext(GlobalStateContext);
