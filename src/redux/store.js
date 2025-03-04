import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user';
import productSlice from './slices/product'; // Import reducer của product
import categoriesSlice from './slices/category'
import catalogsSlice from './slices/catalog'
import adminSlice from './slices/admin'
const store = configureStore({
  reducer: {
    user: userSlice,
    products: productSlice, // Thêm reducer vào store
    categories: categoriesSlice, // Thêm reducer vào store
    catalogs: catalogsSlice,
    admins: adminSlice
  },
});

export default store;
