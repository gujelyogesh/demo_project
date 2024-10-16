import React from 'react';
import './App.css';
// import Header from './component/Header.js';
import Home from './modules/Home/Home.js';
import { Routes,Route } from 'react-router-dom';
import NewProduct from './modules/Products/NewProduct.js';
import AllProduct from './component/all product/AllProduct.js';
import Cart from './modules/Cart.js';
import Contact from './component/Contact.js';
import Addtocard from './component/Addtocard.js';
import About from './component/About.js';
import Login from './component/Login.js';
function App() {
  return (
    <>
      <div>
        <Routes>
       <Route path ="/" element = {<Home/>} />
        <Route path = "/allproduct/:id" element = {<NewProduct/>} />
        <Route path ="/allproduct" element ={<AllProduct/>}/>
        <Route path ="/cart" element = {<Cart />} />
        <Route path = "/contact" element = {<Contact />} />
        <Route path = "/addtocard/:id" element = {<Addtocard/>} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/login" element ={<Login />} />
        {/* <Route path = "header" element={<Header/>} /> */}
        </Routes> 
      </div>
    </>
  );
}

export default App;
