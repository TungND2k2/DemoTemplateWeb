import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProductById } from '../../redux/slices/product';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const location = useLocation();
  const [productState, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    dispatch(fetchProductById(id))
      .unwrap()
      .then((data) => {
        setProduct(data);
        setSelectedImage(data?.data?.imageUrl);
      })
      .catch((err) => console.error("Lỗi khi tải sản phẩm:", err));
  }, [dispatch, id]);

  if (!productState) {
    return (
      <div className="container py-5 text-center">
        <p className="text-muted">Product not found</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  const product = productState?.data;
  const imageUrls = product?.images || [product?.imageUrl];

  if (product?.isDeleted) {
    return (
      <div className="container py-5 text-center">
        <p className="text-muted">This product is no longer available.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <section className="product-detail section-padding py-5 bg-white">
      <div className="container">
        <div className="row g-3">
          {/* Left Column (Thumbnails) - Hidden on mobile */}
          <div className="col-md-2 d-none d-md-flex flex-column align-items-center">
            {imageUrls.map((img, index) => (
              <div key={index} className="mb-3 wow fadeIn" data-wow-delay={`${0.1 * (index + 1)}s`}>
                <img
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className="img-fluid rounded"
                  style={{
                    width: "100%",
                    maxWidth: "80px",
                    height: "auto",
                    objectFit: "cover",
                    cursor: "pointer",
                    border: selectedImage === img ? "2px solid var(--bs-primary)" : "1px solid #ddd",
                    transition: "border 0.3s ease",
                  }}
                  onClick={() => setSelectedImage(img)}
                />
              </div>
            ))}
          </div>

          {/* Middle Column: Main Image and Thumbnails on Mobile */}
          <div className="col-12 col-md-5">
            {/* Main Image */}
            <div className="main-image-container d-flex justify-content-center align-items-center wow fadeIn" data-wow-delay="0.1s">
              <div className="image-zoom-wrapper">
                <img
                  src={selectedImage}
                  alt={product?.name}
                  className="img-fluid rounded shadow-sm"
                  style={{
                    width: "100%",
                    maxHeight: "400px",
                    objectFit: "contain",
                    border: "1px solid #ddd", // Viền không bị zoom
                  }}
                />
              </div>
            </div>

            {/* Thumbnails on Mobile - Horizontal Scroll */}
            <div className="d-flex d-md-none flex-row overflow-x-auto mt-3 gap-2">
              {imageUrls.map((img, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={img}
                    alt={`Thumbnail ${index}`}
                    className="img-fluid rounded"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      cursor: "pointer",
                      border: selectedImage === img ? "2px solid var(--bs-primary)" : "1px solid #ddd",
                      transition: "border 0.3s ease",
                    }}
                    onClick={() => setSelectedImage(img)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Product Information */}
          <div className="col-12 col-md-5 wow fadeIn" data-wow-delay="0.2s">
            <h2 className="mb-3 soft-pink">{product?.name || "Unnamed Product"}</h2>
            <div className="d-flex align-items-center mb-3">
              <span className="text-warning me-2">
                {"★".repeat(Math.round(product?.attributes?.rating || 0))}
                {"☆".repeat(5 - Math.round(product?.attributes?.rating || 0))}
              </span>
              <span className="text-muted">
                ({product?.attributes?.reviews || 0} {product?.attributes?.reviews === 1 ? "review" : "reviews"})
              </span>
            </div>
            <p className="text-primary fw-bold fs-4 mb-3">${product?.price || "N/A"}</p>
            <div className="mb-4">
              <label className="fw-bold mb-2">Size:</label>
              <div className="d-flex flex-wrap gap-2">
                {product?.attributes?.size?.length > 0 ? (
                  product.attributes.size.map((size, index) => (
                    <button key={index} className="btn btn-outline-secondary btn-sm" style={{ minWidth: "50px" }}>
                      {size}
                    </button>
                  ))
                ) : (
                  <p className="text-muted">No sizes available</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <p><strong>Description:</strong> {product?.description || "This product has no description yet."}</p>
              <p><strong>Fabric:</strong> {product?.attributes?.material || "N/A"}</p>
              <p><strong>Technic:</strong> {product?.attributes?.technic || "Hand smocked"}</p>
              <p><strong>Label:</strong> {product?.attributes?.label || "PEPTIT"}</p>
            </div>
            <p className="text-success fw-bold mb-2">{product?.attributes?.availability || "READY TO SHIP"}</p>
            <p className="text-primary mb-4">
              <i className="bi bi-star-fill me-1"></i> Highest Quality Guarantee
            </p>
            <button className="btn btn-primary w-100 py-2">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;