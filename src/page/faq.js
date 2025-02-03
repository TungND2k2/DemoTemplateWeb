import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/slices/user'
import { useNavigate } from 'react-router-dom';

const Faq = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    return (
        <div>
            <header class="site-header section-padding d-flex justify-content-center align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 col-12">
                            <h1>
                                <span class="d-block text-primary">Your favorite questions</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>

            <section class="faq section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-12">
                            <h2>General Info.</h2>

                            <div class="accordion" id="accordionGeneral">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionGeneralOne" aria-expanded="true" aria-controls="accordionGeneralOne">
                                            What makes Peptit Elegance’s smocked and hand-embroidered dresses special?
                                        </button>
                                    </h2>

                                    <div id="accordionGeneralOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionGeneral">
                                        <div class="accordion-body">
                                            <p class="large-paragraph"><strong>Peptit Elegance</strong> creates handmade dresses with unique charm in every stitch. Each piece is carefully crafted, ensuring that no two dresses are alike, reflecting the individuality and craftsmanship of our artisans.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionGeneralTwo" aria-expanded="false" aria-controls="accordionGeneralTwo">
                                            What are your order policies?
                                        </button>
                                    </h2>

                                    <div id="accordionGeneralTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionGeneral">
                                        <div class="accordion-body">
                                            <p class="large-paragraph">For detailed information about our order policies, please <a href="#">click here</a>.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionGeneralThree" aria-expanded="false" aria-controls="accordionGeneralThree">
                                            How do I place an order?
                                        </button>
                                    </h2>

                                    <div id="accordionGeneralThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionGeneral">
                                        <div class="accordion-body">
                                            <p class="large-paragraph">Placing an order is simple! For step-by-step instructions, please <a href="#">click here</a>.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionGeneralFour" aria-expanded="false" aria-controls="accordionGeneralFour">
                                            What is the minimum order quantity?
                                        </button>
                                    </h2>

                                    <div id="accordionGeneralFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionGeneral">
                                        <div class="accordion-body">
                                            <p class="large-paragraph">For all types of clothing:</p>
                                            <ul>
                                                <li>Minimum order quantity: 100 pieces or sets</li>
                                                <li>Minimum per design: 20 pieces</li>
                                                <li>Available in 5–6 sizes only</li>
                                            </ul>
                                            <p class="large-paragraph">For handmade accessories:</p>
                                            <ul>
                                                <li>Minimum order quantity: 100 pieces per order</li>
                                                <li>Minimum per design: 20 pieces</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingFive">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionGeneralFive" aria-expanded="false" aria-controls="accordionGeneralFive">
                                            Do I get a discount for large orders?
                                        </button>
                                    </h2>

                                    <div id="accordionGeneralFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionGeneral">
                                        <div class="accordion-body">
                                            <p class="large-paragraph">Yes! Discounts apply for bulk orders as follows:</p>
                                            <ul>
                                                <li>500 – 999 pieces: 2% OFF</li>
                                                <li>1,000 – 1,499 pieces: 3% OFF</li>
                                                <li>1,500 – 2,499 pieces: 4% OFF</li>
                                                <li>2,500 pieces or more: 5% OFF</li>
                                            </ul>
                                            <p class="large-paragraph">Note: This discount policy has been effective since November 1, 2021.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <h2 class="mt-5">About <span>our products</span></h2>

                            <div class="accordion" id="accordionProduct">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingSix">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionProductOne" aria-expanded="true" aria-controls="accordionProductOne">
                                            How much does a sample cost?
                                        </button>
                                    </h2>

                                    <div id="accordionProductOne" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionProduct">
                                        <div class="accordion-body">
                                            <p class="large-paragraph">Sample cost: $49 per piece</p>
                                            <p class="large-paragraph">Sample cost deduction: Subtracted from the total cost when placing a wholesale order</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingSeven">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionProductTwo" aria-expanded="false" aria-controls="accordionProductTwo">
                                            What is the production time for wholesale orders?
                                        </button>
                                    </h2>

                                    <div id="accordionProductTwo" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionProduct">
                                        <div class="accordion-body">
                                            <p class="large-paragraph">Production time for wholesale orders varies based on quantity:</p>
                                            <ul>
                                                <li>Less than 50 pieces: ~3–4 weeks</li>
                                                <li>50–100 pieces: ~4 weeks</li>
                                                <li>100–500 pieces: ~6 weeks</li>
                                                <li>500–1,000 pieces: ~6–8 weeks</li>
                                                <li>More than 1,000 pieces: To be confirmed</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingEight">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionProductThree" aria-expanded="false" aria-controls="accordionProductThree">
                                            What is the shipping time?
                                        </button>
                                    </h2>

                                    <div id="accordionProductThree" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionProduct">
                                        <div class="accordion-body">
                                            <p class="large-paragraph">Shipping times depend on the method chosen:</p>
                                            <ul>
                                                <li>UPS or FedEx: ~5 working days</li>
                                                <li>Air Freight: ~7–10 working days</li>
                                                <li>Sea Freight: ~35–40 working days</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingNine">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordionProductFour" aria-expanded="false" aria-controls="accordionProductFour">
                                            Do I need to confirm receiving shipments?
                                        </button>
                                    </h2>

                                    <div id="accordionProductFour" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionProduct">
                                        <div class="accordion-body">
                                            <p class="large-paragraph">Yes, you must confirm receipt of shipments via email within 10 days of delivery. If we do not receive confirmation or notice within 10 days, we will assume that the shipment has been delivered successfully, and we will no longer hold responsibility for it.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;