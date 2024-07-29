import React from "react";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AllProduct = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    // using useState
    const [product, setProduct] = useState([])
    const [allproduct, setAllProduct] = useState([])

    // create function fetchApi
    const FatchApiProduct = async() =>{
        try{
        const response  = await fetch(`https://fakestoreapi.com/products`);
        const result = await response.json()
        setProduct(result)
        //console.log(result)
        }catch(err){
            console.log(err)
        }
    }

    // using useEffect
    useEffect(() =>{
    FatchApiProduct()
    }, [])

    // useEffect( () => {
    //     fetchapi();
    //  }, [])
    //   const fetchapi = async () => {
    //     const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    //     const result = await response.json()
    //     console.log(result, "res")
    //   setProduct(result)
    //   }
     const handlecard =(item) =>{
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const isproductExit = cart.find(items =>items.id === item.id)
        if(isproductExit ){
          const updatecart = cart.map(items =>{
            if(items.id === item.id){
              return{
                ...items,
                quantity:items.quantity+1
              }
            }
             return items
          })
          localStorage.setItem('cart',JSON.stringify(updatecart))
          toast("fff")
         }else{
           localStorage.setItem('cart',JSON.stringify([...cart,{...item, quantity:1}]))
           setTimeout(()=>{
             navigate('/cart')
            },2000)
            toast("ADD Product")
        }
        // if(redirect){
        //     navigate('/cart')
        //     // toast("Card")
          
        // }
    
      }
    //    !Object.keys(allproduct).length > 0 && <div>Product Not Found</div>
    return (
        <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
         <div className="flex flex-wrap -m-4">
         <ToastContainer />
        {
            product.map((item) =>{
                const {id} = item
                return(
                     
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-4 ">
                        <Link to = {`/allproduct/${id}`} className="cursor-pointer" >
                    <p className="block relative h-40 rounded overflow-hidden">
                        <img alt="title" className="object-contain object-center w-full h-full block" src={item.image} />
                    </p>
                        <h2 className="w-10/11 text-gray-900 title-font text-lg font-medium" >{item.title}</h2>
                      </Link>
                    <div className="mt-1">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{item.category}</h3>
                        <div className="max-w-sm">
                        </div>
                        <p className="mt-1 text-md font-semibold ">${item.price}</p>
                        <div className="flex justify-end items-center">
                             <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={(()=>{handlecard(item)})}>Add to Card</button>
                      </div> 
                    </div>
                    
                </div>
               
               
                )
            })
        }
           
           </div>
                </div>
                
            </section>

            <Footer />
        </>
    )
}
export default AllProduct;