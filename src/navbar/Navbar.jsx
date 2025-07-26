import React, { useEffect, useState } from "react";
import { assets } from "./../assets/images/assets";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scroll, setScroll] = useState("");
  // handle bg of navbar =========================================================
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // handle scroll=================================================================
  function handleScroll() {
    if (scrollY >= 100) {
      setScroll("my-bg");
    } else {
      setScroll("");
    }
  }

  return (
    <>
      <nav className={`navbar  navbar-expand-lg  ${scroll}   fixed-top`}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={assets.logo} alt="" />
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img
              src={assets.menu_icon}
              alt=""
              className="offcanvas-title"
              id="offcanvasRightLabel"
            />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close me-auto ms-0"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <ul className="navbar-nav  ms-lg-auto offcanvas-body mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link my-link"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link my-link" to="about">
                  about
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link my-link" to="projects">
                  projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link my-link" to="Testimonials">
                  Testimonials
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link my-link" to="contact">
                  contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
