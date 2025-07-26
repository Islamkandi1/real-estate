import React, { useEffect } from "react";
import Header from './../header/Header';
import AboutSection from "../about_section/AboutSection";
import Pro from "../pro-section/Pro";

const Home = () => {
// change page tilte==================================
  useEffect(()=>{
    document.title = "home"
  },[])
  return (
    <>
    <Header move={0}/>
    <AboutSection move={500}/>
    <Pro/>
    </>
  );
};

export default Home;
