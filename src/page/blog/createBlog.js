import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { fetchBlogsCreate } from '../../redux/slices/blog';

const mdParser = new MarkdownIt();

export default function CreateBlog() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState('');
    const { register, handleSubmit, control, setValue, formState: { errors } } = useForm({
        defaultValues: {
            title: '',
            content: '',
            author: '',
            isPublished: false,
            publishedAt: null,
            thumbnailUrl: '',
            imageUrls: [''],
        },
    });

    // Handle tag addition
    const handleAddTag = (e) => {
        e.preventDefault();
        if (tagInput.trim() && !tags.includes(tagInput.trim())) {
            setTags([...tags, tagInput.trim()]);
            setTagInput('');
        }
    };

    // Handle tag removal
    const handleRemoveTag = (tag) => {
        setTags(tags.filter((t) => t !== tag));
    };

    // Handle form submission
    const onSubmit = async (data) => {
        try {
            const blogData = {
                ...data,
                tags,
                publishedAt: data.isPublished ? new Date() : null,
                imageUrls: data.imageUrls.filter((url) => url.trim() !== ''),
                isDeleted: false,
            };
            await dispatch(fetchBlogsCreate(blogData)).unwrap();
            navigate('/blogs');
        } catch (error) {
            console.error('Failed to create blog:', error);
            alert('Lỗi khi tạo blog. Vui lòng thử lại.');
        }
    };

    return (
        <Container fluid className="py-5" style={{ backgroundColor: ' #fff', minHeight: '100vh' }}>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <Card className="shadow-sm border-0 p-4" style={{ borderRadius: '15px' }}>
                            <Card.Body>
                                <h1 className="text-dark mb-4 fw-bold" style={{ fontSize: '2rem' }}>
                                    Create New Blog
                                </h1>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    {/* Title */}
                                    <Form.Group className="mb-4">
                                        <Form.Label className="fw-medium">Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter blog title"
                                            {...register('title', { required: 'Tiêu đề là bắt buộc' })}
                                            isInvalid={!!errors.title}
                                            style={{ borderRadius: '8px', padding: '10px' }}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.title?.message}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Content (Markdown Editor) */}
                                    <Form.Group className="mb-4">
                                        <Form.Label className="fw-medium">Content</Form.Label>
                                        <Controller
                                            name="content"
                                            control={control}
                                            rules={{ required: 'Nội dung là bắt buộc' }}
                                            render={({ field }) => (
                                                <MdEditor
                                                    style={{ height: '400px', borderRadius: '8px' }}
                                                    value={field.value}
                                                    renderHTML={(text) => mdParser.render(text)}
                                                    onChange={({ text }) => field.onChange(text)}
                                                    placeholder="Write your blog content in Markdown..."
                                                />
                                            )}
                                        />
                                        {errors.content && (
                                            <div className="text-danger mt-2">{errors.content.message}</div>
                                        )}
                                    </Form.Group>

                                    {/* Author */}
                                    <Form.Group className="mb-4">
                                        <Form.Label className="fw-medium">Author</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter author name"
                                            {...register('author', { required: 'Tác giả là bắt buộc' })}
                                            isInvalid={!!errors.author}
                                            style={{ borderRadius: '8px', padding: '10px' }}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.author?.message}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    {/* Tags */}
                                    <Form.Group className="mb-4">
                                        <Form.Label className="fw-medium">Tags</Form.Label>
                                        <div className="d-flex gap-2 mb-2">
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter a tag"
                                                value={tagInput}
                                                onChange={(e) => setTagInput(e.target.value)}
                                                onKeyPress={(e) => e.key === 'Enter' && handleAddTag(e)}
                                                style={{ borderRadius: '8px', padding: '10px' }}
                                            />
                                            <Button
                                                variant="primary"
                                                onClick={handleAddTag}
                                                style={{
                                                    borderRadius: '8px',
                                                    backgroundColor: '#4d65f9',
                                                    borderColor: '#4d65f9',
                                                    padding: '10px 20px',
                                                }}
                                            >
                                                Add
                                            </Button>
                                        </div>
                                        <div className="d-flex flex-wrap gap-2">
                                            {tags.map((tag) => (
                                                <Badge
                                                    key={tag}
                                                    bg="primary"
                                                    className="py-2 px-3"
                                                    style={{ cursor: 'pointer', backgroundColor: '#4d65f9' }}
                                                    onClick={() => handleRemoveTag(tag)}
                                                >
                                                    {tag} <span>×</span>
                                                </Badge>
                                            ))}
                                        </div>
                                    </Form.Group>

                                    {/* Is Published */}
                                    <Form.Group className="mb-4">
                                        <Form.Check
                                            type="checkbox"
                                            label="Publish immediately"
                                            {...register('isPublished')}
                                        />
                                    </Form.Group>

                                    {/* Thumbnail URL */}
                                    <Form.Group className="mb-4">
                                        <Form.Label className="fw-medium">Thumbnail URL</Form.Label>
                                        <Form.Control
                                            type="url"
                                            placeholder="Enter thumbnail image URL (optional)"
                                            {...register('thumbnailUrl')}
                                            style={{ borderRadius: '8px', padding: '10px' }}
                                        />
                                    </Form.Group>

                                    {/* Additional Image URLs */}
                                    <Form.Group className="mb-4">
                                        <Form.Label className="fw-medium">Additional Image URLs</Form.Label>
                                        <Controller
                                            name="imageUrls"
                                            control={control}
                                            render={({ field }) => (
                                                <div>
                                                    {field.value.map((url, index) => (
                                                        <div key={index} className="d-flex gap-2 mb-2">
                                                            <Form.Control
                                                                type="url"
                                                                value={url}
                                                                onChange={(e) => {
                                                                    const newUrls = [...field.value];
                                                                    newUrls[index] = e.target.value;
                                                                    setValue('imageUrls', newUrls);
                                                                }}
                                                                placeholder="Enter image URL"
                                                                style={{ borderRadius: '8px', padding: '10px' }}
                                                            />
                                                            {field.value.length > 1 && (
                                                                <Button
                                                                    variant="danger"
                                                                    onClick={() => {
                                                                        const newUrls = field.value.filter((_, i) => i !== index);
                                                                        setValue('imageUrls', newUrls);
                                                                    }}
                                                                    style={{ borderRadius: '8px', padding: '10px' }}
                                                                >
                                                                    Remove
                                                                </Button>
                                                            )}
                                                        </div>
                                                    ))}
                                                    <Button
                                                        variant="secondary"
                                                        onClick={() => setValue('imageUrls', [...field.value, ''])}
                                                        style={{
                                                            borderRadius: '8px',
                                                            backgroundColor: '#6c757d',
                                                            borderColor: '#6c757d',
                                                            padding: '10px 20px',
                                                        }}
                                                    >
                                                        Add Image URL
                                                    </Button>
                                                </div>
                                            )}
                                        />
                                    </Form.Group>

                                    {/* Submit and Cancel */}
                                    <div className="d-flex gap-3 mt-5">
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            style={{
                                                borderRadius: '20px',
                                                backgroundColor: '#4d65f9',
                                                borderColor: '#4d65f9',
                                                padding: '10px 30px',
                                                fontWeight: '500',
                                            }}
                                        >
                                            Create Blog
                                        </Button>
                                        <Link
                                            to="/blogs"
                                            className="btn btn-outline-secondary"
                                            style={{
                                                borderRadius: '20px',
                                                padding: '10px 30px',
                                                fontWeight: '500',
                                            }}
                                        >
                                            Cancel
                                        </Link>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Custom CSS */}
            <style jsx>{`
                .card {
                    border-radius: 15px;
                    background-color: #fff;
                }
                .form-control,
                .btn {
                    border-radius: 8px;
                }
                .badge {
                    font-size: 0.9rem;
                    transition: background-color 0.2s;
                }
                .badge:hover {
                    background-color: #3b51d9 !important;
                }
                .rmel-editor-wrapper {
                    border: 1px solid #e9ecef;
                    border-radius: 8px;
                }
                .rmel-editor-wrapper .editor-container {
                    background: #fff;
                }
                .btn-primary {
                    background-color: #4d65f9;
                    border-color: #4d65f9;
                }
                .btn-primary:hover {
                    background-color: #3b51d9;
                    border-color: #3b51d9;
                }
                .form-label {
                    font-weight: 500;
                    color: #333;
                }
            `}</style>
        </Container>
    );
}