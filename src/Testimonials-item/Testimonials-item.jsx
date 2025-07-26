import React from "react";
import "./testimonials.css";
import { assets } from "../assets/images/assets";
const TestimonialsItem = ({ ele }) => {
  return (
    <>
      <section className="col">
        <section className="inner  shadow-lg p-3 text-center">
          <section className="person d-flex justify-content-around mb-3 align-items-center">
            <figure className="mb-3">
              <img src={ele.image} alt={ele.alt} />
            </figure>
            <section className="title">
              <h3 className="person-name text-capitalize">{ele.name}</h3>
              <p className="text-p">{ele.title}</p>
            </section>
          </section>
          <p>{ele.text}</p>
          <p>
            {Array.from({ length: ele.rating }, (item, index) => {
              return <img key={index} src={assets.star_icon} alt="" />;
            })}
          </p>
        </section>
      </section>
    </>
  );
};

export default TestimonialsItem;
