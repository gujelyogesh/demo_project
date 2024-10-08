import React, { useEffect, useState } from "react";
import Hero from "../../component/Hero";
import Product from "../../component/Product";
import Featurescard from "../../component/Featurescard";
import Statics from "../../component/Statics";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import About from "../../component/About";
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
            <section id="blog" className="blog" >
                <div className="container mx-auto">
                    <div className="section-header">
                        <h2 >news and articles</h2>
                        <p>Always upto date with our latest News and Articles </p>
                    </div>
                    <div className="blog-content">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="single-blog-item">
                                    <div className="single-blog-item-img">
                                        <img src="./images/b1.jpg" alt="blog image"/>
                                    </div>
                                    <div className="single-blog-item-txt">
                                        <h2><a href="#">How to find your Desired Place more quickly</a></h2>
                                        <h4>posted <span>by</span> <a href="#">admin</a> march 2018</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-blog-item">
                                    <div className="single-blog-item-img">
                                        <img src="./images/b2.jpg" alt="blog image"/>
                                    </div>
                                    <div className="single-blog-item-txt">
                                        <h2><a href="#">How to find your Desired Place more quickly</a></h2>
                                        <h4>posted <span>by</span> <a href="#">admin</a> march 2018</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-blog-item">
                                    <div className="single-blog-item-img">
                                        <img src="./images/b3.jpg" alt="blog image"/>
                                    </div>
                                    <div className="single-blog-item-txt">
                                        <h2><a href="#">How to find your Desired Place more quickly</a></h2>
                                        <h4>posted <span>by</span> <a href="#">admin</a> march 2018</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
            <Statics />
            <Footer />
        </>
    )
}
export default Home;