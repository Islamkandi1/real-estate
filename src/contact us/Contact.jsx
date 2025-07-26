import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./contact.css";
import Heading from "../heading/Heading";
import { Bounce } from "react-toastify/unstyled";
const Contact = () => {
  const [inputValue, setValue] = useState({
    userName: "",
    userEmail: "",
    message: "",
  });
  const { userName, userEmail, message } = inputValue;
  //   change title of page just in mount case=====================================================
  useEffect(() => {
    document.title = "contact";
  }, []);

  //   change state of input value============================================================
  function handleValue() {
    let { value, id } = event.target;
    setValue({ ...inputValue, [id]: value });
  }
  // show touster=======================
  function showTouster() {
    if (
      userName.trim() != "" &&
      userEmail.trim() != "" &&
      message.trim() != ""
    ) {
      toast.success("Message Sended ✅", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setValue({
        userName: "",
        userEmail: "",
        message: "",
      });
    } else {
      toast.error("All inputs are required ❗", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }
  //   jsx code=============================================================
  return (
    <>
      <Heading text={"contact with us"} />
      <section className="container contact">
        <section className="content py-5">
          <section className="text text-center mb-4">
            <h2 className="head ">
              <b>contact</b>
              <span> with us</span>
            </h2>
            <p className="head-p">
              Ready to Make a Move? Let’s Build Your Future Together
            </p>
          </section>
          <form className="px-3 my-form" onSubmit={(e) => e.preventDefault()}>
            <ToastContainer stacked />
            <section className="input-box">
              <label
                htmlFor="userName"
                className={userName != "" ? "label-active" : ""}
              >
                userName :
              </label>
              <input
                value={userName}
                onChange={handleValue}
                type="text"
                name="user-name"
                id="userName"
                placeholder="userName"
              />
            </section>
            <section className="input-box">
              <label
                htmlFor="userEmail"
                className={userEmail != "" ? "label-active" : ""}
              >
                userEmail :
              </label>
              <input
                value={userEmail}
                onChange={handleValue}
                type="text"
                name="user-Email"
                id="userEmail"
                placeholder="userEmail"
              />
            </section>
            <section className="input-box">
              <label htmlFor="message">message :</label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={handleValue}
              ></textarea>
            </section>
            <button
              type="submit"
              className=" my-btn"
              onClick={() => showTouster()}
            >
              send message
            </button>
          </form>
        </section>
      </section>
    </>
  );
};

export default Contact;
