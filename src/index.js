import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './componentes/Header';
import App from './App';
import Footer from './componentes/Footer';
import reportWebVitals from './reportWebVitals';
import Primercomponente from './Appejemplo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Primercomponente/>
    <App/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
