import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage.js'
import RegisterPage from "./components/registerpage.js"
import { Toaster } from 'react-hot-toast';
import LoginPage from "./components/LoginPage.js"
import Page from "./Pages/Page.js"
import DashboardPage from "./Pages/DashboardPage.js"
import ForgotPage from './components/ForgotPage.js';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/page' element={<Page />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgotpassword" element={<ForgotPage />} />
    </Routes>
  )
}

export default App