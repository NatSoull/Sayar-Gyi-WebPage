/* eslint-disable no-unused-vars */
import React from "react";
import "./education.css";
import { SlCalender } from "react-icons/sl";

const Education = () => {
  return (
    <div className="bg-gray-800">
      <div className="text-white h-[1000px] w-[80%] mx-auto">
        <h1 className="text-center text-6xl font-semibold pt-10">
          My <span className=" text-primary">Journey</span>
        </h1>
        <div className=" flex items-center mt-32">
          <div className=" w-[50%]">
            <div className=" w-[98%]">
              <h1 className=" px-5 text-3xl font-semibold">Education</h1>
              <div className=" px-5 border-l-2 border-primary flex flex-col gap-4 mt-5">
                <div className=" box-bar-line-point relative">
                  <div className=" border-primary border p-5 pt-3 flex flex-col gap-2 primary-box rounded-lg select-none">
                    <div className=" flex gap-5 items-center text-primary">
                      <SlCalender />
                      <p>2022 - 2023</p>
                    </div>
                    <h3 className=" text-2xl font-bold">MMS IT Student</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum odio, nulla neque perspiciatis recusandae quos
                      quisquam nihil odit numquam consectetur nemo optio
                      expedita consequatur, non impedit ad dolore animi totam?
                    </p>
                  </div>
                </div>
                <div className=" box-bar-line-point relative">
                  <div className=" border-primary border p-5 pt-3 flex flex-col gap-2 primary-box rounded-lg select-none">
                    <div className=" flex gap-5 items-center text-primary">
                      <SlCalender />
                      <p>2022 - 2023</p>
                    </div>
                    <h3 className=" text-2xl font-bold">
                      Taking Pre-GED Course
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum odio, nulla neque perspiciatis recusandae quos
                      quisquam nihil odit numquam consectetur nemo optio
                      expedita consequatur, non impedit ad dolore animi totam?
                    </p>
                  </div>
                </div>
                <div className=" box-bar-line-point relative">
                  <div className=" border-primary border p-5 pt-3 flex flex-col gap-2 primary-box rounded-lg select-none">
                    <div className=" flex gap-5 items-center text-primary">
                      <SlCalender />
                      <p>2022 - 2023</p>
                    </div>
                    <h3 className=" text-2xl font-bold">
                      Handle The Web Design
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsum odio, nulla neque perspiciatis recusandae quos
                      quisquam nihil odit numquam consectetur nemo optio
                      expedita consequatur, non impedit ad dolore animi totam?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-[50%]">
            <div className=" w-[98%]">
              <h1 className=" px-5 text-3xl font-semibold">Experience</h1>
              <div className=" px-5 border-l-2 border-primary mt-5 flex flex-col gap-4">
                <div className=" box-bar-line-point relative">
                  <div className=" border-primary border p-5 pt-3 flex flex-col gap-2 primary-box rounded-lg select-none">
                    <div className=" flex gap-5 items-center text-primary">
                      <SlCalender />
                      <p>2022 - 2023</p>
                    </div>
                    <h3 className=" text-2xl font-bold">No JOb</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sequi nam sed sunt optio reiciendis itaque? Voluptatem
                      totam aliquid autem, impedit molestias, reiciendis commodi
                      eveniet in fugit sequi temporibus fugiat repellat?
                    </p>
                  </div>
                </div>
                <div className=" box-bar-line-point relative">
                  <div className=" border-primary border p-5 pt-3 flex flex-col gap-2 primary-box rounded-lg select-none">
                    <div className=" flex gap-5 items-center text-primary">
                      <SlCalender />
                      <p>2022 - 2023</p>
                    </div>
                    <h3 className=" text-2xl font-bold">Just Preparing</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sequi nam sed sunt optio reiciendis itaque? Voluptatem
                      totam aliquid autem, impedit molestias, reiciendis commodi
                      eveniet in fugit sequi temporibus fugiat repellat?
                    </p>
                  </div>
                </div>
                <div className=" box-bar-line-point relative">
                  <div className=" border-primary border p-5 pt-3 flex flex-col gap-2 primary-box rounded-lg select-none">
                    <div className=" flex gap-5 items-center text-primary">
                      <SlCalender />
                      <p>2022 - 2023</p>
                    </div>
                    <h3 className=" text-2xl font-bold">
                      No Experience But Sayar Gyi
                    </h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Sequi nam sed sunt optio reiciendis itaque? Voluptatem
                      totam aliquid autem, impedit molestias, reiciendis commodi
                      eveniet in fugit sequi temporibus fugiat repellat?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
