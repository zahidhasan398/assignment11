import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Error from './components/Error.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './components/AuthProvider.jsx';
import AddToy from './components/AddToy.jsx';
import Alltoys from './components/Alltoys.jsx';
import Mytoys from './components/Mytoys.jsx';
import { UpdateForm } from './components/UpdateForm.jsx';
import ViewDetails from './components/ViewDetails.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Blogs from './components/Blogs.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path:"/addtoy",
        element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
      },
      {
        path:"/alltoys",
        element:<Alltoys></Alltoys>
      },
      {
        path:"/mytoys",
        element:<PrivateRoute><Mytoys></Mytoys></PrivateRoute>
      },
      {
        path:"/update/:id",
        element:<PrivateRoute><UpdateForm></UpdateForm></PrivateRoute>
      },
      {
        path:"/viewdetails/:id",
        element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://toy-market-server-mu.vercel.app/singletoy/${params.id}`)
      },
      {
        path:"/blog",
        element:<Blogs></Blogs>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>

      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
