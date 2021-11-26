import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';


function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="signin" element={<SignInSignUp />} />
    </Routes>
    </div>
  );
}

export default App;