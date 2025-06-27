import React from 'react';
import ReactDOM from 'react-dom/client';
import TechPortfolio from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TechPortfolio />
  </React.StrictMode>
);

reportWebVitals();