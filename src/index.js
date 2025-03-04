import React from "react";
import ReactDOM from "react-dom/client"; // Đúng cho React 18
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store"; // Import store

const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
