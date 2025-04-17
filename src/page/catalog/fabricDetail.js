import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation, Link } from 'react-router-dom';
import { fetchCatalogsFindOne } from '../../redux/slices/catalog';

export default function FabricDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const location = useLocation();
    const [fabricState, setFabric] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    // Cuộn lên đầu trang khi route thay đổi
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Lấy dữ liệu chi tiết vải
    useEffect(() => {
        dispatch(fetchCatalogsFindOne(id))
            .unwrap()
            .then((data) => {
                setFabric(data);
                setSelectedImage(data?.data?.imageUrl); // Ảnh chính mặc định
            })
            .catch((err) => console.error("Lỗi khi tải chi tiết vải:", err));
    }, [dispatch, id]);

    // Trường hợp không có dữ liệu
    if (!fabricState) {
        return (
            <div className="container py-5 text-center">
                <p className="text-muted">Fabric not found</p>
                <Link to="/fabrics" className="btn btn-primary">Back to Fabrics</Link>
            </div>
        );
    }

    const fabric = fabricState?.data;

    return (
        <div className="container-fluid py-5 bg-white">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    {/* Fabric Image Section */}
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="fabric-image-container position-relative rounded shadow-lg overflow-hidden">
                            <img
                                src={selectedImage || fabric.imageUrl}
                                className="img-fluid w-100"
                                alt={fabric.name}
                                style={{ maxHeight: '500px', objectFit: 'cover' }}
                            />
                            <div className="image-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-3">
                                <span className="badge bg-primary text-white px-3 py-2">{fabric.status || 'Available'}</span>
                            </div>
                        </div>
                        {/* Thumbnails */}
                        {fabric.additionalImages && fabric.additionalImages.length > 0 && (
                            <div className="d-flex flex-wrap gap-2 mt-3 justify-content-center">
                                {fabric.additionalImages.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        className={`img-fluid rounded shadow-sm cursor-pointer ${selectedImage === img ? 'border border-primary' : ''}`}
                                        alt={`${fabric.name} thumbnail ${index}`}
                                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                        onClick={() => setSelectedImage(img)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Fabric Details Section */}
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
                        <div className="fabric-details p-4 bg-light rounded shadow-sm">
                            <h1 className="text-primary mb-3 fw-bold">{fabric.name}</h1>
                            <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>{fabric.description}</p>
                            <div className="detail-list mb-4">
                                <div className="d-flex justify-content-between py-2 border-bottom">
                                    <span className="fw-medium">Type</span>
                                    <span>{fabric.type || 'N/A'}</span>
                                </div>
                                <div className="d-flex justify-content-between py-2 border-bottom">
                                    <span className="fw-medium">Material</span>
                                    <span>{fabric.material || 'N/A'}</span>
                                </div>
                                <div className="d-flex justify-content-between py-2 border-bottom">
                                    <span className="fw-medium">Colors Available</span>
                                    <span>{fabric.colors || 'Multiple'}</span>
                                </div>
                            </div>
                            <div className="d-flex gap-3">
                                {/* <Link to="/contact" className="btn btn-primary rounded-pill px-4 py-2 fw-medium">
                                    Request a Quote
                                </Link> */}
                                <Link to="/fabrics" className="btn btn-outline-secondary rounded-pill px-4 py-2 fw-medium">
                                    Back to Fabrics
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CSS */}
            <style jsx>{`
                .fabric-image-container {
                    transition: transform 0.3s ease;
                }
                .fabric-image-container:hover {
                    transform: scale(1.02);
                }
                .image-overlay {
                    background: linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent);
                    opacity: 0.8;
                }
                .fabric-details {
                    border: 1px solid #e9ecef;
                }
                .detail-list {
                    background: #fff;
                    padding: 1rem;
                    border-radius: 8px;
                }
                .cursor-pointer {
                    cursor: pointer;
                    transition: border 0.2s ease;
                }
                .cursor-pointer:hover {
                    border: 2px solid #4d65f9;
                }
            `}</style>
        </div>
    );
}