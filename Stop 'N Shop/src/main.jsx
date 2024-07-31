import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./Layout.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { HomePage, Cart, NotFound, Product, Products,Login } from "./pages/index.js";
import {Toaster} from 'react-hot-toast'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout></Layout>}>
      <Route path="" element={<HomePage></HomePage>}></Route>
      <Route path="cart" element={<Cart />} />
      <Route path="product" element={<Product></Product>}>
        <Route path=":page" element={<Product></Product>}>
          <Route path=":id" element={<Product />}></Route>
        </Route>
        <Route path="product_list" element={<Products></Products>}></Route>
      </Route>
      <Route path="product_list" element={<Products></Products>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Route>
    <Route path="/login" element={<Login></Login>}></Route>
    
   
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <Toaster/>
  <RouterProvider router={router} />
  </>
);
