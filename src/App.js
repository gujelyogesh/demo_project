import React from 'react';
import './App.css';
// import Header from './component/Header.js';
import Home from './modules/Home/Home.js';
import { Routes,Route } from 'react-router-dom';
import NewProduct from './modules/Products/NewProduct.js';
import AllProduct from './component/AllProduct.js';
import Cart from './modules/Cart.js';
import Addtocard from './component/Addtocard.js';
import About from './component/About.js';
import Login from './component/Login.js';
import Cleaner from './component/Cleaner.js';
function App() {
  return (
    <>
      <div>
        <Routes>
       <Route path ="/" element = {<Home/>} />
        <Route path = "/allproduct/:id" element = {<NewProduct/>} />
        <Route path ="/allproduct" element ={<AllProduct/>}/>
        <Route path ="/cart" element = {<Cart />} />
        <Route path = "/addtocard/:id" element = {<Addtocard/>} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/login" element ={<Login />} />
        <Route path ="cleaning" element ={<Cleaner/>} />
        {/* <Route path = "header" element={<Header/>} /> */}
        </Routes> 
      </div>
    </>
  );
}

export default App;
