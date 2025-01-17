import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="text-gray-600 body-font shadow-md">
            <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Ecommerce</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center mr-10 px-8">
                    <Link to ="/" className="mr-5 hover:text-gray-900">Home</Link>
                    <Link to ="/allproduct" className="mr-5 hover:text-gray-900">Product</Link>
                    <Link to ="/about" className="mr-5 hover:text-gray-900">About</Link>
                    <Link to ="/cleaning" className="mr-5 hover:text-gray-900">Cleaning</Link>
                </nav>
                <Link to ="/cart"><button className="inline-flex items-center text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base  md:mt-0">Go to Cart
                    
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
                </Link>
            </div>
        </header>
    )
}
export default Header;