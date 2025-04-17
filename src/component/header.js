import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

export default function Header() {
    const userInfo = useSelector((state) => state.user);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const admin = localStorage.getItem('admin');
    const isLoggedIn = token && token !== 'null' && token.trim() !== '';

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('admin');
        navigate('/home');
    };

    return (
        <div className="container-fluid border-bottom bg-light wow fadeIn" data-wow-delay="0.1s">
            {/* Top Bar */}
            <div className="container topbar bg-primary d-none d-lg-block py-2" style={{ borderRadius: '0 40px' }}>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="top-info ps-2">
                        <small className="me-3">
                            <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                            <a href="#" className="text-white">41 Le Hong Phong, phuong Doi Can, Ha Noi</a>
                        </small>
                        <small className="me-3">
                            <i className="fas fa-envelope me-2 text-secondary"></i>
                            <a href="#" className="text-white">peptitelegance@gmail.com</a>
                        </small>
                    </div>
                    <div className="top-link pe-2 d-flex align-items-center">
                        <a
                            href="https://web.facebook.com/people/Peptit-Elegance-Smock-Wholesales-Factory/61567181037933/"
                            className="btn btn-light btn-sm-square rounded-circle me-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-facebook-f text-secondary"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/peptelegance/profilecard/"
                            className="btn btn-light btn-sm-square rounded-circle me-2"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-instagram text-secondary"></i>
                        </a>
                        {admin === 'true' && isLoggedIn ? (
                            <>
                                <Link
                                    to="/admin"
                                    className="btn btn-light btn-sm-square rounded-circle me-2"
                                    title="Admin Dashboard"
                                >
                                    <i className="fas fa-user-cog text-secondary"></i>
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="btn btn-light btn-sm-square rounded-circle"
                                    title="Logout"
                                >
                                    <i className="fas fa-sign-out-alt text-secondary"></i>
                                </button>
                            </>
                        ) : (
                            <Link
                                to="/login"
                                className="btn btn-light btn-sm-square rounded-circle"
                                title="Login"
                            >
                                <i className="fas fa-user text-secondary"></i>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <div className="container px-0">
                <nav className="navbar navbar-light navbar-expand-xl py-3">
                    <Link to="/" className="navbar-brand">
                        <h1 className="text-primary display-6">
                            Peptit <span className="text-secondary">Elegance</span>
                        </h1>
                    </Link>
                    <button
                        className="navbar-toggler py-2 px-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            <Link to="/products" className="nav-item nav-link">Product</Link>
                            <Link to="/fabrics" className="nav-item nav-link">Fabric</Link>
                            <div className="nav-item dropdown">
                                <a
                                    href="#"
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Accessories
                                </a>
                                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                    <Link to="/accessories/buttons" className="dropdown-item">Buttons</Link>
                                    <Link to="/accessories/thread" className="dropdown-item">Thread </Link>
                                    <Link to="/accessories/lace" className="dropdown-item">Lace</Link>
                                </div>
                            </div>
                            <Link to="/faq" className="nav-item nav-link">FAQ</Link>
                            <Link to="/blogs" className="nav-item nav-link">Blog</Link>
                        </div>
                        <div className="d-flex align-items-center me-4">
                            <div id="phone-tada" className="d-flex align-items-center justify-content-center me-3">
                                <a
                                    href="https://wa.me/84877336320"
                                    className="position-relative wow tada"
                                    data-wow-delay=".9s"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fa fa-phone-alt text-primary fa-2x"></i>
                                    <div className="position-absolute" style={{ top: '-7px', left: '20px' }}>
                                        <span><i className="fa fa-comment-dots text-secondary"></i></span>
                                    </div>
                                </a>
                            </div>
                            <div className="d-flex flex-column pe-3 border-end border-primary">
                                <span className="text-primary">Have any questions?</span>
                                <a href="https://wa.me/84877336320" target="_blank" rel="noopener noreferrer">
                                    <span className="text-secondary">Free: +84 877336320</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};