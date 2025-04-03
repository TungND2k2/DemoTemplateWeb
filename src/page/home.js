import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/product';
import { fetchCatalogs } from '../redux/slices/catalog';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

export default function Home() {
    const dispatch = useDispatch();
    const { items: payloadProducts, status, error } = useSelector((state) => state.products);
    const { items: payloadCatalogs, status: catalogStatus, error: catalogError } = useSelector(
        (state) => state.catalogs
    );

    const products = payloadProducts?.data;
    const catalogs = payloadCatalogs?.data;

    useEffect(() => {
        dispatch(fetchProducts(12));
        dispatch(fetchCatalogs());
    }, [dispatch]);

    return (
        <>
            <main>
                {/* Hero Header Section */}
                <div className="container-fluid py-5 hero-header wow fadeIn bg-white" data-wow-delay="0.1s">
                    <div className="container py-5">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-7 col-md-12">
                                <h1
                                    className="display-4 mb-4 soft-pink wow fadeIn"
                                    data-wow-delay="0.2s" style={{ color: "#FF69B4" }}
                                >
                                    Timeless Tradition, Handcrafted with Love<br />
                                    Elegance in Every Stitch
                                </h1>
                                {/* <p
                                    className="lead text-muted mb-5 wow fadeIn"
                                    data-wow-delay="0.3s" style={{ color: "#FF69B4" }}
                                >
                                    Discover the art of handcrafted fashion, where tradition meets modern elegance.
                                </p> */}
                                <div className="d-flex flex-wrap gap-3">
                                    <a
                                        href="#"
                                        className="btn btn-outline-primary px-4 py-3 px-md-5 btn-border-radius wow fadeIn"
                                        data-wow-delay="0.5s"
                                    >
                                        Get Started
                                    </a>
                                    <a
                                        href="#"
                                        className="btn btn-outline-primary px-4 py-3 px-md-5 btn-border-radius wow fadeIn"
                                        data-wow-delay="0.5s"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Product Section */}
                <div className="container-fluid program py-5 bg-white">
                    <div className="container py-5">
                        {/* Header Section with WOW Animation */}
                        <div
                            className="mx-auto text-center wow fadeIn"
                            data-wow-delay="0.1s"
                            style={{ maxWidth: "700px" }}
                        >
                            <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 rounded">
                                Our Product
                            </h4>
                            <h1 className="mb-5 display-4">We Offer An Exclusive Product For Kids</h1>
                        </div>

                        {/* Sorting Dropdown */}
                        {/* <div className="d-flex justify-content-end mb-4">
                            <div className="dropdown">
                                <button
                                    className="btn btn-outline-secondary dropdown-toggle"
                                    type="button"
                                    id="sortDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Sort by: Best Selling
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="sortDropdown">
                                    <li>
                                        <a className="dropdown-item" href="#">Best Selling</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Price: Low to High</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Price: High to Low</a>
                                    </li>
                                </ul>
                            </div>
                        </div> */}

                        {/* Product Grid with WOW Animation */}
                        <div className="row g-4 justify-content-center">
                            {products && products.length > 0 ? (
                                products.map((item, index) => (
                                    <div
                                        className="col-6 col-md-4 col-lg-3 wow fadeIn"
                                        data-wow-delay={`${0.1 * (index + 1)}s`}
                                        key={index}
                                    >
                                        <div className="card h-100 border-0 shadow-sm">
                                            <Link to={`/products/${item._id}`} className="text-decoration-none">
                                                {/* Product Image with Hover Effect */}
                                                <div className="card-img-top overflow-hidden">
                                                    <img
                                                        src={item.imageUrl}
                                                        className="img-fluid w-100 product-image"
                                                        alt={item.name}
                                                        style={{
                                                            maxHeight: "250px",
                                                            objectFit: "cover",
                                                        }}
                                                    />
                                                </div>

                                                {/* Product Details */}
                                                <div className="card-body p-3">
                                                    <h5 className="card-title text-dark">{item.name}</h5>
                                                    <div className="d-flex align-items-center mb-2">
                                                        <span className="text-warning">
                                                            {"★".repeat(Math.round(item?.attributes?.rating || 5))}
                                                        </span>
                                                        {/* <span className="ms-2 text-muted">No review</span> */}
                                                    </div>
                                                    <p className="text-muted mb-1">
                                                        <strong>Size: </strong>
                                                        {Array.isArray(item?.attributes?.size)
                                                            ? item.attributes.size.map((size) => `${size}`).join(" . ")
                                                            : "6M, 12M, 18M, 2T, 3T, 4T, 5T, 6T"}
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center">No products available.</p>
                            )}
                        </div>
                    </div>

                    {/* Add Custom CSS for Hover Effect and Font Size */}
                    <style>
                        {`
      .product-image {
        transition: transform 0.3s ease;
      }
      @media (min-width: 768px) {
        .product-image:hover {
          transform: scale(1.05); /* Zoom chỉ áp dụng trên desktop/tablet */
        }
      }
      @media (max-width: 576px) {
        .product-image {
          max-height: 200px; /* Giảm chiều cao ảnh trên mobile */
        }
        .card-title {
          font-size: 1rem; /* Giảm cỡ chữ tên sản phẩm trên mobile */
        }
      }
    `}
                    </style>
                </div>

                {/* Catalog Section */}
                <div className="container-fluid events py-5 bg-white">
                    <div className="container py-5">
                        <div
                            className="mx-auto text-center wow fadeIn"
                            data-wow-delay="0.1s"
                            style={{ maxWidth: "700px" }}
                        >
                            <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
                                Our Catalog
                            </h4>
                            <h1 className="mb-5 display-3">Catalog</h1>
                        </div>
                        <div className="row g-4 justify-content-center">
                            {catalogs && catalogs.length > 0 ? (
                                catalogs.map((item, index) => (
                                    <div
                                        className="col-6 col-md-4 col-lg-3 wow fadeIn"
                                        data-wow-delay={`${0.1 * (index + 1)}s`}
                                        key={index}
                                    >
                                        <div className="card h-100 border-0 shadow-sm">
                                            <Link to={`/catalogs/${item._id}`} className="text-decoration-none">
                                                {/* Catalog Image */}
                                                <div className="card-img-top overflow-hidden position-relative" style={{ height: "250px" }}>
                                                    <img
                                                        src={item.imageUrl}
                                                        className="img-fluid w-100 h-100 catalog-image"
                                                        alt={item.name}
                                                        style={{ objectFit: "cover" }}
                                                    />
                                                    {/* Overlay with Magnifying Glass */}
                                                    <div className="event-overlay position-absolute top-50 start-50 translate-middle">
                                                        <a href={item.imageUrl} data-lightbox={`catalog-${index}`}>
                                                            <i className="fas fa-search-plus text-white fa-2x"></i>
                                                        </a>
                                                    </div>
                                                </div>

                                                {/* Catalog Details */}
                                                <div className="card-body p-3">
                                                    <h5 className="card-title text-dark mb-2">{item.name}</h5>
                                                    <p className="text-muted mb-2" style={{ fontSize: "0.9rem" }}>
                                                        {item.description.length > 100
                                                            ? `${item.description.substring(0, 100)}...`
                                                            : item.description}
                                                    </p>
                                                    <small className="text-primary">
                                                        <i className="fas fa-map-marker-alt me-1"></i>
                                                        Hanoi
                                                    </small>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12 text-center">
                                    <p className="text-muted">No catalogs available.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Custom CSS for Hover Effect */}
                    <style>
                        {`
      .catalog-image {
        transition: transform 0.3s ease;
      }
      .catalog-image:hover {
        transform: scale(1.05);
      }
      .card:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        transition: box-shadow 0.3s ease;
      }
      .event-overlay {
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .card:hover .event-overlay {
        opacity: 1;
      }
      .card:hover .catalog-image::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(77, 101, 249, 0.7);
        transition: background 0.3s ease;
      }
    `}
                    </style>
                </div>

                {/* Testimonial Section */}
                <div className="container-fluid testimonial py-5 bg-white">
                    <div className="container py-5">
                        <div
                            className="mx-auto text-center wow fadeIn"
                            data-wow-delay="0.1s"
                            style={{ maxWidth: "700px" }}
                        >
                            <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
                                Our Testimonials
                            </h4>
                            <h1 className="mb-5 display-3">Customers say about us</h1>
                        </div>

                        {/* Swiper Carousel */}
                        <Swiper
                            modules={[Pagination, Navigation]}
                            spaceBetween={20}
                            slidesPerView={3}
                            pagination={{ clickable: true }}
                            navigation
                            className="testimonial-carousel"
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 15,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                            }}
                        >
                            {testimonials.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="testimonial-item bg-white border border-primary p-4">
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
}