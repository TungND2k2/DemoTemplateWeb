import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCatalogs } from '../../redux/slices/catalog';

export default function FabricPage() {
    const dispatch = useDispatch();
    const { items: payloadCatalogs, status, error } = useSelector((state) => state.catalogs);

    const fabrics = payloadCatalogs?.data; // Đổi tên từ catalogs thành fabrics cho phù hợp

    useEffect(() => {
        dispatch(fetchCatalogs());
    }, [dispatch]);

    return (
        <div className="container-fluid py-5 bg-white">
            <div className="container py-5">
                {/* Header Section */}
                <div
                    className="mx-auto text-center wow fadeIn"
                    data-wow-delay="0.1s"
                    style={{ maxWidth: '800px' }}
                >
                    <h4 className="text-primary mb-4 border-bottom border-primary border-2 d-inline-block p-3 title-border-radius">
                        Explore Our Fabrics
                    </h4>
                    <h1 className="mb-5 display-4 text-dark">Fabric Collection</h1>
                    {/* <p className="text-muted lead">
                        Discover our premium selection of fabrics, perfect for crafting unique smocked dresses and accessories.
                    </p> */}
                </div>

                {/* Fabric Grid */}
                <div className="row g-4 justify-content-center">
                    {fabrics && fabrics.length > 0 ? (
                        fabrics.map((fabric, index) => (
                            <div
                                className="col-6 col-md-4 col-lg-3 wow fadeIn"
                                data-wow-delay={`${0.1 * (index + 1)}s`}
                                key={fabric._id}
                            >
                                <div className="card h-100 border-0 shadow-sm fabric-card">
                                    <Link to={`/fabrics/${fabric._id}`} className="text-decoration-none">
                                        {/* Fabric Image */}
                                        <div className="card-img-top position-relative overflow-hidden" style={{ height: '250px' }}>
                                            <img
                                                src={fabric.imageUrl}
                                                className="img-fluid w-100 h-100 fabric-image"
                                                alt={fabric.name}
                                                style={{ objectFit: 'cover' }}
                                            />
                                            {/* Overlay with Info */}
                                            <div className="fabric-overlay position-absolute w-100 h-100 top-0 start-0 d-flex align-items-center justify-content-center">
                                                <div className="text-center text-white">
                                                    <h6 className="mb-0 fw-bold">{fabric.name}</h6>
                                                    <small>Click to view details</small>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Fabric Details */}
                                        <div className="card-body p-3 text-center">
                                            <h5 className="card-title text-dark mb-2">{fabric.name}</h5>
                                            <p className="text-muted mb-2" style={{ fontSize: '0.9rem' }}>
                                                {fabric.description.length > 80
                                                    ? `${fabric.description.substring(0, 80)}...`
                                                    : fabric.description}
                                            </p>
                                            <span className="badge bg-primary text-white">Available</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center">
                            <p className="text-muted">No fabrics available at the moment.</p>
                        </div>
                    )}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-5">
                    <Link to="/contact" className="btn btn-primary btn-lg rounded-pill px-4">
                        Contact Us for Custom Fabrics
                    </Link>
                </div>

                {/* Custom CSS */}
                <style jsx>{`
                    .fabric-card {
                        transition: transform 0.3s ease, box-shadow 0.3s ease;
                        border-radius: 10px;
                        overflow: hidden;
                    }
                    .fabric-card:hover {
                        transform: translateY(-10px);
                        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
                    }
                    .fabric-image {
                        transition: transform 0.3s ease;
                    }
                    .fabric-card:hover .fabric-image {
                        transform: scale(1.1);
                    }
                    .fabric-overlay {
                        background: rgba(77, 101, 249, 0.7);
                        opacity: 0;
                        transition: opacity 0.3s ease;
                    }
                    .fabric-card:hover .fabric-overlay {
                        opacity: 1;
                    }
                    .title-border-radius {
                        border-radius: 20px;
                    }
                    .badge {
                        font-size: 0.85rem;
                        padding: 0.4em 0.8em;
                    }
                `}</style>
            </div>
        </div>
    );
}