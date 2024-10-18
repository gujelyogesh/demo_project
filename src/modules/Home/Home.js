import React, { useEffect, useState } from "react";
import Hero from "../../component/Hero";
import Featurescard from "../../component/Featurescard";
import Statics from "../../component/Statics";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../component/Header";
import Footer from "../../component/Footer/Footer";
import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CiStar } from "react-icons/ci";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/a11y'
import 'swiper/css/autoplay'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiSearch } from "react-icons/fi";

const Home = () => {
   const navigate = useNavigate()
    // using useState
    const [product, setProduct] = useState([])
    const [SearchData, setSearchData] = useState([])
    const [carddata, setCardData]  =useState ([]);




// create useEffect 
useEffect(()=>{
    const cartvalue = localStorage.getItem("cart")?JSON.parse(localStorage.getItem('cart')):[]
    // console.log(cartvalue,"value");
     setCardData([...carddata, ...cartvalue])

},[])

    // create function fetchApi
    const FatchApi = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products?limit=8");
            const result = await response.json()
            setProduct(result)
            setSearchData(result)
            // console.log(result)
        } catch (err) {
            console.log(err)
        }
    }

    // using useEffect
    useEffect(() => {
        FatchApi()
    }, [])
    // create filterData
     const FilterData = (e) => {
        const myfilter = e.target.value;
        const result = product.filter(item => {
            return item.category.toLowerCase().includes(myfilter) || item.title.toLowerCase().includes(myfilter)
        })
        setSearchData(result);
    }

    // create handlecard
    const handlecard = async(products)=>{
        const mycard = [{...products, quantity:1}];
        // console.log(mycard,"card");
        await setCardData([...carddata, ...mycard]);
        await localStorage.setItem('cart', JSON.stringify([...carddata, ...mycard]));
        toast("Added Product")
      

    }
    return (
        <>
            <Header />
            <Hero />
            <div className="flex flex-col text-center w-full pt-5 ">
                <h2 className="text-xs text-purple-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 pb-8">MOST POPULAR PRODUCTS</h1>
            </div>
            <ToastContainer />
            <div className="container py-3">
              <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center px-4 pointer-events-none">
        <span className=""><FiSearch  className="fs-5" /></span>
        </div>
        <input type="search" placeholder ="Search Product"className="block w-full py-3 px-5 border border-light-300 rounded-lg form-control bg-light " onChange={FilterData} />
        
    </div>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        {
                            SearchData.length > 0 && SearchData.map((products) => {
                                // console.log(products, "product")
                                const { id, title, price, description, category, image } = products
                                const cardId = carddata.find(cartItem => cartItem.id === id);
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
                                                    <button className=" flex text-white bg-indigo-500 border-0 py-2 px-6 hover:bg-indigo-600 rounded float" onClick={(()=>{handlecard(products)})} disabled ={cardId?true:false}>{cardId ? "View Card" : "Add to Card"}</button> </p>
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
            <Link to={`/allproduct`} className="text-white bg-indigo-500 border-0 py-3 px-9 focus:outline-none rounded"> All Product<button className=""></button></Link>
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
            {/*Cleaning  Experts start  */}
            <div className="container pb-4">
        <div className="text-center">
          <h1 className="fw-bold display-6 pb-3">Cleaning  Experts
          </h1>
          <p className="fw-bold fs-5">Discover Our Services</p>
        </div>
        <div className="py-3">
          <div className="row">
            <div className="col-md-3">
              <div className="img-hover rounded-5">
                <img src="images/Office-600x600.png" alt="Office" />
              </div>
              <div className="py-4">
                <h1 className="fw-bold fs-4">Corporate Cleaner</h1>
                <div className="py-3">
                  <p className="fs-5">Professional office cleaning to create a pristine and productive workspace.</p>
                </div>
              </div>

            </div>
            <div className="col-md-3">
              <div className="img-hover">
                <img src="images/hospital-1-370x370.jpeg" alt="hospital" />
              </div>
              <div className="py-4">
                <h1 className="fw-bold fs-4">Healthcare Facility Cleaners</h1>
                <div className="py-3">
                  <p className="fs-5">Expert hospital cleaning ensuring a sterile and safe environment for patients and staff.</p>
                </div>
              </div>

            </div>
            <div className="col-md-3">
              <div className="img-hover">
                <img src="images/school-1-355x355.jpg" alt="school" />
              </div>
              <div className="py-4">
                <h1 className="fw-bold fs-4">Educational Facility Cleaner</h1>
                <div className="py-3">
                  <p className="fs-5">Reliable daycare, school & college cleaning for a clean and healthy learning atmosphere.</p>
                </div>
              </div>

            </div>
            <div className="col-md-3">
              <div className="img-hover">
                <img src="images/Shop-370x370.jpeg" alt="Shop" />

              </div>
              <div className="py-4">
                <h1 className="fw-bold fs-4">Shop/Retail Cleaners</h1>
                <div className="py-3">
                  <p className="fs-5">Meticulous retail cleaning to keep your shop spotless and inviting.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="">
          <div className="row">
            <div className="col-md-3">
              <div className="img-hover rounded-5">
                <img src="images/Construction-370x370.jpeg" alt="Construction" />
              </div>
              <div className="py-4">
                <h1 className="fw-bold fs-4">Construction Site <br />Cleaner</h1>
                <div className="py-3">
                  <p className="fs-5">Post-construction cleaning services for newly built or renovated sites.</p>
                </div>
              </div>

            </div>
            <div className="col-md-3">
              <div className="img-hover">
                <img src="images/hotel-370x370.jpeg" alt="hotel" />
              </div>
              <div className="py-4">
                <h1 className="fw-bold fs-4">Hotel & Hospitality Cleaners</h1>
                <div className="py-3">
                  <p className="fs-5">Cleaning services for hotels, motels, and other hospitality businesses.</p>
                </div>
              </div>

            </div>
            <div className="col-md-3">
              <div className="img-hover">
                <img src="images/gym-370x370.webp" alt="gym" />
              </div>
              <div className="py-4">
                <h1 className="fw-bold fs-4">Gym & Fitness Center Cleaners</h1>
                <div className="py-3">
                  <p className="fs-5">Cleaning services for gyms, fitness centers, and recreational facilities.</p>
                </div>
              </div>

            </div>
            <div className="col-md-3">
              <div className="img-hover">
                <img src="images/125-370x370.jpg" alt="cleaner" />

              </div>
              <div className="py-4">
                <h1 className="fw-bold fs-4">Disinfectant & Pest Control</h1>
                <div className="py-3">
                  <p className="fs-5">Combining expert disinfectant and pest control for a cleaner, pest-free environment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="testimonials" className="testimonials section">
          <div className="text-center fw-bold pb-3"><span className="fs-3">Check Our</span> <span className="description-title fs-3">Testimonials</span></div>

          <Swiper
            // install Swiper modules
            modules={[A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={2}
            autoplay={{ delay: 5000 }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className="card">
                <div className="testimonial-item">
                  <img src="images/testimonials-1.jpg" className="testimonial-img" alt="" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                  <div className="d-flex star-fill fw-blod fs-2">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                  </div>
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="card">
                <div className="testimonial-item">
                  <img src="images/testimonials-2.jpg" className="testimonial-img" alt="" />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                  <div className="d-flex star-fill fw-blod fs-2">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                  </div>
                  <p>
                    <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>

                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="testimonial-item">
                  <img src="images/testimonials-3.jpg" className="testimonial-img" alt="" />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                  <div className="d-flex star-fill fw-blod fs-2">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                  </div>
                  <p>
                    <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>

                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="testimonial-item">
                  <img src="images/testimonials-4.jpg" className="testimonial-img" alt="" />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                  <div className="d-flex star-fill fw-blod fs-2">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                  </div>
                  <p>
                    <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>

                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="testimonial-item">
                  <img src="images/testimonials-5.jpg" className="testimonial-img" alt="" />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                  <div className="d-flex star-fill fw-blod fs-2">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                  </div>
                  <p>
                    <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>

                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card">
                <div className="testimonial-item">
                  <img src="images/testimonials-6.jpg" className="testimonial-img" alt="" />
                  <h3>Emily Harison</h3>
                  <h4>Store Owner</h4>
                  <div className="d-flex star-fill fw-blod fs-2">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                  </div>
                  <p>
                    <span>Eius ipsam praesentium dolor quaerat inventore rerum odio. Quos laudantium adipisci eius. Accusamus qui iste cupiditate sed temporibus est aspernatur. Sequi officiis ea et quia quidem.</span>

                  </p>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </section>
      </div>
       {/*Cleaning  Experts end  */}
            <Statics />
            <Footer />
        </>
    )
}
export default Home;