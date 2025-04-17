import React from 'react';

const Faq = () => {
    return (
        <div>
            <header className="site-header section-padding d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-12">
                            <h1>
                                {/* <span className="d-block text-primary">Frequently Asked Questions</span> */}
                            </h1>
                        </div>
                    </div>
                </div>
            </header>

            <section className="faq section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            {/* General Info */}
                            <h2>General Info</h2>
                            <div className="accordion" id="accordionGeneral">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordionGeneralOne"
                                            aria-expanded="false"
                                            aria-controls="accordionGeneralOne"
                                        >
                                            What makes smocked and hand-embroidered dresses special?
                                        </button>
                                    </h2>
                                    <div
                                        id="accordionGeneralOne"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#accordionGeneral"
                                    >
                                        <div className="accordion-body">
                                            <p className="large-paragraph">
                                                Our smocked and hand-embroidered dresses are handcrafted with precision, offering:
                                            </p>
                                            <ul>
                                                <li><strong>Artisan Craftsmanship</strong> – Made by skilled artisans with years of expertise.</li>
                                                <li><strong>Exclusive Designs</strong> – Unique, intricate embroidery not found in mass-produced clothing.</li>
                                                <li><strong>Premium Quality</strong> – Carefully pleated and embroidered for a luxurious finish.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordionGeneralTwo"
                                            aria-expanded="false"
                                            aria-controls="accordionGeneralTwo"
                                        >
                                            How long has Peptit Élegance been in business?
                                        </button>
                                    </h2>
                                    <div
                                        id="accordionGeneralTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionGeneral"
                                    >
                                        <div className="accordion-body">
                                            <p className="large-paragraph">
                                                We have specialized in children’s smocked clothing since 2012.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordionGeneralThree"
                                            aria-expanded="false"
                                            aria-controls="accordionGeneralThree"
                                        >
                                            What is your production capacity?
                                        </button>
                                    </h2>
                                    <div
                                        id="accordionGeneralThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordionGeneral"
                                    >
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Hand-smocked clothing: 20,000 pieces/year.</li>
                                                <li>Blank clothing: 10,000 pieces/year.</li>
                                                <li>Handmade accessories: 10,000 pieces/year.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Ordering & Pricing */}
                            <h2 className="mt-5">Ordering & Pricing</h2>
                            <div className="accordion" id="accordionOrdering">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordionOrderingOne"
                                            aria-expanded="false"
                                            aria-controls="accordionOrderingOne"
                                        >
                                            How do I place a wholesale order?
                                        </button>
                                    </h2>
                                    <div
                                        id="accordionOrderingOne"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingFour"
                                        data-bs-parent="#accordionOrdering"
                                    >
                                        <div className="accordion-body">
                                            <p className="large-paragraph">
                                                <strong>MOQ:</strong> 20 pieces per design (5-6 sizes).<br />
                                                Provide details on style, size, fabric, and embroidery pattern. We’ll send a quotation and contract before production starts.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordionOrderingTwo"
                                            aria-expanded="false"
                                            aria-controls="accordionOrderingTwo"
                                        >
                                            What is the minimum order quantity (MOQ)?
                                        </button>
                                    </h2>
                                    <div
                                        id="accordionOrderingTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingFive"
                                        data-bs-parent="#accordionOrdering"
                                    >
                                        <div className="accordion-body">
                                            <ul>
                                                <li><strong>Custom Designs:</strong> 20 pieces per design (various sizes).</li>
                                                <li><strong>Available Designs (No Customization):</strong> 15 pieces per order (assorted designs/sizes).</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordionOrderingThree"
                                            aria-expanded="false"
                                            aria-controls="accordionOrderingThree"
                                        >
                                            What are the pricing and bulk order discounts?
                                        </button>
                                    </h2>
                                    <div
                                        id="accordionOrderingThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingSix"
                                        data-bs-parent="#accordionOrdering"
                                    >
                                        <div className="accordion-body">
                                            <p><strong>Standard Prices:</strong> $15 – $30 per piece for available designs.</p>
                                            <p><strong>Sample Prices:</strong> Depend on the design.</p>
                                            <p><strong>Bulk Discounts:</strong></p>
                                            <ul>
                                                <li>200-299 pieces → 2% off</li>
                                                <li>300-499 pieces → 3% off</li>
                                                <li>500-999 pieces → 4% off</li>
                                                <li>1000+ pieces → 5% off</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSeven">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordionOrderingFour"
                                            aria-expanded="false"
                                            aria-controls="accordionOrderingFour"
                                        >
                                            How much does a sample cost?
                                        </button>
                                    </h2>
                                    <div
                                        id="accordionOrderingFour"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingSeven"
                                        data-bs-parent="#accordionOrdering"
                                    >
                                        <div className="accordion-body">
                                            <p>Depends on the design: $30 - $49 per piece.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingEight">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordionOrderingFive"
                                            aria-expanded="false"
                                            aria-controls="accordionOrderingFive"
                                        >
                                            What are the payment methods?
                                        </button>
                                    </h2>
                                    <div
                                        id="accordionOrderingFive"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingEight"
                                        data-bs-parent="#accordionOrdering"
                                    >
                                        <div className="accordion-body">
                                            <ul>
                                                <li>Bank Transfer</li>
                                                <li>PayPal</li>
                                                <li>Western Union</li>
                                            </ul>
                                            <p>For more details, please WhatsApp us.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingNine">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordionOrderingSix"
                                            aria-expanded="false"
                                            aria-controls="accordionOrderingSix"
                                        >
                                            Can I use my own labels/tags?
                                        </button>
                                    </h2>
                                    <div
                                        id="accordionOrderingSix"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingNine"
                                        data-bs-parent="#accordionOrdering"
                                    >
                                        <div className="accordion-body">
                                            <p>Yes, we can add custom labels. MOQ: 1000 pieces, $80.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTen">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordionOrderingSeven"
                                            aria-expanded="false"
                                            aria-controls="accordionOrderingSeven"
                                        >
                                            Can I submit my own designs?
                                        </button>
                                    </h2>
                                    <div
                                        id="accordionOrderingSeven"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTen"
                                        data-bs-parent="#accordionOrdering"
                                    >
                                        <div className="accordion-body">
                                            <p>Yes! MOQ for custom designs: 20 pieces per design. Send your images for replication. If you need design assistance, our team can help.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Production & Shipping */}
                            <h2 className="mt-5">Production & Shipping</h2>
                            <div className="accordion" id="accordionProduction">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingEleven">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordionProductionOne"
                                            aria-expanded="false"
                                            aria-controls="accordionProductionOne"
                                        >
                                            What is the production time?
                                        </button>
                                    </h2>
                                    <div
                                        id="accordionProductionOne"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingEleven"
                                        data-bs-parent="#accordionProduction"
                                    >
                                        <div className="accordion-body">
                                            <ul>
                                                <li>0-100 pieces: 30 – 40 working days</li>
                                                <li>101-199 pieces: 45 - 50 working days</li>
                                                <li>200-499 pieces: 60 working days</li>
                                                <li>500-999 pieces: 60 - 70 working days</li>
                                                <li>1000-2000 pieces: 70 - 80 working days</li>
                                                <li>Larger orders: Confirmed upon inquiry</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwelve">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordionProductionTwo"
                                            aria-expanded="false"
                                            aria-controls="accordionProductionTwo"
                                        >
                                            How long does a sample order take?
                                        </button>
                                    </h2>
                                    <div
                                        id="accordionProductionTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwelve"
                                        data-bs-parent="#accordionProduction"
                                    >
                                        <div className="accordion-body">
                                            <ul>
                                                <li>1-10 pieces: ~2 weeks</li>
                                                <li>11-20 pieces: ~2-3 weeks</li>
                                                <li>21-30 pieces: ~3-4 weeks</li>
                                                <li>Geometric designs: May take 3-5 extra days</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThirteen">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordionProductionThree"
                                            aria-expanded="false"
                                            aria-controls="accordionProductionThree"
                                        >
                                            How long does shipping take?
                                        </button>
                                    </h2>
                                    <div
                                        id="accordionProductionThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThirteen"
                                        data-bs-parent="#accordionProduction"
                                    >
                                        <div className="accordion-body">
                                            <ul>
                                                <li>UPS, FedEx, Air Freight, Dpex: 5-7 days</li>
                                                <li>Sea Freight: Varies by destination</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFourteen">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordionProductionFour"
                                            aria-expanded="false"
                                            aria-controls="accordionProductionFour"
                                        >
                                            Do I need to confirm shipment receipt?
                                        </button>
                                    </h2>
                                    <div
                                        id="accordionProductionFour"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingFourteen"
                                        data-bs-parent="#accordionProduction"
                                    >
                                        <div className="accordion-body">
                                            <p>Yes, confirm via email within 10 days of delivery. After that, we are no longer responsible for the order.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFifteen">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordionProductionFive"
                                            aria-expanded="false"
                                            aria-controls="accordionProductionFive"
                                        >
                                            How are products shipped?
                                        </button>
                                    </h2>
                                    <div
                                        id="accordionProductionFive"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingFifteen"
                                        data-bs-parent="#accordionProduction"
                                    >
                                        <div className="accordion-body">
                                            <ul>
                                                <li>50-200 kg: Best shipped via UPS/FedEx.</li>
                                                <li>200+ kg: Sea freight recommended.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSixteen">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordionProductionSix"
                                            aria-expanded="false"
                                            aria-controls="accordionProductionSix"
                                        >
                                            How are clothes packed?
                                        </button>
                                    </h2>
                                    <div
                                        id="accordionProductionSix"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingSixteen"
                                        data-bs-parent="#accordionProduction"
                                    >
                                        <div className="accordion-body">
                                            <p>Individually wrapped in plastic after ironing. Packed into 5-layer carton boxes (50 x 50 x 50 cm) – Holds ~150 dresses. Sealed, labeled, and ready for shipment.</p>
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