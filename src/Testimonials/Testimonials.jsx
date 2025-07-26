import React, { useEffect } from "react";
import { testimonialsData } from "./../assets/images/assets";
import TestimonialsItem from "./../Testimonials-item/Testimonials-item";
import Heading from "./../heading/Heading";

const Testimonials = () => {
  // change page title============================
    useEffect(()=>{
    document.title = "Testimonials"
  },[])
  return (
    <>
      <Heading text={"our customer"} />
      <section className="container py-5">
        <section className="text mb-4">
          <h2 className="head text-center">
            <b>customers</b>
            <span> opinion</span>
          </h2>
          <p className="head-p text-center">
            Real Stories from Those Who Found Home with Us
          </p>
        </section>
        <section className="row row-cols-1 row-cols-md-2 g-4 ">
          {testimonialsData.map((ele, index) => {
            return <TestimonialsItem key={index} ele={ele} />;
          })}
        </section>
      </section>
    </>
  );
};

export default Testimonials;
