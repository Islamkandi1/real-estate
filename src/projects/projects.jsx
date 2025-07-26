import React, { useEffect } from "react";
import { projectsData } from "./../assets/images/assets";
import Item from "./../items/Item";
import Heading from "../heading/Heading";
const Projects = () => {
  // change page title============================
  useEffect(() => {
    document.title = "project";
  }, []);
  // *jsx code======================================================
  return (
    <>
      <Heading text={"our projects"} />
      <section className="container pro py-5">
        <section className="text mb-4 text-center">
          <h2 className="head ">
            <b>Projects</b>
            <span> Completed</span>
          </h2>
          <p className="head-p">
            Crafting Spaces, Building Legacies—Explore Our Portfolio
          </p>
        </section>
        <section className="row ">
          <section className="col-10 mx-auto">
            <section className="inner">
              <section
                className={`row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4`}
              >
                {projectsData.map((ele, index) => {
                  return <Item key={index} ele={ele} />;
                })}
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Projects;
