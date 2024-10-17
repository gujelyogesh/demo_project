import React from "react";
import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CiStar } from "react-icons/ci";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/a11y'
import 'swiper/css/autoplay';
import { Card } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer/Footer";

export default function Cleaner() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="py-3 text-center">
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
        <section id="testimonials" className="testimonials section py-3">

          <div className="text-center my-5 fw-bold"><span className="fs-3">Check Our</span> <span className="description-title fs-3">Testimonials</span></div>

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
      <Footer />
    </>
  );
} 
