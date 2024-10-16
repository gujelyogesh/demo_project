import React, { useEffect, useState } from "react";
import Hero from "../../component/Hero";
import Featurescard from "../../component/Featurescard";
import Statics from "../../component/Statics";
import { Link } from "react-router-dom";
import About from "../../component/About";
import Header from "../../component/Header";
import Footer from "../../component/Footer/Footer";

const Home = () => {
    // using useState
    const [product, setProduct] = useState([])
    const [SearchData, setSearchData] = useState([])

    // create function fetchApi
    const FatchApi = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products?limit=8");
            const result = await response.json()
            setProduct(result)
            setSearchData(result)
            console.log(result)
        } catch (err) {
            console.log(err)
        }
    }

    // using useEffect
    useEffect(() => {
        FatchApi()
    }, [])

    const FilterData = (e) => {
        const myfilter = e.target.value;
        const result = product.filter(item => {
            return item.category.toLowerCase().includes(myfilter) || item.title.toLowerCase().includes(myfilter)
        })
        setSearchData(result);
    }
    return (
        <>
            <Header />
            <Hero />
            <div className="flex flex-col text-center w-full pt-5 ">
                <h2 className="text-xs text-purple-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 pb-8">MOST POPULAR PRODUCTS</h1>
            </div>
            <div className="mx-5">
                <input type="text" placeholder=" Search Product" className="mx-4 w-25 my-2 py-2 text form-control" onChange={FilterData} />
            </div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        {
                            SearchData.length > 0 && SearchData.map((products) => {
                                // console.log(products, "product")
                                const { id, title, price, description, category, image } = products
                                return (
                                    <>
                                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-4 cursor-pointer">
                                            <a className="block relative h-48 rounded overflow-hidden">
                                                <img alt="title" className="object-contain object-center w-full h-full block" src={image} />
                                            </a>
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{category}</h3>
                                                <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                                                <p className="mt-1 text-md font-semibold">${price}
                                                    <button className=" flex text-white bg-indigo-500 border-0 py-2 px-6 hover:bg-indigo-600 rounded float">Add to Card</button> </p>
                                                {/* <button className="btn">Button</button> */}
                                            </div>
                                            {/* <div className="flex">
                                    <button className="text-white bg-indigo-500 border-0 py-2 px-6 hover:bg-indigo-600 rounded">Add to Card</button>
                                    </div> */}
                                        </div>

                                    </>
                                )
                            })

                        }

                    </div>
                </div>
            </section>
            <div className=" flex justify-center pt-3">
                <button className="text-white bg-indigo-500 border-0 py-3 px-9 focus:outline-none rounded"><Link to={`/allproduct`}> All Product</Link></button>
            </div>


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
                                        <img src="./images/b1.jpg" alt="blog image" />
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
                                        <img src="./images/b2.jpg" alt="blog image" />
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
                                        <img src="./images/b3.jpg" alt="blog image" />
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