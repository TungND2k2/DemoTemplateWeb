import React from 'react';
import { useParams } from 'react-router-dom';

const productDetailData = [
  {
    id: 1,
    img: "https://i.postimg.cc/d09R5zvK/boy-romper-2.jpg",
    price: "$20-25",
    title: "Boy Romper 2",
    description: "Comfortable and stylish romper.",
    categoryId: 1,
    material: "Cotton",
    size: "S, M, L",
    availability: "In stock",
    rating: 4.5
  },
  {
    id: 25,
    img: "https://i.postimg.cc/d09R5zvK/boy-romper-2.jpg",
    price: "$20-25",
    title: "Boy Romper 2",
    description: "Comfortable and stylish romper.",
    categoryId: 1,
    material: "Cotton",
    size: "S, M, L",
    availability: "In stock",
    rating: 4.5
  },
  {
    id: 3,
    img: "https://i.postimg.cc/d0JrZ4CN/IMG-1555.avif",
    price: "$20-30",
    title: "Stylish Outfit",
    description: "Trendy and lightweight fabric.",
    categoryId: 3,
    material: "Polyester",
    size: "M, L, XL",
    availability: "Out of stock",
    rating: 4.0
  },
  {
    id: 4,
    img: "https://i.postimg.cc/K8PtYd1g/IMG-1573.avif",
    price: "$25-30",
    title: "Casual Wear",
    description: "Soft and breathable material.",
    categoryId: 3,
    material: "Linen",
    size: "S, M, L",
    availability: "In stock",
    rating: 4.2
  },
  {
    id: 5,
    img: "https://i.postimg.cc/Y9q6ZbqL/V-y-1.jpg",
    price: "$30-40",
    title: "Elegant Dress",
    description: "Perfect for special occasions.",
    categoryId: 2,
    material: "Silk",
    size: "S, M, L",
    availability: "In stock",
    rating: 5.0
  },
  {
    id: 6,
    img: "https://i.postimg.cc/tJ8F1bdF/V-y-2.avif",
    price: "$30-40",
    title: "Modern Look",
    description: "Fashionable and durable.",
    categoryId: 2,
    material: "Polyester",
    size: "M, L",
    availability: "In stock",
    rating: 4.3
  },
  {
    id: 77,
    img: "https://i.postimg.cc/tJ8F1bdF/V-y-2.avif",
    price: "$30-40",
    title: "Modern Look",
    description: "Fashionable and durable.",
    categoryId: 2,
    material: "Polyester",
    size: "M, L",
    availability: "In stock",
    rating: 4.3
  }
];

const ProductDetail = () => {
  const { id } = useParams(); // Lấy id từ URL
  const product = productDetailData.find(product => product.id === parseInt(id));
  console.log(id)

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <section className="product-detail section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <img src={product.img} alt={product.title} className="img-fluid" />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h4>{product.price}</h4>
            <p><strong>Material:</strong> {product.material}</p>
            <p><strong>Size:</strong> {product.size}</p>
            <p><strong>Availability:</strong> {product.availability}</p>
            <p><strong>Rating:</strong> {product.rating} ★</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
