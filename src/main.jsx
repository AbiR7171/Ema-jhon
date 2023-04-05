import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import getOrderProduct from './getOrderProduct/getOrderProduct';
import Checkout from './components/Checkout/Checkout';

const router = createBrowserRouter([
  {
  path:"/",
  element:<App></App>,
  children:[
    {
      path: "/",
      element: <Shop></Shop>
    },
    {
      path: "order",
      element: <Order></Order>,
      loader: getOrderProduct
    },
    {
           path:"checkout",
           element: <Checkout></Checkout>
    },
    {
      path: "review",
      element: <Order></Order>
    },
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
