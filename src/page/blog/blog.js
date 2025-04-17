import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { fetchBlogs } from '../../redux/slices/blog';

export default function BlogPage() {
    const dispatch = useDispatch();
    const { items: payloadBlogs, status, error } = useSelector((state) => state.blogs);

    const blogs = payloadBlogs?.data;

    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    // Lọc blog: chỉ hiển thị blog đã publish và chưa bị xóa
    const filteredBlogs = blogs?.filter((blog) => blog.isPublished && !blog.isDeleted);

    // Phân loại blog cho các section
    const featuredBlog = filteredBlogs?.[0]; // Blog nổi bật đầu tiên
    const editorsPick = filteredBlogs?.slice(1, 4); // 3 blog cho Editor's Pick
    const trendingBlogs = filteredBlogs?.slice(4, 8); // 4 blog cho Trending
    const secondaryFeaturedBlog = filteredBlogs?.[8]; // Blog nổi bật thứ hai

    return (
        <div className="blog-page-wrapper">
            <Container fluid className="py-5">
                {/* Featured Post Section */}
                {status === 'loading' ? (
                    <Container className="text-center">
                        <p className="text-muted">Loading blogs...</p>
                    </Container>
                ) : error ? (
                    <Container className="text-center">
                        <p className="text-danger">Error: {error}</p>
                    </Container>
                ) : filteredBlogs && filteredBlogs.length > 0 ? (
                    <>
                        {featuredBlog && (
                            <Container>
                                <Row className="mb-5">
                                    <Col lg={12}>
                                        <Link to={`/blogs/${featuredBlog._id}`} className="text-decoration-none">
                                            <div className="featured-post position-relative">
                                                <img
                                                    src={featuredBlog.thumbnailUrl || 'https://via.placeholder.com/1200x600'}
                                                    alt={featuredBlog.title}
                                                    className="img-fluid w-100 rounded"
                                                    style={{ height: '500px', objectFit: 'cover' }}
                                                />
                                                <div className="featured-overlay position-absolute w-100 h-100 top-0 start-0 d-flex align-items-end p-4">
                                                    <div className="text-white">
                                                        <h2 className="mb-2 fw-bold">{featuredBlog.title}</h2>
                                                        <p className="mb-2">
                                                            {featuredBlog.author.split('@')[0]} •{' '}
                                                            {new Date(featuredBlog.publishedAt.$date).toLocaleDateString('en-US', {
                                                                month: 'long',
                                                                day: 'numeric',
                                                                year: 'numeric',
                                                            })}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Col>
                                </Row>
                            </Container>
                        )}

                        {/* Editor's Pick and Trending Section */}
                        <Container>
                            <Row className="mb-5">
                                {/* Editor's Pick */}
                                <Col lg={8}>
                                    <h3 className="section-title mb-4">Editor's Pick</h3>
                                    <Row>
                                        {editorsPick && editorsPick.length > 0 ? (
                                            <>
                                                {/* Larger Post on the Left */}
                                                {editorsPick[0] && (
                                                    <Col md={6} className="mb-4">
                                                        <Link to={`/blogs/${editorsPick[0]._id}`} className="text-decoration-none">
                                                            <Card className="border-0">
                                                                <Card.Img
                                                                    src={editorsPick[0].thumbnailUrl || 'https://via.placeholder.com/600x400'}
                                                                    alt={editorsPick[0].title}
                                                                    className="rounded"
                                                                    style={{ height: '300px', objectFit: 'cover' }}
                                                                />
                                                                <Card.Body className="p-0 pt-3">
                                                                    <h5 className="card-title fw-bold mb-2">{editorsPick[0].title}</h5>
                                                                    <p className="text-muted mb-2">
                                                                        {editorsPick[0].author.split('@')[0]} •{' '}
                                                                        {new Date(editorsPick[0].publishedAt.$date).toLocaleDateString('en-US', {
                                                                            month: 'long',
                                                                            day: 'numeric',
                                                                            year: 'numeric',
                                                                        })}
                                                                    </p>
                                                                    <div
                                                                        className="text-muted"
                                                                        style={{ fontSize: '0.95rem', lineHeight: '1.6' }}
                                                                        dangerouslySetInnerHTML={{
                                                                            __html: DOMPurify.sanitize(
                                                                                editorsPick[0].content.replace(/<[^>]+>/g, '').length > 100
                                                                                    ? `${editorsPick[0].content.replace(/<[^>]+>/g, '').substring(0, 100)}...`
                                                                                    : editorsPick[0].content.replace(/<[^>]+>/g, '')
                                                                            ),
                                                                        }}
                                                                    />
                                                                </Card.Body>
                                                            </Card>
                                                        </Link>
                                                    </Col>
                                                )}
                                                {/* Smaller Posts on the Right */}
                                                <Col md={6}>
                                                    {editorsPick.slice(1).map((blog) => (
                                                        <Link to={`/blogs/${blog._id}`} className="text-decoration-none" key={blog._id}>
                                                            <Card className="border-0 mb-3">
                                                                <Row className="g-0">
                                                                    <Col xs={4}>
                                                                        <Card.Img
                                                                            src={blog.thumbnailUrl || 'https://via.placeholder.com/150x100'}
                                                                            alt={blog.title}
                                                                            className="rounded"
                                                                            style={{ height: '100px', objectFit: 'cover' }}
                                                                        />
                                                                    </Col>
                                                                    <Col xs={8}>
                                                                        <Card.Body className="p-0 ps-3">
                                                                            <h6 className="card-title fw-bold mb-1">{blog.title}</h6>
                                                                            <p className="text-muted mb-0" style={{ fontSize: '0.85rem' }}>
                                                                                {blog.author.split('@')[0]} •{' '}
                                                                                {new Date(blog.publishedAt.$date).toLocaleDateString('en-US', {
                                                                                    month: 'long',
                                                                                    day: 'numeric',
                                                                                    year: 'numeric',
                                                                                })}
                                                                            </p>
                                                                        </Card.Body>
                                                                    </Col>
                                                                </Row>
                                                            </Card>
                                                        </Link>
                                                    ))}
                                                </Col>
                                            </>
                                        ) : (
                                            <p className="text-muted">No Editor's Pick available.</p>
                                        )}
                                    </Row>
                                </Col>

                                {/* Trending Sidebar */}
                                <Col lg={4}>
                                    <h3 className="section-title mb-4">Trending</h3>
                                    {trendingBlogs && trendingBlogs.length > 0 ? (
                                        trendingBlogs.map((blog, index) => (
                                            <Link to={`/blogs/${blog._id}`} className="text-decoration-none" key={blog._id}>
                                                <div className="trending-item d-flex align-items-center mb-3">
                                                    <span className="trending-number me-3">{`0${index + 1}`}</span>
                                                    <div>
                                                        <h6 className="mb-1 fw-bold">{blog.title}</h6>
                                                        <p className="text-muted mb-0" style={{ fontSize: '0.85rem' }}>
                                                            {blog.author.split('@')[0]} •{' '}
                                                            {new Date(blog.publishedAt.$date).toLocaleDateString('en-US', {
                                                                month: 'long',
                                                                day: 'numeric',
                                                                year: 'numeric',
                                                            })}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))
                                    ) : (
                                        <p className="text-muted">No trending posts available.</p>
                                    )}
                                    <Link to="/blogs" className="text-success d-block mt-3">See All Trends →</Link>
                                </Col>
                            </Row>
                        </Container>

                        {/* Secondary Featured Post */}
                        {secondaryFeaturedBlog && (
                            <Container>
                                <Row className="mb-5">
                                    <Col lg={12}>
                                        <Link to={`/blogs/${secondaryFeaturedBlog._id}`} className="text-decoration-none">
                                            <div className="featured-post position-relative">
                                                <img
                                                    src={secondaryFeaturedBlog.thumbnailUrl || 'https://via.placeholder.com/1200x600'}
                                                    alt={secondaryFeaturedBlog.title}
                                                    className="img-fluid w-100 rounded"
                                                    style={{ height: '500px', objectFit: 'cover' }}
                                                />
                                                <div className="featured-overlay position-absolute w-100 h-100 top-0 start-0 d-flex align-items-end p-4">
                                                    <div className="text-white">
                                                        <h2 className="mb-2 fw-bold">{secondaryFeaturedBlog.title}</h2>
                                                        <p className="mb-2">
                                                            {secondaryFeaturedBlog.author.split('@')[0]} •{' '}
                                                            {new Date(secondaryFeaturedBlog.publishedAt.$date).toLocaleDateString('en-US', {
                                                                month: 'long',
                                                                day: 'numeric',
                                                                year: 'numeric',
                                                            })}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </Col>
                                </Row>
                            </Container>
                        )}
                    </>
                ) : (
                    <Container className="text-center">
                        <p className="text-muted">No published blogs available yet.</p>
                    </Container>
                )}
            </Container>

            {/* Custom CSS */}
            <style jsx>{`
                .blog-page-wrapper {
                    font-family: 'Helvetica Neue', Arial, sans-serif;
                    background-color: #fff;
                }
                .featured-post {
                    border-radius: 8px;
                    overflow: hidden;
                }
                .featured-overlay {
                    background: rgba(0, 0, 0, 0.5);
                    transition: background 0.3s ease;
                }
                .featured-post:hover .featured-overlay {
                    background: rgba(0, 0, 0, 0.7);
                }
                .section-title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #1a1a1a;
                    border-bottom: 2px solid #1a1a1a;
                    display: inline-block;
                    padding-bottom: 0.5rem;
                }
                .card {
                    transition: transform 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-5px);
                }
                .card-img {
                    border-radius: 8px;
                }
                .card-title {
                    font-size: 1.25rem;
                    color: #1a1a1a;
                }
                .text-muted {
                    color: #6c757d !important;
                }
                .trending-item {
                    border-bottom: 1px solid #e9ecef;
                    padding-bottom: 1rem;
                }
                .trending-number {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #6c757d;
                }
                .trending-item h6 {
                    font-size: 1rem;
                    color: #1a1a1a;
                }
                .text-success {
                    color: #28a745 !important;
                    font-weight: 500;
                }
            `}</style>
        </div>
    );
}