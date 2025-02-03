import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
    'user/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:3004/admins/login', {
                email,
                password,
            });

            // Lưu token vào localStorage
            const accessToken = response.data.data.access_token;
            const refreshToken = response.data.data.refresh_token;
            localStorage.setItem('access_token', accessToken);
            localStorage.setItem('refresh_token', refreshToken);
            localStorage.setItem('user', JSON.stringify(response.data.data.user)); // Lưu dữ liệu người dùng

            return {
                token: accessToken,
                refreshToken: refreshToken,
                user: response.data.data.user,
            };
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')) || null, // Thông tin người dùng
        token: localStorage.getItem('access_token') || null, // Access token
        refreshToken: localStorage.getItem('refresh_token') || null, // Refresh token
        status: 'idle', // Trạng thái của login
        error: null, // Thông báo lỗi nếu có
    },
    reducers: {
        logoutUser(state) {
            state.user = JSON.parse(localStorage.getItem('user')) || null;
            state.token = localStorage.getItem('access_token') || null;
            state.refreshToken = localStorage.getItem('refresh_token') || null;
            state.status = 'idle';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
                console.log("loading")
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log("Action Payload:", action.payload)
                state.status = 'succeeded';
                state.token = action.payload.token;
                state.refreshToken = action.payload.refreshToken;
                state.user = action.payload.user;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log("failed")
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
