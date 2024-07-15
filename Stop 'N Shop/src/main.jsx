import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import {HomePage, Cart, NotFound, Product, ProductList} from './pages/index.js'
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout></Layout>}>
        <Route path='' element={<HomePage></HomePage>}></Route>
          <Route path='cart' element={<Cart/>}/>
          <Route path='product' element={<Product></Product>}>
              <Route path=":page" element={<Product></Product>}>
                <Route path=':id' element={<Product/>}>   
                </Route>
              </Route>
              <Route path="product_list" element={<ProductList></ProductList>}></Route>
          </Route>
          <Route path="product_list" element={<ProductList></ProductList>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Route>
    )
)
  
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}  />
  
)




