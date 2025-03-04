import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk để lấy danh sách sản phẩm (có thể truyền pageSize)
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (pageSize, { rejectWithValue }) => {
        try {
            const url = pageSize
                ? process.env.REACT_APP_API_URL + `/products?pageSize=${pageSize}`
                : process.env.REACT_APP_API_URL + "/products";

            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Lỗi khi lấy sản phẩm");
        }
    }
);

// Thunk để lấy một sản phẩm theo ID
export const fetchProductById = createAsyncThunk(
    "products/fetchProductById",
    async (id, { rejectWithValue }) => {
        try {
            const url = process.env.REACT_APP_API_URL + `/products/${id}`;

            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.data || "Lỗi khi lấy sản phẩm");
        }
    }
);

export const fetchProductUpdateById = createAsyncThunk(
    "products/fetchProductUpdateById",
    async ({ id, data }, { rejectWithValue }) => {
        try {
            const url = `${process.env.REACT_APP_API_URL}/products/${id}`;
            const token = localStorage.getItem("token"); // Lấy token từ localStorage

            const response = await axios.patch(url, data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Thêm token vào header
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.data || "Lỗi khi cập nhật sản phẩm");
        }
    }
);

export const fetchProductCreate = createAsyncThunk(
    "products/fetchProductCreate",
    async (data, { rejectWithValue }) => {
        try {
            const url = `${process.env.REACT_APP_API_URL}/products`;
            const token = localStorage.getItem("token");
            const response = await axios.post(url, data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.data || "Lỗi khi tạo sản phẩm");
        }
    }
);

export const fetchProductDeleteById = createAsyncThunk(
    "products/fetchProductDeleteById",
    async (id, { rejectWithValue }) => {
        try {
            const url = process.env.REACT_APP_API_URL + `/products/${id}`;
            const token = localStorage.getItem("token");
            await axios.delete(url,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            return id;
        } catch (error) {
            return rejectWithValue(error.response?.data?.data || "Lỗi khi xóa sản phẩm");
        }
    }
);

const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [], // Danh sách sản phẩm
        selectedProduct: null, // Sản phẩm được chọn
        status: "idle", // Trạng thái tải dữ liệu
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Xử lý fetchProducts (Lấy danh sách sản phẩm)
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            // Xử lý fetchProductById (Lấy sản phẩm theo ID)
            .addCase(fetchProductById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.selectedProduct = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(fetchProductUpdateById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProductUpdateById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.selectedProduct = action.payload;
            })
            .addCase(fetchProductUpdateById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(fetchProductCreate.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProductCreate.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items.data.push(action.payload); // Thêm sản phẩm mới vào danh sách
            })
            .addCase(fetchProductCreate.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(fetchProductDeleteById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProductDeleteById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items.data.push(action.payload); // Thêm sản phẩm mới vào danh sách
            })
            .addCase(fetchProductDeleteById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            ;
    },
});

export default productSlice.reducer;
