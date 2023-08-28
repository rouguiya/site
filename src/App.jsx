/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/layout';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Forgotpasword from './Pages/Sorgotpasword';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import './App.css';
import ShopContext from './components/shopcontext';
import Details from './Pages/Details';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {

  return (
    <>
    <ShopContext>
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='forgotpasword' element={<Forgotpasword />} />
        <Route path='cart' element={<Cart />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='details' element={<Details />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </ShopContext>
    </>
  )
}

export default App;
