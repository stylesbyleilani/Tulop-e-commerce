






import React, { Suspense, lazy } from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Pooter from './Components/Pooter/Pooter';
import ErrorBoundary from './Components/ErrorBoundries';
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';

const Shop = lazy(() => import('./Pages/Shop'));
const ShopCategory = lazy(() => import('./Pages/ShopCategory'));
const Product = lazy(() => import('./Pages/Product'));
const Cart = lazy(() => import('./Pages/Cart'));
const LoginSignup = lazy(() => import('./Pages/LoginSignup'));
const LoginPage = lazy(() => import('./Pages/LoginPage'));
const Checkout = lazy(() => import('./Components/Checkout/Checkout'));
const Payment = lazy(() => import('./Components/Payment/Payment'));

const Baner = lazy(() => import('./Components/Baner/Baner'));
const PhoneBaner = lazy(() => import('./Components/Baner/PhoneBaner'));
const LaptopBaner = lazy(() => import('./Components/Baner/LaptopBaner'));
const WatchBaner = lazy(() => import('./Components/Baner/WatchBaner'));
const AudioBaner = lazy(() => import('./Components/Baner/AudioBaner'));

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<LoadingSpinner/>}>
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route 
              path='/phones' 
              element={
                <ShopCategory category="phone">
                  <PhoneBaner />
                </ShopCategory>
              } 
            />
            <Route 
              path='/tablet' 
              element={
                <ShopCategory category="tablet">
                  <Baner />
                </ShopCategory>
              } 
            />
            <Route 
              path='/laptop' 
              element={
                <ShopCategory category="laptop">
                  <LaptopBaner />
                </ShopCategory>
              } 
            />
            <Route 
              path='/watch' 
              element={
                <ShopCategory category="watch">
                  <WatchBaner />
                </ShopCategory>
              } 
            />
            <Route 
              path='/audio' 
              element={
                <ShopCategory category="audio">
                  <AudioBaner />
                </ShopCategory>
              } 

   
            />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/register' element={<LoginSignup />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/payment' element={<Payment/>} />


          </Routes>
        </Suspense>
        <ErrorBoundary/>
        <Pooter />
      </BrowserRouter>
    </div>
  );
};

export default App;