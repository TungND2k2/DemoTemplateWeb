import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useLocation, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { fetchBlogsFindOne } from '../../redux/slices/blog';

export default function BlogDetail() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const location = useLocation();
    const [blogState, setBlog] = useState(null);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Fetch blog data
    useEffect(() => {
        dispatch(fetchBlogsFindOne(id))
            .unwrap()
            .then((data) => {
                setBlog(data);
            })
            .catch((err) => console.error("Lỗi khi tải chi tiết blog:", err));
    }, [dispatch, id]);

    // Handle blog not found
    if (!blogState) {
        return (
            <Container className="py-5 text-center">
                <p className="text-muted">Blog not found</p>
                <Link to="/blogs" className="btn btn-outline-dark rounded-pill px-4">Back to Blogs</Link>
            </Container>
        );
    }

    const blog = blogState?.data;

    return (
        <div className="blog-detail-wrapper">
            <Container fluid className="py-5">
                {/* Header Section */}
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8} className="text-center">
                            <h1 className="blog-title mb-3">{blog.title}</h1>
                            <div className="blog-meta text-muted mb-5">
                                <span>
                                    By {blog.author.split('@')[0]} |{' '}
                                    {blog.publishedAt?.$date
                                        ? new Date(blog.publishedAt.$date).toLocaleDateString('en-US', {
                                              year: 'numeric',
                                              month: 'long',
                                              day: 'numeric',
                                          })
                                        : 'Not published'}
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* Thumbnail Image */}
                {blog.thumbnailUrl && (
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={10}>
                                <div className="blog-thumbnail mb-5">
                                    <img
                                        src={blog.thumbnailUrl}
                                        alt={blog.title}
                                        className="img-fluid rounded"
                                        style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
                                        loading="lazy"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                )}

                {/* Main Content */}
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="blog-content">
                                <ReactMarkdown
                                    rehypePlugins={[rehypeRaw, rehypeSanitize]}
                                    components={{
                                        // Customize code blocks
                                        code({ node, inline, className, children, ...props }) {
                                            return inline ? (
                                                <code className={className} {...props}>
                                                    {children}
                                                </code>
                                            ) : (
                                                <pre>
                                                    <code className={className} {...props}>
                                                        {children}
                                                    </code>
                                                </pre>
                                            );
                                        },
                                        // Customize images
                                        img({ node, ...props }) {
                                            return (
                                                <img
                                                    {...props}
                                                    className="markdown-image"
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.currentTarget.src = 'https://via.placeholder.com/800x400?text=Image+Not+Found';
                                                    }}
                                                />
                                            );
                                        },
                                        // Customize blockquotes
                                        blockquote({ node, children, ...props }) {
                                            return (
                                                <blockquote className="blockquote" {...props}>
                                                    {children}
                                                </blockquote>
                                            );
                                        },
                                    }}
                                >
                                    {blog.content || 'No content available.'}
                                </ReactMarkdown>
                            </div>

                            {/* Tags */}
                            {blog.tags?.length > 0 && (
                                <div className="blog-tags mt-5">
                                    <h5 className="fw-bold mb-3">Tags</h5>
                                    <div className="d-flex flex-wrap gap-2">
                                        {blog.tags.map((tag, index) => (
                                            <Badge key={index} bg="dark" className="py-2 px-3">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Additional Images Gallery */}
                            {blog.imageUrls?.length > 0 && (
                                <div className="blog-gallery mt-5">
                                    <h5 className="fw-bold mb-3">Gallery</h5>
                                    <Row className="g-3">
                                        {blog.imageUrls.map((url, index) => (
                                            <Col key={index} xs={12} md={6}>
                                                <img
                                                    src={url}
                                                    alt={`${blog.title} image ${index + 1}`}
                                                    className="img-fluid rounded"
                                                    style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
                                                    loading="lazy"
                                                    onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/600x300?text=Image+Not+Found')}
                                                />
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            )}

                            {/* Back Button */}
                            <div className="text-center mt-5">
                                <Link to="/blogs" className="btn btn-outline-dark rounded-pill px-5 py-2">
                                    Back to Blogs
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* Custom CSS */}
            <style jsx>{`
                .blog-detail-wrapper {
                    font-family: 'Helvetica Neue', Arial, sans-serif;
                    background-color: #f8f9fa;
                }
                .blog-title {
                    font-size: 2.5rem;
                    font-weight: 700;
                    color: #1a1a1a;
                    line-height: 1.2;
                }
                .blog-meta {
                    font-size: 1rem;
                    color: #6c757d;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .blog-thumbnail {
                    border-radius: 8px;
                    overflow: hidden;
                }
                .blog-content {
                    font-size: 1.1rem;
                    line-height: 1.8;
                    color: #333;
                }
                .blog-content p {
                    margin-bottom: 1.5rem;
                }
                .blog-content h1,
                .blog-content h2 {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    color: #1a1a1a;
                }
                .blog-content h3 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    color: #1a1a1a;
                }
                .blog-content ul,
                .blog-content ol {
                    margin-bottom: 1.5rem;
                    padding-left: 2rem;
                }
                .blog-content li {
                    margin-bottom: 0.5rem;
                }
                .blog-content pre {
                    background: #f5f5f5;
                    padding: 1.5rem;
                    border-radius: 8px;
                    font-size: 0.95rem;
                    overflow-x: auto;
                    color: #000;
                    margin-bottom: 1.5rem;
                }
                .blog-content code {
                    font-family: 'Courier New', Courier, monospace;
                    color: #d63384;
                }
                .blog-content a {
                    color: #1a1a1a;
                    text-decoration: underline;
                }
                .blog-content a:hover {
                    color: #6c757d;
                }
                .markdown-image {
                    max-width: 100%;
                    height: auto;
                    border-radius: 8px;
                    margin: 1.5rem 0;
                    display: block;
                }
                .blockquote {
                    border-left: 4px solid #1a1a1a;
                    padding: 1rem 1.5rem;
                    margin: 1.5rem 0;
                    font-style: italic;
                    color: #6c757d;
                    font-size: 1.2rem;
                }
                .blog-tags .badge {
                    font-size: 0.9rem;
                    font-weight: 500;
                    background-color: #343a40;
                    padding: 0.5em 1em;
                }
                .blog-gallery img {
                    border-radius: 8px;
                    transition: transform 0.3s ease;
                }
                .blog-gallery img:hover {
                    transform: scale(1.02);
                }
                .btn-outline-dark {
                    border-color: #1a1a1a;
                    color: #1a1a1a;
                    font-weight: 500;
                }
                .btn-outline-dark:hover {
                    background-color: #1a1a1a;
                    color: #fff;
                }
            `}</style>
        </div>
    );
}