export default function Footer() {
    return (
        <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    {/* Left Column: Contact Info and Social Media (1/4 width) */}
                    <div className="col-lg-3">
                        <div className="footer-item">
                            <h2 className="fw-bold mb-3">
                                <span className="text-primary">Peptit Elegance</span>
                                {/* <sup className="text-secondary">®</sup> */}
                                {/* <span className="text-secondary"> SINCE 2007</span> */}
                            </h2>
                            <p className="mb-2">
                                <strong>PHONE:</strong> 84 877336320
                            </p>
                            <p className="mb-4">
                                <strong>EMAIL:</strong> peptitelegance@gmail.com
                            </p>
                            <div className="footer-icon d-flex">
                                <a
                                    className="btn btn-primary btn-sm-square me-3 rounded-circle text-white"
                                    href="https://web.facebook.com"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a
                                    className="btn btn-primary btn-sm-square me-3 rounded-circle text-white"
                                    href="https://www.instagram.com"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a
                                    className="btn btn-primary btn-sm-square me-3 rounded-circle text-white"
                                    href="https://www.youtube.com"
                                >
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Other Sections (3/4 width) */}
                    <div className="col-lg-9">
                        {/* First Row: Company, Support, Account */}
                        <div className="row g-5">
                            <div className="col-md-4">
                                <div className="footer-item">
                                    <h4 className="text-primary mb-4">COMPANY</h4>
                                    <div className="d-flex flex-column">
                                        <a href="" className="text-body mb-2">Our Story</a>
                                        <a href="" className="text-body mb-2">Location</a>
                                        <a href="" className="text-body mb-2">Contact Us</a>
                                        <a href="" className="text-body mb-2">About us</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer-item">
                                    <h4 className="text-primary mb-4">SUPPORT</h4>
                                    <div className="d-flex flex-column">
                                        <a href="" className="text-body mb-2">Shipping Quotation</a>
                                        <a href="" className="text-body mb-2">Privacy Policy</a>
                                        <a href="" className="text-body mb-2">FAQS</a>
                                        <a href="" className="text-body mb-2">Payment Option</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer-item">
                                    <h4 className="text-primary mb-4">ACCOUNT</h4>
                                    <div className="d-flex flex-column">
                                        <a href="" className="text-body mb-2">Checkout</a>
                                        <a href="" className="text-body mb-2">My Wishlist</a>
                                        <a href="" className="text-body mb-2">Shopping Cart</a>
                                        <a href="" className="text-body mb-2">My Account</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Row: Babeeni Foundation, Our Brand, Payment Methods */}
                        <div className="row g-5 mt-3">
                            <div className="col-md-4">
                                <div className="footer-item">
                                    <h4 className="text-primary mb-4">FOUNDATION</h4>
                                    <div className="d-flex flex-column">
                                        <a href="" className="text-body mb-2">Charity Events</a>
                                        <a href="" className="text-body mb-2">Activity</a>
                                        <a href="" className="text-body mb-2">General Information</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer-item">
                                    <h4 className="text-primary mb-4">OUR BRAND</h4>
                                    <div className="d-flex flex-column">
                                        <a href="" className="text-body mb-2">Babeeni</a>
                                        <a href="" className="text-body mb-2">Lewee</a>
                                        <a href="" className="text-body mb-2">Babeenioverstock</a>
                                        <a href="" className="text-body mb-2">Marry Le</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="footer-item">
                                    <h4 className="text-primary mb-4">PAYMENT METHODS</h4>
                                    <div className="d-flex flex-column">
                                        <p className="text-body mb-2">VISA</p>
                                        <p className="text-body mb-2">Mastercard</p>
                                        <p className="text-body mb-2">Bank wire transfer, PayPal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}