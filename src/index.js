// Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from './App.js';

// CSS
import './index.css';

// Setting up React
const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

// Calling the render method
root.render(
  // This argument here is JSX, HTML in JavaScript
  <React.StrictMode>
    <App />
  </React.StrictMode>
);