import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Header() {
    const userInfo = useSelector((state) => state.user);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const admin = localStorage.getItem('admin');
    const isLoggedIn = token && token !== 'null' && token.trim() !== '';
    console.log(isLoggedIn)
    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        navigate('/home'); 
    };
    return (
        <div class="container-fluid border-bottom bg-light wow fadeIn" data-wow-delay="0.1s">
            <div class="container topbar bg-primary d-none d-lg-block py-2" style={{ "border-radius": "0 40px" }}>
                <div class="d-flex justify-content-between">
                    <div class="top-info ps-2">
                        <small class="me-3"><i class="fas fa-map-marker-alt me-2 text-secondary"></i> <a href="#"
                            class="text-white">41 Le Hong Phong, phuong Doi Can, Ha Nọi</a></small>
                        <small class="me-3"><i class="fas fa-envelope me-2 text-secondary"></i><a href="#"
                            class="text-white">peptitelegance@gmail.com</a></small>
                    </div>
                    <div class="top-link pe-2">
                        <a href="https://web.facebook.com/people/Peptit-Elegance-Smock-Wholesales-Factory/61567181037933/"
                            class="btn btn-light btn-sm-square rounded-circle"><i
                                class="fab fa-facebook-f text-secondary"></i></a>
                        <a href="https://www.instagram.com/peptelegance/profilecard/"
                            class="btn btn-light btn-sm-square rounded-circle"><i
                                class="fab fa-instagram text-secondary"></i></a>
                        {admin === "true" && (
                            isLoggedIn ? (
                                <>
                                    <Link
                                        to="/admin"
                                        className="btn btn-light btn-sm-square rounded-circle me-2"
                                        title="Admin"
                                    >
                                        <i className="fas fa-user-cog text-secondary"></i> {/* Icon Admin */}
                                    </Link>
                                    <Link
                                        to="/"
                                        className="btn btn-light btn-sm-square rounded-circle"
                                        title="Logout"
                                        onClick={handleLogout}
                                    >
                                        <i className="fas fa-sign-out-alt text-secondary"></i> {/* Icon Logout */}
                                    </Link>
                                </>
                            ) : (
                                <Link
                                    to="/login"
                                    className="btn btn-light btn-sm-square rounded-circle"
                                    title="Login"
                                >
                                    <i className="fas fa-user text-secondary"></i> {/* Icon Login */}
                                </Link>
                            )
                        )}

                    </div>
                </div>
            </div>
            <div class="container px-0">
                <nav class="navbar navbar-light navbar-expand-xl py-3">
                    <a href="/" class="navbar-brand">
                        <h1 class="text-primary display-6">Peptit <span class="text-secondary">Elegance</span></h1>
                    </a>
                    <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars text-primary"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav mx-auto">
                            <a href="/" className="nav-item nav-link active">Home</a>
                            <a href="/products" class="nav-item nav-link">Product</a>
                            <a href="/faq" class="nav-item nav-link">FAQ</a>
                            {/* <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div class="dropdown-menu m-0 bg-secondary rounded-0">
                                    <a href="blog.html" class="dropdown-item">Our Blog</a>
                                </div>
                            </div> */}
                            {/* <a href="contact.html" class="nav-item nav-link">Contact</a> */}
                        </div>
                        <div class="d-flex me-4">
                            <div id="phone-tada" class="d-flex align-items-center justify-content-center">
                                <a href="" class="position-relative wow tada" data-wow-delay=".9s">
                                    <i class="fa fa-phone-alt text-primary fa-2x me-4"></i>
                                    <div class="position-absolute" style={{ "top": "-7px", "left": "20px" }}>
                                        <span><i class="fa fa-comment-dots text-secondary"></i></span>
                                    </div>
                                </a>
                            </div>
                            <div class="d-flex flex-column pe-3 border-end border-primary">
                                <span class="text-primary">Have any questions?</span>
                                <a href="https://wa.me/84877336320" target="_blank">
                                    <span class="text-secondary">Free: +84 877336320</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

