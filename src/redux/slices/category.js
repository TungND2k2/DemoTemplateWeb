import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk để lấy danh sách sản phẩm
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL + "/categories");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Lỗi khi lấy sản phẩm");
    }
  }
);

export const fetchCategoriesUpdateById = createAsyncThunk(
  "categories/fetchCategoriesUpdateById",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/categories/${id}`;
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

export const fetchCategoriesCreate = createAsyncThunk(
  "categories/fetchCategoriesCreate",
  async (data, { rejectWithValue }) => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/categories`;
      const token = localStorage.getItem("token");
      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.data || "Lỗi khi tạo danh mục");
    }
  }
);

export const fetchCategoriesDeleteById = createAsyncThunk(
  "categories/fetchCategoriesDeleteById",
  async (id, { rejectWithValue }) => {
    try {
      const url = process.env.REACT_APP_API_URL + `/categories/${id}`;
      const token = localStorage.getItem("token");
      await axios.delete(url,{
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.data || "Lỗi khi xóa danh mục con");
    }
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    items: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // Xử lý fetchCatalogsUpdateById
      .addCase(fetchCategoriesUpdateById.pending, (state) => {
        state.status = "loading";
        state.error = null; // Reset error khi bắt đầu update
      })
      .addCase(fetchCategoriesUpdateById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedCatalog = action.payload; // Lưu catalog đã cập nhật
        // Cập nhật danh sách items nếu cần
      })
      .addCase(fetchCategoriesUpdateById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchCategoriesCreate.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoriesCreate.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.data.push(action.payload); // Thêm sản phẩm mới vào danh sách
      })
      .addCase(fetchCategoriesCreate.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchCategoriesDeleteById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoriesDeleteById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items.data.push(action.payload); // Thêm sản phẩm mới vào danh sách
      })
      .addCase(fetchCategoriesDeleteById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
  },
});

export default categorySlice.reducer;
