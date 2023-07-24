import React from "react";
import under from "../assets/images/images/svgline.svg";
import line from "../assets/images/images/line.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className=" bg-[#F9EFE4] py-10 text-center">
      <h1 className=" relative md:text-6xl text-3xl mt-12">
        Bring Clarity to your Team{" "}
        <img
          src={under}
          alt=""
          className=" absolute md:left-[29rem] top-[2rem] md:top-[3.5rem] left-[140px] md:w-[200px] w-[100px] animate-bounce"
        />
      </h1>
      <p className=" my-10 font-semibold ">
        Slite is a modern knowledge base that drives action with structured
        docs, thoughtful <br></br> collaboration and confident decision-making.
      </p>
      <div className=" rounded-full md:w-96 w-[79vw]  ml-10  border-2 border-gray-500 md:mx-auto my-16">
        <input
          type="text"
          className=" h-[3.5rem]  md:w-[230px]  w-[46vw] outline-none focus:outline-none bg-transparent rounded-full  p-2 px-auto "
          placeholder="name@company.com"
          color="#98999A"
        />

        <button className=" h-[3.5rem]  w-[145px]  rounded-full text-white bg-blue-500 cursor-pointer scale-105   ">
          {" "}
          Start for free
        </button>
      </div>
      <section className=" m-5">
        <img src={line} alt="" />
      </section>
    </div>
  );
};

export default Hero;
