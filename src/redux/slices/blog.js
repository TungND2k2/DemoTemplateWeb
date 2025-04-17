import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk để lấy danh sách blogs
export const fetchBlogs = createAsyncThunk(
    "blogs/fetchBlogs",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/blogs`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Lỗi khi lấy danh sách blogs");
        }
    }
);

// Thunk để lấy danh sách 
export const fetchBlogsFindOne = createAsyncThunk(
    "blogs/fetchBlogsFindOne",
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/blogs/` + id);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Lỗi khi lấy danh sách blogs");
        }
    }
);

// Thunk để cập nhật catalog theo ID
export const fetchBlogsUpdateById = createAsyncThunk(
    "blogs/fetchBlogsUpdateById",
    async ({ id, data }, { rejectWithValue }) => {
        try {
            const url = `${process.env.REACT_APP_API_URL}/blogs/${id}`;
            const token = localStorage.getItem("token");

            const response = await axios.patch(url, data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.data || "Lỗi khi cập nhật catalog");
        }
    }
);

export const fetchBlogsCreate = createAsyncThunk(
    "blogs/fetchBlogsCreate",
    async (data, { rejectWithValue }) => {
        try {
            const url = `${process.env.REACT_APP_API_URL}/blogs`;
            const token = localStorage.getItem("token");
            const response = await axios.post(url, data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.data || "Lỗi khi tạo catalog");
        }
    }
);

export const fetchBlogsDeleteById = createAsyncThunk(
    "blogs/fetchBlogsDeleteById",
    async (id, { rejectWithValue }) => {
        try {
            const url = process.env.REACT_APP_API_URL + `/blogs/${id}`;
            const token = localStorage.getItem("token");
            await axios.delete(url, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            return id; // Trả về ID đã xóa để cập nhật Redux state
        } catch (error) {
            return rejectWithValue(error.response?.data?.data || "Lỗi khi xóa danh mục");
        }
    }
);

// Thêm vào extraReducers tương tự
const blogsSlice = createSlice({
    name: "blogs",
    initialState: {
        items: [], // Danh sách blogs
        selectedCatalog: null, // Catalog được chọn (sửa từ selectedCatalogs)
        status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Xử lý fetchCatalogs
            .addCase(fetchBlogs.pending, (state) => {
                state.status = "loading";
                state.error = null; // Reset error khi bắt đầu fetch
            })
            .addCase(fetchBlogs.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload; // Lưu danh sách blogs
            })
            .addCase(fetchBlogs.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            // Xử lý fetchCatalogsUpdateById
            .addCase(fetchBlogsUpdateById.pending, (state) => {
                state.status = "loading";
                state.error = null; // Reset error khi bắt đầu update
            })
            .addCase(fetchBlogsUpdateById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.selectedCatalog = action.payload; // Lưu catalog đã cập nhật
                // Cập nhật danh sách items nếu cần
            })
            .addCase(fetchBlogsUpdateById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(fetchBlogsCreate.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchBlogsCreate.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items.data.push(action.payload); // Thêm sản phẩm mới vào danh sách
            })
            .addCase(fetchBlogsCreate.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(fetchBlogsDeleteById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchBlogsDeleteById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items.data.push(action.payload); // Thêm sản phẩm mới vào danh sách
            })
            .addCase(fetchBlogsDeleteById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(fetchBlogsFindOne.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchBlogsFindOne.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.selectedCatalog = action.payload;
            })
            .addCase(fetchBlogsFindOne.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            ;
    },
});

export default blogsSlice.reducer;