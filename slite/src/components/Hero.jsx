import React from "react";
import under from "../assets/images/images/svgline.svg";
import line from "../assets/images/images/line.png";
import pile from "../assets/images/images/pile.png";

const Hero = () => {
  return (
    <div className=" bg-[#F9EFE4] py-10 text-center h-[160vh]">
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
      <div className=" rounded-full md:w-[389px] w-[80vw]  ml-10  border-2 border-gray-500 md:mx-auto my-16">
        <input
          type="text"
          className=" md:h-[3.5rem] h-12 md:w-1/2  w-1/2 outline-none focus:outline-none bg-transparent rounded-full  p-2 px-auto "
          placeholder="name@company.com"
          color="#98999A"
        />

        <button className=" md:h-[3.5rem] h-12 w-1/2 md:w-1/2  rounded-full text-white bg-blue-500 cursor-pointer scale-105   ">
          {" "}
          Start for free
        </button>
      </div>
      <section className=" m-5 flex items-center justify-center">
        <img src={line} alt="" className=" md:h-[60vh] w-1/1 " />
      </section>
      <section className=" flex flex-col justify-center items-center relative w-[50rem] mx-auto px-[10rem] ">
        <span className=" text-gray-700 text-sm font-semibold  text-center">
          8:45 aM - PDT
        </span>
        <div className=" card bg-white rounded-md h-[7rem] w-[26rem] shadow-md absolute top-11"></div>
        <div className=" bg-white rounded-md h-[6.5rem] w-[28rem] absolute top-11 shadow-md  py-5  flex justify-start pl-10 items-center  ">
          <img src={pile} alt="" className=" w-[4.5rem]" />{" "}
          <section className=" pl-5 ">
            <p className=" font-semibold">Georges made some changes</p>
            <p>The abnormal guide to remote</p>
          </section>
        </div>
        <div className=" bg-white rounded-md h-[6rem] w-[30rem] absolute top-11 shadow-md animate-bounce py-5  flex justify-start pl-10 items-center ">
          <img src={pile} alt="" className=" w-[4.5rem]" />{" "}
          <section className=" pl-5 ">
            <p className=" font-semibold">Georges made some changes</p>
            <p>The abnormal guide to remote</p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Hero;
