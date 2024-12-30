import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ScrollToTop from "./customHook/useScrollToTop";
import Home from "./pages/website/Home/Home";
import About from "./pages/website/About/About";
import Faq from "./pages/website/faq/Faq";
import Contact from "./pages/website/contact/Contact";
import News from "./pages/website/news/News";
import Marketplace from "./pages/product/marketplace/Marketplace";
import Login from "./pages/product/auth/login/Login";
import Register from "./pages/product/auth/register/Register";
import Verify from "./pages/product/auth/verify/Verify";
import AccountCreated from "./pages/product/auth/verify/AccountCreated";
import Plans from "./pages/product/plans/Plans";
import Layout from "./components/layout/Layout";
import Profile from "./pages/product/profile/Profile";
import ProfileSetUpCompleted from "./pages/product/profile/ProfileSetUpCompleted";
import AddNewFarm from "./pages/product/farm/AddNewFarm";
import FarmList from "./pages/product/farm/FarmList";
import Dashboard from "./pages/product/dashboard/Dashboard";
import MyFarm from "./pages/product/farm/MyFarm";

axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<News />} />
        <Route path="/marketplace" element={<Marketplace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify/:otp" element={<Verify />} />

        <Route
          path="/registration-completed/:type"
          element={<AccountCreated />}
        />
        <Route path="/plans" element={<Plans />} />

        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />

        <Route
          path="/profile/setup-completed"
          element={<ProfileSetUpCompleted />}
        />

        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route
          path="/my-farm"
          element={
            <Layout>
              <MyFarm />
            </Layout>
          }
        />

        <Route
          path="/my-farm/new"
          element={
            <Layout>
              <AddNewFarm />
            </Layout>
          }
        />

        <Route
          path="/my-farm/farms"
          element={
            <Layout>
              <FarmList />
            </Layout>
          }
        />

        <Route
          path="/wallet"
          element={
            <Layout>
              {/* <Profile /> */}
            </Layout>
          }
        />
        <Route
          path="/orders"
          element={
            <Layout>
              {/* <Profile /> */}
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
