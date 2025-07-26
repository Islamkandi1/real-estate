import Item from "./../items/Item";
import { projectsData } from "./../assets/images/assets";
import { useEffect, useState } from "react";
const Pro = () => {
  const [newPro, setNewPro] = useState([]);
  useEffect(() => {
    setNewPro(projectsData.slice(0, 3));
    return () => {
      setNewPro([]);
    };
  }, []);
  return (
    <>
      <section className="container  pro py-5">
        <section className="text mb-4 text-center">
          <h2 className="head ">
            <b>Projects</b>
            <span> Completed</span>
          </h2>
          <p className="head-p">
            Passionate About Properties, Dedicated to Your Vision
          </p>
        </section>
        <section className="row">
          <section className="col-11 mx-auto">
            <section className="inner ">
              <section className={`py-3 `}>
                <section
                  className={`row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4`}
                >
                  {newPro.map((ele, index) => {
                    return <Item key={index} ele={ele} />;
                  })}
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Pro;
