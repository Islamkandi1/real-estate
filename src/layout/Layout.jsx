import React from 'react'
import Navbar from './../navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import TopBtn from './../to-btn/TopBtn';

const Layout = () => {
  return (
    <>
      <TopBtn/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
