import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/admins/login`,
        credentials,
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data.data || response.data; // Chỉ lấy phần data nếu có
    } catch (error) {
      return rejectWithValue(error.response?.data || "Lỗi khi đăng nhập");
    }
  }
);

const adminSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.status = "idle";
      state.error = null;
      // Xóa thông tin khỏi localStorage khi logout
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Giả sử API trả về { statusCode, data: { user, token } }
        const payload = action.payload;
        console.log(payload)
        state.user = payload.user || payload; // Linh hoạt với cấu trúc API
        state.token = payload.access_token || null;

        // Lưu thông tin vào localStorage
        localStorage.setItem("user", JSON.stringify(state.user));
        localStorage.setItem("token", state.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // Lưu toàn bộ error object
      });
  },
});

// Khởi tạo state từ localStorage khi ứng dụng khởi động (nếu cần)
const loadStateFromStorage = () => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  return {
    user: user ? JSON.parse(user) : null,
    token: token || null,
    status: "idle",
    error: null,
  };
};

// Nếu bạn muốn state ban đầu lấy từ localStorage
adminSlice.initialState = loadStateFromStorage();

export const { logout } = adminSlice.actions;
export default adminSlice.reducer;