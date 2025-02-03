import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    // Danh mục sản phẩm
    const categories = [
        { id: 1, name: "Boy Rompers" },
        { id: 2, name: "Girl Dresses" },
        { id: 3, name: "Casual Wear" }
    ];

    // Sản phẩm chia theo danh mục
    const products = [
        { id: 1, img: "https://i.postimg.cc/d09R5zvK/boy-romper-2.jpg", price: "$20-25", title: "Boy Romper 2", description: "Comfortable and stylish romper.", categoryId: 1 },
        { id: 25, img: "https://i.postimg.cc/d09R5zvK/boy-romper-2.jpg", price: "$20-25", title: "Boy Romper 2", description: "Comfortable and stylish romper.", categoryId: 1 },
        { id: 11, img: "https://i.postimg.cc/d09R5zvK/boy-romper-2.jpg", price: "$20-25", title: "Boy Romper 2", description: "Comfortable and stylish romper.", categoryId: 1 },
        { id: 3, img: "https://i.postimg.cc/d0JrZ4CN/IMG-1555.avif", price: "$20-30", title: "Stylish Outfit", description: "Trendy and lightweight fabric.", categoryId: 3 },
        { id: 66, img: "https://i.postimg.cc/d0JrZ4CN/IMG-1555.avif", price: "$20-30", title: "Stylish Outfit", description: "Trendy and lightweight fabric.", categoryId: 3 },
        { id: 4, img: "https://i.postimg.cc/K8PtYd1g/IMG-1573.avif", price: "$25-30", title: "Casual Wear", description: "Soft and breathable material.", categoryId: 3 },
        { id: 5, img: "https://i.postimg.cc/Y9q6ZbqL/V-y-1.jpg", price: "$30-40", title: "Elegant Dress", description: "Perfect for special occasions.", categoryId: 2 },
        { id: 6, img: "https://i.postimg.cc/tJ8F1bdF/V-y-2.avif", price: "$30-40", title: "Modern Look", description: "Fashionable and durable.", categoryId: 2 },
        { id: 77, img: "https://i.postimg.cc/tJ8F1bdF/V-y-2.avif", price: "$30-40", title: "Modern Look", description: "Fashionable and durable.", categoryId: 2 },
    ];

    return (
        <section className="products section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="mb-5" class="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">Product Categories</h2>
                    </div>

                    {categories.map((category) => (
                        <div key={category.id} className="col-12">
                            <h3 class="text-primary" className="mb-4">{category.name}</h3>
                            <div className="row">
                                {products
                                    .filter(product => product.categoryId === category.id)
                                    .map((product) => (
                                        <div className="col-lg-4 col-md-6 col-12 mb-3" key={product.id}>
                                            <div className="product-thumb">
                                                <Link to={`/products/${product.id}`}>
                                                    <img
                                                        src={product.img}
                                                        className="img-fluid product-image"
                                                        alt={product.title}
                                                    />
                                                </Link>

                                                <div className="product-info d-flex">
                                                    <div>
                                                        <h5 className="product-title mb-0">
                                                            <a href="product-detail.html" className="product-title-link">
                                                                {product.title}
                                                            </a>
                                                        </h5>
                                                        <p className="product-p">{product.description}</p>
                                                    </div>

                                                    <small className="product-price text-muted ms-auto">
                                                        {product.price}
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductList;
