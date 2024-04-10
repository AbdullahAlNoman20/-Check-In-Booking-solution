import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import Error from './Components/Error';
import Login from './Components/Login';
import Register from './Components/Register';
import About from './Components/About';
import Details from './Components/Details';
import Profile from './Components/Profile';
import {HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: () =>  fetch('../Service.json')
      },
      {
        path: '/updateProfile',
        element: <Profile></Profile>
      }
    ]
  },
]);







ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>

  </React.StrictMode>,
)
