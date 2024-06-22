import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import './index.css';

// const port = '5001';
const TEST_SERVER = 'http://localhost:5001';
const LIVE_SERVER = 'https://alx-portfolio-project-backend.onrender.com';

const url = window.location.host === "localhost:3000" ? TEST_SERVER : LIVE_SERVER;

axios.defaults.baseURL = url;
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
