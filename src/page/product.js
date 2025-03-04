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
    console.log(products)
    useEffect(() => {
        dispatch(fetchProducts()); // Gửi action để lấy danh sách sản phẩm khi component mount
        dispatch(fetchCategories()); // Gửi action lấy danh sách danh mục
    }, [dispatch]);

    return (
        <section className="products section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="mb-5" class="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">Product Categories</h2>
                    </div>

                    {categories && categories.length > 0 && categories.map((category) => (
                    <div key={category.id} className="col-12">
                        <h3 class="text-primary" className="mb-4">{category.name}</h3>
                        <div className="row">
                            {products && products.length > 0 && products
                                .filter(product => product.idCategory === category._id)
                                .map((product) => 
                                    (
                                    <div className="col-lg-4 col-md-6 col-12 mb-3" key={product.id}>
                                        <div className="product-thumb">
                                            <Link to={`/products/${product._id}`}>
                                                <img
                                                    src={product.imageUrl}
                                                    className="img-fluid product-image"
                                                    alt={product.name}
                                                />
                                            </Link>

                                            <div className="product-info d-flex">
                                                <div>
                                                    <h5 className="product-title mb-0">
                                                        <a href="product-detail.html" className="product-title-link">
                                                            {product.name}
                                                        </a>
                                                    </h5>
                                                    <p className="product-p">{product.description}</p>
                                                </div>

                                                <small className="product-price text-muted ms-auto">
                                                    $ {product.price}
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
