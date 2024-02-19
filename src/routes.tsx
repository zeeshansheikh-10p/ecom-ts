import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Shop from './pages/shop';
import Category from './pages/category';
import Conact from './pages/contact';

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/shop',
      element: <Shop/>
    },
    {
      path: '/category',
      element: <Category/>
    },
    {
      path: '/contact',
      element: <Conact/>
    },
]);