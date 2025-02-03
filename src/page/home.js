
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from 'react-router-dom';

const testimonials = [
    {
        img: "https://i.postimg.cc/hGJzd6jr/IMG-2719.jpg",
    },
    {
        img: "https://i.postimg.cc/htZQhcSv/IMG-2720.jpg",
    },
    {
        img: "https://i.postimg.cc/RZZnMNx2/IMG-2721.jpg",
    },
];

const productImage = [
    { id: 1, img: "https://i.postimg.cc/d09R5zvK/boy-romper-2.jpg", price: "$20-25", title: "Boy Romper 2", description: "Comfortable and stylish romper.", categoryId: 1 },
    { id: 3, img: "https://i.postimg.cc/d0JrZ4CN/IMG-1555.avif", price: "$20-30", title: "Stylish Outfit", description: "Trendy and lightweight fabric.", categoryId: 3 },
    { id: 66, img: "https://i.postimg.cc/d0JrZ4CN/IMG-1555.avif", price: "$20-30", title: "Stylish Outfit", description: "Trendy and lightweight fabric.", categoryId: 3 },
    { id: 4, img: "https://i.postimg.cc/K8PtYd1g/IMG-1573.avif", price: "$25-30", title: "Casual Wear", description: "Soft and breathable material.", categoryId: 3 },
    { id: 5, img: "https://i.postimg.cc/Y9q6ZbqL/V-y-1.jpg", price: "$30-40", title: "Elegant Dress", description: "Perfect for special occasions.", categoryId: 2 },
    { id: 77, img: "https://i.postimg.cc/tJ8F1bdF/V-y-2.avif", price: "$30-40", title: "Modern Look", description: "Fashionable and durable.", categoryId: 2 },
]

const catalogImage = [
    { img: "https://i.postimg.cc/5tjvmjP8/473280217-615921490982833-3812731787388686407-n-1.jpg", title: "", description: "" },
    { img: "https://i.postimg.cc/4NT6TfdT/473291359-615923377649311-109066929642301688-n-1.jpg", title: "", description: "" },
    { img: "https://i.postimg.cc/c4MQxpgt/473440296-615921714316144-4988172142196501829-n-1.jpg", title: "", description: "" },
    { img: "https://i.postimg.cc/PfDWcpd4/473544276-615923320982650-5284757103463163757-n-1.jpg", title: "", description: "" },
    { img: "https://i.postimg.cc/Dwv18xLj/473578713-615921780982804-3219815772634440892-n-1.jpg", title: "", description: "" },
    { img: "https://i.postimg.cc/3xtmp2ZK/473621978-615921724316143-9026438741686592847-n-1.jpg", title: "", description: "" },
]
export default function Home() {
    return (
        <>
            <main>
                <div class="container-fluid py-5 hero-header wow fadeIn" data-wow-delay="0.1s">
                    <div class="container py-5">
                        <div class="row g-5">
                            <div class="col-lg-7 col-md-12">
                                <h2 style={{ "color": "white" }} class="mb-3 ">Timeless Tradition, Handcrafted with Love</h2>
                                <h2 style={{ "color": "white" }} class="mb-3">Elegance in Every Stitch</h2>
                                <a href="" class="btn btn-primary px-4 py-3 px-md-5  me-4 btn-border-radius">Get Started</a>
                                <a href="" class="btn btn-primary px-4 py-3 px-md-5 btn-border-radius">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid program  py-5">
                    <div class="container py-5">
                        <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ "max-width": "700px" }}>
                            <h4
                                class="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
                                Our Product</h4>
                            <h1 class="mb-5 display-3">We Offer An Exclusive Product For Kids</h1>
                        </div>
                        <div class="row g-5 justify-content-center">
                            {productImage.map((item, index) => (
                                <div className="col-md-6 col-lg-6 col-xl-4" key={index}>
                                    <div className="program-item rounded">
                                        <Link to={`/products/${item.id}`}>
                                            <div className="program-img position-relative">
                                                <div className="overflow-hidden">
                                                    <img src={item.img} className="img-fluid w-100" alt="Product" />
                                                </div>
                                                <div className="px-4 py-2 bg-primary text-white program-rate">{item.price}</div>
                                            </div>
                                            <div className="program-text bg-white px-4 pb-3">
                                                <div className="program-text-inner">
                                                    <a href="#" className="h4">{item.title}</a>
                                                    <p className="mt-3 mb-0">{item.description}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div class="container-fluid events py-5 bg-light">
                    <div class="container py-5">
                        <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ "max-width": "700px" }}>
                            <h4
                                class="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
                                Our Events</h4>
                            <h1 class="mb-5 display-3">Catalog</h1>
                        </div>
                        <div class="row g-5 justify-content-center">
                            {catalogImage.map((item, index) => (
                                <div class="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.1s">
                                    <div class="events-item bg-primary rounded">
                                        <div class="events-inner position-relative">
                                            <div class="events-img overflow-hidden position-relative">
                                                <img src={item.img}
                                                    class="img-fluid w-100 " alt="Image" />
                                                <div class="event-overlay">
                                                    <a href=""
                                                        data-lightbox="event-1"><i class="fas fa-search-plus text-white fa-2x"></i></a>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-between px-4 py-2 bg-secondary">
                                                <small class="text-white"><i class="fas fa-map-marker-alt me-1 text-primary"></i>
                                                    Hanoi</small>
                                            </div>
                                        </div>
                                        <div class="events-text p-4 border border-primary bg-white border-top-0 rounded-bottom">
                                            <a href="#" class="h4">Music & drawing workshop</a>
                                            <p class="mb-0 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
                                                purus consectetur,</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div class="container-fluid blog py-5">
                    <div class="container py-5">
                        <div class="mx-auto text-center wow fadeIn" data-wow-delay="0.1s" style={{ "max-width": "600px" }}>
                            <h4
                                class="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
                                Latest News & Blog</h4>
                            <h1 class="mb-5 display-3">Read Our Latest News & Blog</h1>
                        </div>
                        <div class="row g-5 justify-content-center">
                            <div class="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.1s">
                                <div class="blog-item rounded-bottom">
                                    <div class="blog-img overflow-hidden position-relative img-border-radius">
                                        <img src="img/blog-1.jpg" class="img-fluid w-100" alt="Image" />
                                    </div>
                                    <div
                                        class="d-flex justify-content-between px-4 py-3 bg-light border-bottom border-primary blog-date-comments">
                                        <small class="text-dark"><i class="fas fa-calendar me-1 text-dark"></i> 29 Nov 2023</small>
                                        <small class="text-dark"><i class="fas fa-comment-alt me-1 text-dark"></i> Comments
                                            (15)</small>
                                    </div>
                                    <div class="blog-content d-flex align-items-center px-4 py-3 bg-light">
                                        <div className="overflow-hidden rounded-circle rounded-top border border-primary">
                                            <img
                                                src="img/program-teacher.jpg"
                                                className="img-fluid rounded-circle p-2 rounded-top"
                                                alt="Image"
                                                style={{
                                                    width: '70px',
                                                    height: '70px',
                                                    borderStyle: 'dotted',
                                                    borderColor: 'var(--bs-primary) !important'
                                                }}
                                            />
                                        </div>
                                        <div class="ms-3">
                                            <h6 class="text-primary">Mary Mordern</h6>
                                            <p class="text-muted">Baby Care</p>
                                        </div>
                                    </div>
                                    <div class="px-4 pb-4 bg-light rounded-bottom">
                                        <div class="blog-text-inner">
                                            <a href="#" class="h4">How to pay attention to your child?</a>
                                            <p class="mt-3 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
                                                purus</p>
                                        </div>
                                        <div class="text-center">
                                            <a href="#" class="btn btn-primary text-white px-4 py-2 mb-3 btn-border-radius">View
                                                Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.3s">
                                <div class="blog-item rounded-bottom">
                                    <div class="blog-img overflow-hidden position-relative img-border-radius">
                                        <img src="img/blog-2.jpg" class="img-fluid w-100" alt="Image" />
                                    </div>
                                    <div
                                        class="d-flex justify-content-between px-4 py-3 bg-light border-bottom border-primary blog-date-comments">
                                        <small class="text-dark"><i class="fas fa-calendar me-1 text-dark"></i> 29 Nov 2023</small>
                                        <small class="text-dark"><i class="fas fa-comment-alt me-1 text-dark"></i> Comments
                                            (15)</small>
                                    </div>
                                    <div class="blog-content d-flex align-items-center px-4 py-3 bg-light">
                                        <div class="overflow-hidden rounded-circle rounded-top border border-primary">
                                            <img src="img/program-teacher.jpg" class="img-fluid rounded-circle p-2 rounded-top"
                                                alt=""
                                                style={{
                                                    width: '70px',
                                                    height: '70px',
                                                    borderStyle: 'dotted',
                                                    borderColor: 'var(--bs-primary) !important'
                                                }} />
                                        </div>
                                        <div class="ms-3">
                                            <h6 class="text-primary">Mary Mordern</h6>
                                            <p class="text-muted">Baby Care</p>
                                        </div>
                                    </div>
                                    <div class="px-4 pb-4 bg-light rounded-bottom">
                                        <div class="blog-text-inner">
                                            <a href="#" class="h4">Play outdoor sports with your child</a>
                                            <p class="mt-3 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
                                                purus</p>
                                        </div>
                                        <div class="text-center">
                                            <a href="#" class="btn btn-primary text-white px-4 py-2 mb-3 btn-border-radius">View
                                                Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-6 col-xl-4 wow fadeIn" data-wow-delay="0.5s">
                                <div class="blog-item rounded-bottom">
                                    <div class="blog-img overflow-hidden position-relative img-border-radius">
                                        <img src="img/blog-3.jpg" class="img-fluid w-100" alt="Image" />
                                    </div>
                                    <div
                                        class="d-flex justify-content-between px-4 py-3 bg-light border-bottom border-primary blog-date-comments">
                                        <small class="text-dark"><i class="fas fa-calendar me-1 text-dark"></i> 29 Nov 2023</small>
                                        <small class="text-dark"><i class="fas fa-comment-alt me-1 text-dark"></i> Comments
                                            (15)</small>
                                    </div>
                                    <div class="blog-content d-flex align-items-center px-4 py-3 bg-light">
                                        <div class="overflow-hidden rounded-circle rounded-top border border-primary">
                                            <img src="img/program-teacher.jpg" class="img-fluid rounded-circle p-2 rounded-top"
                                                alt=""
                                                style={{
                                                    width: '70px',
                                                    height: '70px',
                                                    borderStyle: 'dotted',
                                                    borderColor: 'var(--bs-primary) !important'
                                                }} />
                                        </div>
                                        <div class="ms-3">
                                            <h6 class="text-primary">Mary Mordern</h6>
                                            <p class="text-muted">Baby Care</p>
                                        </div>
                                    </div>
                                    <div class="px-4 pb-4 bg-light rounded-bottom">
                                        <div class="blog-text-inner">
                                            <a href="#" class="h4">How to make time for your kids?</a>
                                            <p class="mt-3 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
                                                purus</p>
                                        </div>
                                        <div class="text-center">
                                            <a href="#" class="btn btn-primary text-white px-4 py-2 mb-3 btn-border-radius">View
                                                Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid testimonial py-5">
                    <div className="container py-5">
                        <div
                            className="mx-auto text-center wow fadeIn"
                            data-wow-delay="0.1s"
                            style={{ maxWidth: "700px" }}
                        >
                            <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
                                Our Testimonials
                            </h4>
                            <h1 className="mb-5 display-3">Parents Say About Us</h1>
                        </div>

                        {/* Swiper Carousel */}
                        <Swiper
                            modules={[Pagination, Navigation]}
                            spaceBetween={20}
                            slidesPerView={3}
                            pagination={{ clickable: true }}
                            navigation
                            className="testimonial-carousel"
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="testimonial-item bg-light border border-primary p-4">
                                        <div className="p-4 position-relative">
                                            <i
                                                className="fa fa-quote-right fa-2x text-primary position-absolute"
                                                style={{ top: "15px", right: "15px" }}
                                            />
                                            <div className="border-top border-primary mt-4 pt-3">
                                                <img src={item.img} alt="testimonial" className="w-100" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </main>
        </>
    );
};

