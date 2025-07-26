import React from "react";
import "./header.css";
import { assets } from "./../assets/images/assets";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <section
        className="header d-flex justify-content-center align-items-center mb-4"
        style={{ backgroundImage: `url(${assets.header_img})` }}
      >
        <section className="container text-center">
          <section
            transition={{ duration: 1 }}
            className="content"
          >
            <h1 className="text-capitalize mb-5">
              Explore homes that fit your dreams
            </h1>
            <section className="btns d-flex flex-wrap justify-content-center gap-5 align-items-center">
              <Link to="projects">projecrts</Link>
              <Link to="contact" className="btn-color">
                contact us
              </Link>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Header;
