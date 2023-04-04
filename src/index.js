import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//automatically-inits for demo
const timeout = setTimeout(() => {
  window.grinWidgetLaunch(0, "0", "development");
  clearTimeout(timeout);
}, 1000)
