import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/slices/admin";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.admins);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser(formData)).unwrap();
      navigate("/admin");
    } catch (err) {
      console.error("Đăng nhập thất bại:", err);
    }
  };

  return (
    <section className="login section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card p-4 shadow-sm">
              <h2 className="text-center mb-4">Đăng Nhập</h2>
              {error && (
                <p className="text-danger text-center">
                  {typeof error === "string" 
                    ? error 
                    : error.data?.message || "Có lỗi xảy ra khi đăng nhập."}
                </p>
              )}
              {status === "succeeded" && (
                <p className="text-success text-center">Đăng nhập thành công!</p>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Nhập email của bạn"
                    required
                    disabled={status === "loading"}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Nhập mật khẩu"
                    required
                    disabled={status === "loading"}
                  />
                </div>
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? "Đang đăng nhập..." : "Đăng Nhập"}
                  </button>
                </div>
              </form>
              <p className="text-center mt-3">
                Chưa có tài khoản?{" "}
                <a href="/register" className="text-primary">
                  Đăng ký
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;