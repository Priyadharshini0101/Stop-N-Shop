import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import NotFound from './pages/NotFound.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout></Layout>}>
        <Route path='' element={<HomePage></HomePage>}></Route>
      <Route path='cart' element={<Cart/>}/>
      {/* <Route path='contact' element={<Contact/>}/> */}
      <Route path='product/' element={<Product></Product>}>
      <Route path=':id' element={<Product/>}/>
      </Route>
      {/* <Route loader={githubInfoLoader} path="github" element={<Github/>}></Route> */}
      <Route path="*" element={<NotFound></NotFound>}></Route>
        </Route>
    )
)
  
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}  />
  
)




