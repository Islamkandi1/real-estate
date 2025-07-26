import React from 'react'
import AboutSection from './../about_section/AboutSection';
import "./about.css"
import Heading from '../heading/Heading';
import { useEffect } from 'react';
const About = () => {
    useEffect(()=>{
    document.title = "about"
  },[])
  return (
    <>
    <Heading text={"who we are"}/>
      <AboutSection />
    </>
  )
}

export default About
