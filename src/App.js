import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/home';
import Header from './component/header';
import Footer from './component/footer';
import ProductList from './page/product';
import NotFound from './page/notFound';
import AdminHomePage from './page/admin/homeAdmin';
import Faq from './page/faq';
import ProductDetail from './page/productDetail';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* {/* <Route path="/admin-home" element={<AdminHomePage />} /> 
        <Route path="/blogs" element={<BlogList />} />*/}
        <Route path="/products/:id" element={<ProductDetail />} /> {/* Đường dẫn chi tiết sản phẩm */}
        <Route path="/products" element={<ProductList />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
