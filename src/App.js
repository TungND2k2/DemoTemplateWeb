import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './page/home';
import Header from './component/header';
import Footer from './component/footer';
import ProductList from './page/product';
import NotFound from './page/notFound';
import AdminHomePage from './page/admin/homeAdmin';
import Faq from './page/faq';
import ProductDetail from './page/productDetail';
import Login from './page/admin/login';

// Component ProtectedRoute để bảo vệ các tuyến đường
const ProtectedRoute = ({ element }) => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  const admin = localStorage.getItem("admin"); // Lấy quyền admin từ localStorage

  // Chỉ cho phép truy cập nếu có user, token và admin === "true"
  return user && token && admin === "true" ? element : <Navigate to="/login" replace />;
};


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        {/* Trang admin được bảo vệ bởi ProtectedRoute */}
        <Route path="/admin" element={<ProtectedRoute element={<AdminHomePage />} />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;