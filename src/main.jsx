import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './Camponents/Login/Login.jsx'
import Register from './Camponents/Register/Register.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './Camponents/Dashboard/Dashboard.jsx'
import { MyProvider } from './MyContext.jsx'
import ProtectedRoute from './PrivateRoute/ProtectedRoute.jsx'
import Form from './Camponents/FormCamponent/Form.jsx'


const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute element={<Dashboard />} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <MyProvider>
      <RouterProvider router={router} />
    </MyProvider>
 
);