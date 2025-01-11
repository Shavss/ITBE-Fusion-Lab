import React from 'react';
import ReactDOM from 'react-dom/client'; // Note: React 18 uses `react-dom/client`
import './index.css';
import App from './App';

// Create root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
