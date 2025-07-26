import React from "react";

const Item = ({ele}) => {
  
  return (
    <>
      <section className="col">
        <div className="card  position-relative">
          <img src={ele.image} className="card-img-top w-100" />
          <section className="content">
            <h3>{ele.title}</h3>
            <p className="m-0">
              {ele.price} | {ele.location}
            </p>
          </section>
        </div>
      </section>
    </>
  );
};

export default Item;
