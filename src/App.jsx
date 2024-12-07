

import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Pooter from './Components/Pooter/Pooter';
import Baner from './Components/Baner/Baner';
import PhoneBaner from './Components/Baner/PhoneBaner';
import LaptopBaner from './Components/Baner/LaptopBaner';
import WatchBaner from './Components/Baner/WatchBaner';
import AudioBaner from './Components/Baner/AudioBaner';
import Checkout from './Components/Checkout/Checkout';
import LoginPage from './Pages/LoginPage';
import Payment from './Components/Payment/Payment';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/phones' element={<ShopCategory category="phone"><PhoneBaner /></ShopCategory>} />
          <Route path='/tablet' element={<ShopCategory category="tablet"><Baner /></ShopCategory>} />
          <Route path='/laptop' element={<ShopCategory category="laptop"><LaptopBaner /></ShopCategory>} />
          <Route path='/watch' element={<ShopCategory category="watch"><WatchBaner /></ShopCategory>} />
          <Route path='/audio' element={<ShopCategory category="audio"><AudioBaner /></ShopCategory>} />
          <Route path='/product/:productId' element={<Product />} /> Change made here
        {/* <Route path='/product' element={<Product/>}  />
       <Route path=':productId' element={<Product/>}  /> */}

          <Route path='/cart' element={<Cart />} />
           <Route path='/register' element={<LoginSignup />} />
          <Route path='/login' element={<LoginPage />} /> 
                    <Route path='/checkout' element={<Checkout/>} /> 
                    <Route path='/payment' element={<Payment/>} /> 



        </Routes>
        <Pooter />
      </BrowserRouter>
    </div>
  );
};

export default App;
