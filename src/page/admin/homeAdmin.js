import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AdminHomePage = () => {
  const userInfo = useSelector((state) => state.user);
  console.log(userInfo);

  // Dữ liệu giả cho thống kê và sản phẩm
  const stats = {
    users: 120,
    orders: 75,
    revenue: 4500,
    products: 250,
  };

  const products = [
    {
      id: 1,
      name: 'Gaming Mouse',
      description: 'High-precision gaming mouse with RGB lighting.',
      price: 59.99,
      quantity: 150,
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      name: 'Mechanical Keyboard',
      description: 'Durable keyboard with customizable keys.',
      price: 129.99,
      quantity: 85,
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 3,
      name: 'Wireless Headphones',
      description: 'Noise-cancelling headphones with long battery life.',
      price: 199.99,
      quantity: 60,
      image: 'https://via.placeholder.com/100',
    },
  ];

  return (
    <main className="admin-homepage">
      <section className="dashboard-header section-padding">
        <div className="container">
          <h1 className="text-center mb-4">Admin Dashboard</h1>
          <p className="text-center">Welcome, {userInfo?.email || 'Admin'}!</p>

          <div className="row">
            {/* Widget - Users */}
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <div className="widget bg-primary text-white p-4 rounded shadow">
                <h3 className="widget-title">Users</h3>
                <p className="widget-value" style={{ color: '#fff' }}>{stats.users}</p>
                <Link to="/admin/users" className="widget-link">
                  Manage Users
                </Link>
              </div>
            </div>

            {/* Widget - Orders */}
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <div className="widget bg-success text-white p-4 rounded shadow">
                <h3 className="widget-title">Orders</h3>
                <p className="widget-value" style={{ color: '#fff' }}>{stats.orders}</p>
                <Link to="/admin/orders" className="widget-link">
                  View Orders
                </Link>
              </div>
            </div>

            {/* Widget - Revenue */}
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <div className="widget bg-warning text-white p-4 rounded shadow">
                <h3 className="widget-title">Revenue</h3>
                <p className="widget-value" style={{ color: '#fff' }}>${stats.revenue}</p>
                <Link to="/admin/revenue" className="widget-link">
                  View Revenue
                </Link>
              </div>
            </div>

            {/* Widget - Products */}
            <div className="col-lg-3 col-md-6 col-12 mb-4">
              <div className="widget bg-danger text-white p-4 rounded shadow">
                <h3 className="widget-title">Products</h3>
                <p className="widget-value" style={{ color: '#fff' }}>{stats.products}</p>
                <Link to="/admin/products" className="widget-link">
                  Manage Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard-table section-padding">
        <div className="container">
          <h2>Products</h2>
          {/* Table for Products */}
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="img-thumbnail"
                        style={{ width: '100px', height: 'auto' }}
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>{product.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminHomePage;
