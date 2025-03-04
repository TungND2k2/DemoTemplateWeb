import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk để lấy danh sách catalogs
export const fetchCatalogs = createAsyncThunk(
    "catalogs/fetchCatalogs",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/catalogs`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Lỗi khi lấy danh sách catalogs");
        }
    }
);

// Thunk để cập nhật catalog theo ID
export const fetchCatalogsUpdateById = createAsyncThunk(
    "catalogs/fetchCatalogsUpdateById",
    async ({ id, data }, { rejectWithValue }) => {
        try {
            const url = `${process.env.REACT_APP_API_URL}/catalogs/${id}`;
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

export const fetchCatalogsCreate = createAsyncThunk(
    "catalogs/fetchCatalogsCreate",
    async (data, { rejectWithValue }) => {
        try {
            const url = `${process.env.REACT_APP_API_URL}/catalogs`;
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

export const fetchCatalogsDeleteById = createAsyncThunk(
    "catalogs/fetchCatalogsDeleteById",
    async (id, { rejectWithValue }) => {
        try {
            const url = process.env.REACT_APP_API_URL + `/catalogs/${id}`;
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
const catalogSlice = createSlice({
    name: "catalogs",
    initialState: {
        items: [], // Danh sách catalogs
        selectedCatalog: null, // Catalog được chọn (sửa từ selectedCatalogs)
        status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Xử lý fetchCatalogs
            .addCase(fetchCatalogs.pending, (state) => {
                state.status = "loading";
                state.error = null; // Reset error khi bắt đầu fetch
            })
            .addCase(fetchCatalogs.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload; // Lưu danh sách catalogs
            })
            .addCase(fetchCatalogs.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            // Xử lý fetchCatalogsUpdateById
            .addCase(fetchCatalogsUpdateById.pending, (state) => {
                state.status = "loading";
                state.error = null; // Reset error khi bắt đầu update
            })
            .addCase(fetchCatalogsUpdateById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.selectedCatalog = action.payload; // Lưu catalog đã cập nhật
                // Cập nhật danh sách items nếu cần
            })
            .addCase(fetchCatalogsUpdateById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(fetchCatalogsCreate.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCatalogsCreate.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items.data.push(action.payload); // Thêm sản phẩm mới vào danh sách
            })
            .addCase(fetchCatalogsCreate.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(fetchCatalogsDeleteById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCatalogsDeleteById.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items.data.push(action.payload); // Thêm sản phẩm mới vào danh sách
            })
            .addCase(fetchCatalogsDeleteById.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            ;
    },
});

export default catalogSlice.reducer;