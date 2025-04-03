import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/product';
import { fetchCategories } from '../redux/slices/category';

const ProductList = () => {
    const dispatch = useDispatch();
    const { items: payloadProducts } = useSelector((state) => state.products);
    const { items: payloadCategories } = useSelector((state) => state.categories);

    const products = payloadProducts.data;
    const categories = payloadCategories.data; 
    console.log(products);

    useEffect(() => {
        dispatch(fetchProducts()); // Gửi action để lấy danh sách sản phẩm khi component mount
        dispatch(fetchCategories()); // Gửi action lấy danh sách danh mục
    }, [dispatch]);

    return (
        <section className="products section-padding py-5 bg-white">
            <div className="container">
                <div className="row">
                    {/* Section Header */}
                    <div className="col-12 text-center wow fadeIn" data-wow-delay="0.1s">
                        <h2
                            className="text-primary mb-5 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius"
                        >
                            Product Categories
                        </h2>
                    </div>

                    {/* Categories and Products */}
                    {categories && categories.length > 0 ? (
                        categories.map((category) => (
                            <div key={category.id} className="col-12 mb-5">
                                {/* Category Title */}
                                <h3 className="text-primary mb-4 wow fadeIn" data-wow-delay="0.2s">
                                    {category.name}
                                </h3>

                                {/* Products Grid */}
                                <div className="row g-4">
                                    {products && products.length > 0 ? (
                                        products
                                            .filter((product) => product.idCategory === category._id)
                                            .map((product) => (
                                                <div
                                                    className="col-6 col-md-4 col-lg-3 wow fadeIn"
                                                    data-wow-delay={`${0.1 * (products.indexOf(product) + 1)}s`}
                                                    key={product.id}
                                                >
                                                    <div className="card h-100 border-0 shadow-sm">
                                                        <Link to={`/products/${product._id}`} className="text-decoration-none">
                                                            {/* Product Image */}
                                                            <div className="card-img-top overflow-hidden" style={{ height: "250px" }}>
                                                                <img
                                                                    src={product.imageUrl}
                                                                    className="img-fluid w-100 h-100 product-image"
                                                                    alt={product.name}
                                                                    style={{ objectFit: "cover" }}
                                                                />
                                                            </div>

                                                            {/* Product Details */}
                                                            <div className="card-body p-3">
                                                                <h5 className="card-title text-dark mb-2">{product.name}</h5>
                                                                <p className="text-muted mb-2" style={{ fontSize: "0.9rem" }}>
                                                                    {product.description.length > 100
                                                                        ? `${product.description.substring(0, 100)}...`
                                                                        : product.description}
                                                                </p>
                                                                <p className="text-primary fw-bold mb-0">
                                                                    ${product.price}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ))
                                    ) : (
                                        <div className="col-12 text-center">
                                            <p className="text-muted">No products available in this category.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center">
                            <p className="text-muted">No categories available.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Custom CSS for Hover Effect and Font Size */}
            <style>
                {`
                    .product-image {
                        transition: transform 0.3s ease;
                    }
                    .product-image:hover {
                        transform: scale(1.05);
                    }
                    .card:hover {
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
                        transition: box-shadow 0.3s ease;
                    }
                    @media (max-width: 576px) {
                        .card-title {
                            font-size: 1rem; /* Giảm cỡ chữ tên sản phẩm trên mobile */
                        }
                    }
                `}
            </style>
        </section>
    );
};

export default ProductList;