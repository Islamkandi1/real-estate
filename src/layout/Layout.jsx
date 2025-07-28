import React from 'react'
import Navbar from './../navbar/Navbar';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../footer/Footer';
import TopBtn from './../to-btn/TopBtn';

const Layout = () => {
  return (
    <>
    <ScrollRestoration/>
      <TopBtn/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
