
import React, { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate()
  const [cart, setCart] = useState([]);
  const [data, setData] = useState(false)
  
  
  

  useEffect(() => {
    getCartData();

  }, []);
 

  const getCartData = async () => {
    const cart =JSON.parse(localStorage.getItem("cart")) || [];
    await setCart(cart);
  }
  
  //const cart = JSON.parse(localStorage.getItem("cart")) || []
  //  useState
  const [total, setTotal] = useState(0)

  // useEeffect 

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + (item.price * item.quantity)
    }, 0)
    setTotal(total)
  }, [cart])

  // console.log(location);
  const handleDec = (id) => {
    const updatecart = cart.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updatecart));
    getCartData();
    //window.location.reload()
  }
  const handleInc = (id) => {
    const updatecart = cart.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updatecart));
    getCartData();
    //window.location.reload()
  }
 
  //  delete productItem
  const deleteItem = (id) => {
    const updatecart = cart.filter(item => item.id !== id);
     localStorage.setItem('cart', JSON.stringify(updatecart));
     setCart(updatecart)
    getCartData()
     
  }
 
 
  //  checkout card

  const checkout = () => {
    localStorage.removeItem('cart')   
   setData(true)
   setTimeout(() => {
     navigate("/")
    
   },3000);
  }

  //  Back card
  // const BackProduct = () => {
  //   navigate("/allproduct")
  // }


  return (
    <>
 
    <div className="container mx-auto mt-10">
      <div className="sm:flex shadow-md my-10">
        <div className="  w-full  sm:w-3/4 bg-white px-10 py-10">
          <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            <div className="flex justify-between text-semibold aitems-stretch  ">
              <h2 class="title font-manrope text-4xl leading-10 mb-8 text-center text-black">Shopping Cart
              </h2>
              <h2 class="title font-manrope text-4xl leading-10 mb-8 text-center text-black">{cart?.length}Items
              </h2>
            </div>

            <div class="hidden lg:grid grid-cols-2 border-t pt-2">
              <div class="font-normal text-xl leading-8 text-gray-500">Product</div>
              <p class="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                <span class="w-full max-w-[260px] text-center">Quantity</span>
                <span class="w-full max-w-[200px] text-center">Price</span>
                <span class="w-full max-w-[200px] text-center">Total</span>
              </p>
            </div>
            {
              cart.map(carts => {
                return (
                  <div class="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-gray-200 py-2">
                    <div
                      class="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                      <div class="img-box"><img src={carts?.image} alt={carts?.title} class="xl:w-[140px]" /></div>
                      <div class="pro-data w-full max-w-sm ">
                        <h5 class="font-medium text-black max-[500px]:text-center">{carts?.title}
                        </h5>
                        <p
                          class="font-normal text-md leading-6 text-gray-500  min-[500px] max-[500px]:text-center">
                          {carts?.category} </p>
                        <h6 class="font-medium text-indigo-600 :text-center">{carts?.price}</h6>
                        <button type="button" className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={() => deleteItem(carts?.id)}>Remove</button>
                      </div>
                    </div>
                    <div class="flex items-center flex-col flex-row ">
                      <div class="flex items-center w-full mx-auto">
                        <button class="group flex" >
                          <svg class="stroke-gray-900 group-hover:stroke-black"
                            xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                            fill="none" onClick={() => handleDec(carts?.id)}>
                            <path d="M16.5 11H5.5" stroke="" stroke-width="1.6" stroke-linecap="round" />
                            {/* <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                            stroke-linecap="round" /> */}
                            {/* <path d="M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                            stroke-linecap="round" /> */}
                          </svg>
                        </button>
                        <span className="text-center w-50"><input type="num" className="font-semibold w-50 text-center"
                          value={carts?.quantity} /></span>
                        <button class="group flex" >
                          <svg class="stroke-gray-900 group-hover:stroke-black"
                            xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                            fill="none" onClick={() => handleInc(carts?.id)}>
                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-width="1.6"
                              stroke-linecap="round" />
                            {/* <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                            stroke-linecap="round" />
                            <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" stroke-opacity="0.2" stroke-width="1.6"
                          stroke-linecap="round" /> */}
                          </svg>
                        </button>
                      </div>
                      <h6 class="font-manrope font-bold text-black w-full text-center">
                        ${(carts?.price).toFixed(2)} </h6>
                        {/* <span class="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">(Delivery
                          Charge)</span> */}
                      <h6
                        class="text-indigo-600 font-manrope font-bold w-full text-center">
                        ${(carts?.price * carts?.quantity).toFixed(2)}</h6>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <Link to ="/" className="flex font-semibold text-indigo-600 text-sm mt-10">
            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
              <path
                d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Back HomePage
          </Link>
        </div>
        <div id="summary" className=" w-full   sm:w-1/4   md:w-1/2     px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items {(cart?.length)}</span>
            <span className="font-semibold text-sm">{(total).toFixed(2)}</span>
          </div>
          <div>
            <label className="font-medium inline-block  text-sm uppercase">
              Shipping
            </label>
            <select className="block text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div>
          <div className="py-8">
            <label
              for="promo"
              className="font-semibold inline-block mb-1 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>{(total + 10).toFixed(2)}</span>
            </div>
            <button className="bg-indigo-500 font-semibold  py-3 text-sm text-white uppercase w-full" onClick={checkout} disabled = {data}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
export default Cart;