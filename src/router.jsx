import React from 'react'
import { createBrowserRouter, Link } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/404';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: '*', // Page 404
    element: <NotFound />
  }
]);

export default router
