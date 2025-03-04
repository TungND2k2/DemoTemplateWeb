import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProductById } from '../redux/slices/product';


const ProductDetail = () => {
  const dispatch = useDispatch(); 
  const { id } = useParams(); // Lấy ID từ URL
  const [productState, setProduct] = useState(null); // State để lưu sản phẩm
  console.log(id)
  useEffect(() => {
    dispatch(fetchProductById(id))
      .unwrap()
      .then((data) => setProduct(data)) // Cập nhật state sau khi lấy dữ liệu
      .catch((err) => console.error("Lỗi khi tải sản phẩm:", err));
  }, [dispatch, id]);

  if (!productState) {
    return <p>Product not found</p>;
  }
  const product = productState?.data;
  return (
    <section className="product-detail section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            {product ? (
              <div>
                <img 
                  src={product.imageUrl}
                  alt={product.title}
                  className="img-fluid"
                />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h4>{product.price}</h4>
                <p>
                  <strong>Material:</strong> {product?.attributes?.material}
                </p>
                <p>
                  <strong>Size:</strong> {product?.attributes?.size}
                </p>
                <p>
                  <strong>Availability:</strong> {product?.attributes?.availability}
                </p>
                <p>
                  <strong>Rating:</strong> {product?.attributes?.rating} ★
                </p>
              </div>
            ) : (
              <p>...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
