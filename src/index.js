import './i18n';
import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Layout from './Pages/Layout/Layout';
import HomePage from './Pages/Home/HomePage';
import LoginPage from './Pages/Login/LoginPage';
import RegisterPage from './Pages/Register/RegisterPage';
import StorePage from './Pages/Store/StorePage';
import ProductPage from './Pages/Product/ProductPage';
import FaqsPage from './Pages/Faqs/FaqsPage';
import ContactUsPage from './Pages/ContactUs/ContactUsPage';
import AboutPage from './Pages/About/AboutPage';
import CartPage from './Pages/Cart/CartPage';
import TermsPage from './Pages/Terms/TermsPage'
import SiteMapPage from './Pages/SiteMap/SiteMapPage'
import ForgetPassowrd from './Pages/ForgetPassword/ForgetPassword'
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import TrackOrderPage from './Pages/TrackOrder/TrackOrderPage';
import CheckoutPage from './Pages/Checkout/CheckoutPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Error Page</div>,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/faqs",
        element: <FaqsPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/termsConditions",
        element: <TermsPage />,
      },
      {
        path: "/sitemap",
        element: <SiteMapPage />,
      },
      {
        path: "/forgetpassword",
        element: <ForgetPassowrd />,
      },

      {
        path: "/reset/:verify",
        element: <ResetPassword />,
      },
      {
        path: "/track-order",
        element: <TrackOrderPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },


    ]
  },
  {
    path: "/store",
    element: <Layout />,
    errorElement: <div>Error Page</div>,
    children: [
      { index: true, element: <StorePage /> },
      { path: "best-seller", element: <div>best-seller Page Route</div> },
      { path: "special-offers", element: <div>special-offers Page Route</div> },
      { path: "all-categories", element: <div>All Categories Page Route</div> },
      { path: "category/:categoryId", element: <div>Category Page Route</div> },
      { path: "product/:prodId", element: <ProductPage />}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

