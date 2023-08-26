/* eslint-disable no-unused-vars */
import React from "react";
import "./heroSession.css";
import { FaFacebookF } from "react-icons/fa";
import { BsDiscord, BsTwitter } from "react-icons/bs";

const HeroSession = () => {
  return (
    <section id="heroSection" className=" bg-gray-800 text-white">
      <div className=" w-[80%] mx-auto">
        <div className=" w-[50%] h-[1000px] flex flex-col gap-5 justify-center relative">
          <h1 className=" text-6xl font-semibold">
            Hi ,I&apos;m Min Thu Khant
          </h1>
          <h3 className="text-3xl text-stroke ">Frontend Developer</h3>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            voluptate adipisci doloribus recusandae obcaecati non eveniet, culpa
            commodi! Provident ab tempora quo aspernatur illum eveniet vero
            impedit consequuntur nihil sapiente?
          </p>
          <div className="flex gap-20 mt-12">
            <button className=" py-2 px-6 rounded-lg secondary-box border-2 border-primary relative text-xl">
              Leave a Project
            </button>
            <button className=" py-2 px-6 rounded-lg animated-btn relative text-primary text-xl">
              Let&apos;s talk
            </button>
          </div>
          <div className=" absolute link-icon-group flex gap-5">
            <div className=" border-2 border-primary rounded-full p-2 cursor-pointer icon-hover-effect text-primary">
              <FaFacebookF className=" text-lg" />
            </div>
            <div className=" border-2 border-primary rounded-full p-2 cursor-pointer icon-hover-effect text-primary">
              <BsDiscord className=" text-lg" />
            </div>
            <div className=" border-2 border-primary rounded-full p-2 cursor-pointer icon-hover-effect text-primary">
              <BsTwitter className=" text-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSession;
