import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/Sushi-Alberta'>
      {/* <Provider store={store}>
          <ThemeProvider theme={theme}> */}
            <App/>
          {/* </ThemeProvider>
      </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
