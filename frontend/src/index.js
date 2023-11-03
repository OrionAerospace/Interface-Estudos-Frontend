import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home';
import Cadastro from './pages/cadastro';
import Login from './pages/login';
import Main from './pages/main';
import Profile from './pages/profile';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my" element={<Main />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
