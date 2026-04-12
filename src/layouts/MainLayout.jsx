import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
        <Navbar />
        <Toaster position="top-right" />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout
