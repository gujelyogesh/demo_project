import React, { useEffect, useState } from "react";
import Hero from "../../component/Hero";
import Product from "../../component/Product";
import Featurescard from "../../component/Featurescard";
import Statics from "../../component/Statics";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
const Home = () => {
    // using useState
    const [product, setProduct] = useState([])

    // create function fetchApi
    const FatchApi = async() =>{
        try{
        const response  = await fetch("https://fakestoreapi.com/products?limit=8");
        const result = await response.json()
        setProduct(result)
        //console.log(result)
        }catch(err){
            console.log(err)
        }
    }

    // using useEffect
    useEffect(() =>{
    FatchApi()
    }, [])
    return (
        <>
            <Hero />
            <div className="flex flex-col text-center w-full pt-5 ">
                    <h2 className="text-xs text-purple-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
                </div>
                {
                    product.length > 0 ?
                    <Product  product ={product}/>  //  props functionality
                    :
                    <div>Loading...</div>

                }
                <div className=" flex justify-center pt-3">
                <button className="text-white bg-indigo-500 border-0 py-3 px-9 focus:outline-none rounded"><Link to ={`/allproduct`}> All Product</Link></button>
                </div>
              
                 <Product/>
            <Featurescard />
            <Statics />
            <Footer />
        </>
    )
}
export default Home;