import React, { useEffect, useState } from "react";

const TopBtn = () => {
  const [btn, setBtn] = useState("opacity-0");
//  ? handle btn appear or not===========================================
  useEffect(() => {
    window.addEventListener("scroll", handleBtn);
    return ()=>window.removeEventListener("scroll", handleBtn);
  }, []);
  function handleBtn() {
    scrollY >= 200 ? setBtn("opacity-100") : setBtn("opacity-0");
  }
  // to top fun========================================

  function upBtn(){
    scrollTo({top:0,behavior:"smooth"})
  }
//  * jsx code========================================
  return (
    <>
      <button
        type="button"
        className={`btn btn-primary position-fixed  ${btn} up-btn`}
        onClick={upBtn}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  );
};

export default TopBtn;
