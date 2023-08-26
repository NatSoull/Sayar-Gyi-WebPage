/* eslint-disable no-unused-vars */
import React from "react";
import lady from "../img/lady.png";
import "./aboutMe.css";

const AboutMe = () => {
  return (
    <section id="aboutMe" className=" bg-gray-700">
      <div className=" text-center h-[1000px] text-white w-[80%] mx-auto">
        <div className=" pt-10 mb-20">
          <h1 className="text-6xl font-semibold">
            About <span className=" text-primary">Me</span>
          </h1>
        </div>
        <div className="second-border relative inline-block ">
          <div className=" rounded-full overflow-hidden border border-red-600">
            <img className=" w-[300px] h-[300px] object-cover" src={lady} />
          </div>
        </div>
        <div className=" w-[70%] mx-auto mt-20">
          <h1 className=" text-3xl font-bold mb-10">Frontend Developer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quis
            aliquam vel reprehenderit ipsa repellat debitis, libero voluptas
            eaque assumenda rerum et, autem iure molestias tempore cumque!
            Libero, laborum deserunt. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ipsum eos atque omnis voluptatibus doloribus
            optio, velit eligendi praesentium, vero id exercitationem quasi
            perspiciatis iure sint tenetur eius ullam nihil accusantium?
          </p>
        </div>
        <div className=" mt-10">
          <button className=" py-2 px-7 rounded-lg animated-btn relative text-xl">
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
