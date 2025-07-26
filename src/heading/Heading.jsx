import React from "react";

const Heading = ({text}) => {
  return (
    <>
      <section className="about who-we-are pt-5">
        <section className="container pt-4">
          <section className=" py-4">
            <h2 className="text-capitalize text-light">{text}</h2>
          </section>
        </section>
      </section>
    </>
  );
};

export default Heading;
