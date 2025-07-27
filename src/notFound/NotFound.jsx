import React from "react";
import { assets } from "../assets/images/assets";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <section className="d-flex justify-content-center align-items-center vh-100">
        <figure style={{ width: "400px" }} className=" m-0 text-center">
          <img src={assets.notFound} className="w-100 mb-3" alt="" />
          <Link to={"/"} className="btn btn-primary">home</Link>
        </figure>
      </section>
    </>
  );
};

export default NotFound;
