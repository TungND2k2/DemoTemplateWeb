
export default function Footer() {
    return (
        <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div class="footer-item">
                            <h2 class="fw-bold mb-3"><span class="text-primary mb-0">Baby</span><span
                                class="text-secondary">Smocks</span></h2>
                            <p class="mb-4">We offer cute, soft, and comfortable smocked outfits for your little ones. Crafted with delicate designs and safe materials, our products ensure your baby stays stylish and cozy throughout the day.</p>
                            {/* <div class="border border-primary p-3 rounded bg-light"> */}
                                {/* <h5 class="mb-3">Newsletter</h5>
                                <div className="position-relative mx-auto border border-primary rounded"
                                    style={{ maxWidth: '400px' }}>
                                    <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text"
                                        placeholder="Your email" />
                                    <button type="button"
                                        class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2 text-white">SignUp</button>
                                </div> */}
                            {/* </div> */}
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div class="footer-item">
                            <div className="d-flex flex-column p-4 ps-5 text-dark border border-primary"
                                style={{ borderRadius: '50% 20% / 10% 40%' }}>
                                <p>Monday: 8am to 5pm</p>
                                <p>Tuesday: 8am to 5pm</p>
                                <p>Wednes: 8am to 5pm</p>
                                <p>Thursday: 8am to 5pm</p>
                                <p>Friday: 8am to 5pm</p>
                                <p>Saturday: 8am to 5pm</p>
                                <p class="mb-0">Sunday: 8am to 5pm</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4 col-xl-3">
                        <div class="footer-item">
                            <h4
                                class="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-2 title-border-radius">
                                LOCATION</h4>
                            <div class="d-flex flex-column align-items-start">
                                <a href="" class="text-body mb-4"><i class="fa fa-map-marker-alt text-primary me-2"></i>41 Le Hong Phong, phuong Doi Can, Ha Nọi</a>
                                <a href="" class="text-start rounded-0 text-body mb-4"><i
                                    class="fa fa-phone-alt text-primary me-2"></i>+84 877336320</a>
                                <a href="" class="text-start rounded-0 text-body mb-4"><i
                                    class="fas fa-envelope text-primary me-2"></i>peptitelegance@gmail.com</a>
                                <a href="" class="text-start rounded-0 text-body mb-4"><i
                                    class="fa fa-clock text-primary me-2"></i> 24/7 Hours Service</a>
                                <div class="footer-icon d-flex">
                                    <a class="btn btn-primary btn-sm-square me-3 rounded-circle text-white" href="https://web.facebook.com/people/Peptit-Elegance-Smock-Wholesales-Factory/61567181037933/"><i
                                        class="fab fa-facebook-f"></i></a>
                                    {/* <a class="btn btn-primary btn-sm-square me-3 rounded-circle text-white" href=""><i
                                        class="fab fa-twitter"></i></a> */}
                                    <a href="https://www.instagram.com/peptelegance/profilecard/" class="btn btn-primary btn-sm-square me-3 rounded-circle text-white"><i
                                        class="fab fa-instagram"></i></a>
                                    {/* <a href="#" class="btn btn-primary btn-sm-square rounded-circle text-white"><i
                                        class="fab fa-linkedin-in"></i></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

