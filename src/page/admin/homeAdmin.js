import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalogs, fetchCatalogsUpdateById, fetchCatalogsCreate, fetchCatalogsDeleteById } from "../../redux/slices/catalog";
import { fetchProducts, fetchProductUpdateById, fetchProductCreate, fetchProductDeleteById } from "../../redux/slices/product";
import { fetchCategories, fetchCategoriesUpdateById, fetchCategoriesCreate, fetchCategoriesDeleteById } from "../../redux/slices/category";

const AdminPage = () => {
  const dispatch = useDispatch();
  const { items: catalogs, status: catalogStatus } = useSelector((state) => state.catalogs);
  const { items: products, status: productStatus } = useSelector((state) => state.products);
  const { items: categories, status: categoryStatus } = useSelector((state) => state.categories);
  const [activeTab, setActiveTab] = useState("catalogs");
  const [editItem, setEditItem] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const handleDelete = (item, type) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa không?")) {
      switch (type) {
        case "catalogs":
          dispatch(fetchCatalogsDeleteById(item._id)).then(() => dispatch(fetchCatalogs()));
          break;
        case "products":
          dispatch(fetchProductDeleteById(item._id)).then(() => dispatch(fetchProducts()));
          break;
        case "categories":
          dispatch(fetchCategoriesDeleteById(item._id)).then(() => dispatch(fetchCategories()));
          break;
        default:
          console.error("Loại không hợp lệ:", type);
      }
    }
  };

  useEffect(() => {
    if (catalogStatus === "idle") dispatch(fetchCatalogs());
    if (productStatus === "idle") dispatch(fetchProducts());
    if (categoryStatus === "idle") dispatch(fetchCategories());
  }, [dispatch, catalogStatus, productStatus, categoryStatus]);

  const handleEdit = (item, type) => {
    setEditItem({ ...item, type });
    setIsCreating(false);
  };

  const handleCreate = (type) => {
    const defaultValues = {
      products: {
        type,
        name: "",
        title: "",
        idAdmin: "",
        description: "",
        price: 0,
        imageUrl: "",
        stock: 0,
        idCategory: "",
        isActive: true,
        attributes: { material: "", size: [], availability: "", rating: 0 },
      },
      categories: {
        type,
        title: "",
        name: "",
      },
      catalogs: {
        type,
        name: "",
        title: "",
        description: "",
        price: 0,
        imageUrl: "",
        stock: 0,
        isActive: true,
      },
    };

    setEditItem(defaultValues[type]); // Khởi tạo với tất cả các trường mặc định
    setIsCreating(true);
  };

  const handleSave = () => {
    if (!editItem) return;

    const { _id, type, ...data } = editItem;

    const actions = {
      products: {
        update: fetchProductUpdateById,
        create: fetchProductCreate,
        fetch: fetchProducts,
        errorMessage: "sản phẩm",
      },
      categories: {
        update: fetchCategoriesUpdateById,
        create: fetchCategoriesCreate,
        fetch: fetchCategories,
        errorMessage: "danh mục",
      },
      catalogs: {
        update: fetchCatalogsUpdateById,
        create: fetchCatalogsCreate,
        fetch: fetchCatalogs,
        errorMessage: "catalog",
      },
    };

    if (!actions[type]) return;

    const { update, create, fetch, errorMessage } = actions[type];
    const action = isCreating ? create : update;

    dispatch(isCreating ? action(data) : action({ id: _id, data }))
      .then((result) => {
        if (result.meta.requestStatus === "fulfilled") {
          dispatch(fetch());
          setEditItem(null);
          setIsCreating(false);
        } else {
          alert(`Thao tác thất bại: ${result.payload || "Lỗi không xác định"}`);
        }
      })
      .catch((error) => {
        console.error(`Error handling ${errorMessage}:`, error);
        alert(`Đã xảy ra lỗi khi xử lý ${errorMessage}`);
      });
  };

  const renderTable = (items, type) => (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
        <button className="btn btn-primary" onClick={() => handleCreate(type)}>
          Tạo mới
        </button>
      </div>
      {(!items || items.length === 0) && <p>Không có dữ liệu</p>}
      {items && items.data && items.data.length > 0 && (
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên</th>
              {type === "products" && (
                <>
                  <th>Giá</th>
                  <th>Mô tả</th>
                </>
              )}
              <th>Ngày tạo</th>
              <th>Image</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {items.data.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.name || item.title || "Không có tên"}</td>
                {type === "products" && (
                  <>
                    <td>{item.price || "N/A"}</td>
                    <td>{item.description || "N/A"}</td>
                  </>
                )}
                <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                <td>
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.title || "Product"}
                      style={{ width: "75px", height: "75px", objectFit: "cover" }}
                    />
                  ) : (
                    "N/A"
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => handleEdit(item, type)}
                  >
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(item, type)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );

  const renderEditForm = () => {
    if (!editItem) return null;

    const excludedFields = ["_id", "type", "createdAt", "updatedAt", "owner"];

    // Định nghĩa các trường cần hiển thị cho từng type
    const fieldTemplates = {
      products: {
        name: "",
        title: "",
        idAdmin: "",
        description: "",
        price: 0,
        imageUrl: "",
        stock: 0,
        idCategory: "",
        isActive: true,
        attributes: { material: "", size: [], availability: "", rating: 0 },
      },
      categories: {
        title: "",
        name: "",
      },
      catalogs: {
        name: "",
        title: "",
        description: "",
        price: 0,
        imageUrl: "",
        stock: 0,
        isActive: true,
      },
    };

    // Đảm bảo tất cả các trường cần thiết được hiển thị, ngay cả khi chưa có trong editItem
    const fieldsToRender = { ...fieldTemplates[editItem.type], ...editItem };

    const renderInput = (key, value, parentKey = "") => {
      const fullKey = parentKey ? `${parentKey}.${key}` : key;

      if (key === "imageUrl") {
        return (
          <>
            <input
              type="text"
              className="form-control"
              value={value || ""}
              onChange={(e) => setEditItem({ ...editItem, [fullKey]: e.target.value })}
            />
            {value && (
              <img
                src={value}
                alt="Preview"
                style={{ width: "100px", height: "100px", marginTop: "10px" }}
              />
            )}
          </>
        );
      }
      if (key === "isActive") {
        return (
          <input
            type="checkbox"
            checked={value ?? false}
            onChange={(e) => setEditItem({ ...editItem, [fullKey]: e.target.checked })}
          />
        );
      }
      if (key === "price" || key === "stock" || key === "rating") {
        return (
          <input
            type="number"
            className="form-control"
            value={value ?? ""}
            onChange={(e) => setEditItem({ ...editItem, [fullKey]: parseFloat(e.target.value) || 0 })}
          />
        );
      }
      if (key === "size" && (Array.isArray(value) || isCreating)) {
        return (
          <input
            type="text"
            className="form-control"
            value={Array.isArray(value) ? value.join(", ") : ""}
            onChange={(e) => setEditItem({ ...editItem, [fullKey]: e.target.value.split(", ") })}
          />
        );
      }
      if (key === "description") {
        return (
          <textarea
            className="form-control"
            value={value || ""}
            onChange={(e) => setEditItem({ ...editItem, [fullKey]: e.target.value })}
          />
        );
      }
      if (key === "idCategory") {
        return (
          <select
            className="form-control"
            value={value || ""}
            onChange={(e) => setEditItem({ ...editItem, [fullKey]: e.target.value })}
          >
            <option value="">Chọn danh mục</option>
            {categories?.data?.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name || cat.title}
              </option>
            ))}
          </select>
        );
      }
      return (
        <input
          type="text"
          className="form-control"
          value={value ?? ""}
          onChange={(e) => setEditItem({ ...editItem, [fullKey]: e.target.value })}
        />
      );
    };

    const renderFields = (obj, parentKey = "") =>
      Object.entries(obj)
        .filter(([key]) => !excludedFields.includes(key))
        .map(([key, value]) => {
          const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1");

          if (value && typeof value === "object" && !Array.isArray(value)) {
            return (
              <div key={key} className="mb-3">
                <h5>{label}</h5>
                {renderFields(value, key)}
              </div>
            );
          }

          return (
            <div key={key} className="mb-3">
              <label className="form-label">{label}</label>
              {renderInput(key, value, parentKey)}
            </div>
          );
        });

    return (
      <div className="mt-4">
        <h4>{isCreating ? "Tạo mới" : "Chỉnh sửa"} {editItem.type}</h4>
        {renderFields(fieldsToRender)}
        <button className="btn btn-success" onClick={handleSave}>
          {isCreating ? "Tạo" : "Lưu"}
        </button>
        <button
          className="btn btn-secondary ms-2"
          onClick={() => {
            setEditItem(null);
            setIsCreating(false);
          }}
        >
          Hủy
        </button>
      </div>
    );
  };

  return (
    <section className="admin-page section-padding">
      <div className="container">
        <h1 className="text-center mb-4">Manager</h1>
        <ul className="nav nav-tabs mb-4">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "catalogs" ? "active" : ""}`}
              onClick={() => setActiveTab("catalogs")}
            >
              Catalogs
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "products" ? "active" : ""}`}
              onClick={() => setActiveTab("products")}
            >
              Products
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "categories" ? "active" : ""}`}
              onClick={() => setActiveTab("categories")}
            >
              Categories
            </button>
          </li>
        </ul>

        <div className="tab-content">
          {activeTab === "catalogs" && renderTable(catalogs, "catalogs")}
          {activeTab === "products" && renderTable(products, "products")}
          {activeTab === "categories" && renderTable(categories, "categories")}
        </div>

        {renderEditForm()}
      </div>
    </section>
  );
};

export default AdminPage;