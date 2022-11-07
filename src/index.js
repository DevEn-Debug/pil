import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./i18n";
import BrowserRouter from 'react-router-dom/BrowserRouter'
import i18next from "i18next";

if (localStorage.getItem("lang") === null) {
  var nav = navigator.language.split("-");
  nav = nav[0];
  localStorage.setItem("lang", nav);  
}
const lang = localStorage.getItem("lang");
i18next.changeLanguage(lang);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
