// , { StrictMode } 
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.hydrateRoot(
    document.getElementById('root'),
    <StrictMode>
        <App />
    </StrictMode>
)

reportWebVitals();
