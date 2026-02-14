import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Router.jsx";
import { Provider } from "react-redux";
import { store } from "./Stores/store.js";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Provider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <AuthProvider>
    <Provider store={store}>
       <Toaster />
      <RouterProvider router={router} />
    </Provider>
  </AuthProvider>
  </StrictMode>
);
