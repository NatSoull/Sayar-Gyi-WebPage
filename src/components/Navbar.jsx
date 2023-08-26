/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./navbar.css"

const Navbar = () => {

  const [fixedBackground , setFixedBackground] = useState("")

  window.onscroll = () => {
    if(window.scrollY > 10) {
      setFixedBackground("active-background")
    } else {
      setFixedBackground("")
    }
  }

  

  return (
    <div>
      <div className={` fixed top-0 left-0 w-[100%] navbar ${fixedBackground}`}>
        <div className=" w-[80%] mx-auto flex justify-between items-center py-8">
          <h1 className=" text-2xl select-none cursor-pointer navbar-btn">position fixed</h1>
          <div className=" flex gap-8 text-lg">
            <a href="#heroSection" className=" active cursor-pointer select-none navbar-btn">Home</a>
            <a href="#aboutMe" className=" cursor-pointer select-none navbar-btn">About</a>
            <a href="" className=" cursor-pointer select-none navbar-btn">Education</a>
            <a href="" className=" cursor-pointer select-none navbar-btn">Skill</a>
            <a href="" className=" cursor-pointer select-none navbar-btn">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
