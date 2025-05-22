import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../views/pages/HomePage.jsx";
import Login from "../views/components/Login.jsx";
import Register from '../views/components/Register.jsx';
import PaymentPage from '../views/pages/PaymentPage.jsx';
import PrivateRoute from '../views/pages/PrivateRoute.jsx';
import Success from '../views/components/Success.jsx';
import BlogDetails from "../views/components/BlogDetails.jsx";
import HelpContact from "../views/components/HelpContact.jsx";

const Web = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signin" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/paymentSuccess" element={<Success />} />
                <Route path="/checkout/:id" element={<PrivateRoute><PaymentPage /></PrivateRoute>} />
                <Route path="/blogDetails/:id" element={<PrivateRoute><BlogDetails /></PrivateRoute>} />
                <Route path="/checkout" element={<PrivateRoute><PaymentPage /></PrivateRoute>} />
                <Route path="/help&Support" element={<HelpContact />} />
              
               
            </Routes>
        </BrowserRouter>
    );
};
export default Web;