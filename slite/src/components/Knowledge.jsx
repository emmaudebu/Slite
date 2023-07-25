import React from "react";
import wiki from "../assets/images/images/wikiframe.png";

const Knowledge = () => {
  return (
    <div className=" bg-[#F9EFE4] py-10 px-5">
      <section className=" text-center py-12">
        <p className=" font-bold text-2xl">A home for all of your knowledge.</p>
        <span>
          Project, knowledge base, process – bring all your work to life in
          Docs.
        </span>
      </section>
      <section className="flex md:mx-12 flex-col md:flex-row gap-5 md:gap-[5rem] items-center justify-center">
        <div className=" w-full md:w-1/12 flex flex-row md:flex-col md:gap-5 gap-1 flex-wrap px-5">
          <button className=" bg-white w-1/3 md:w-[8rem] h-[3rem] rounded-md p-auto">
            Wiki
          </button>
          <button className=" bg-white  w-1/3 md:w-[8rem] h-[3rem] rounded-md ">
            Wiki
          </button>
          <button className=" bg-white w-1/4 md:w-[8rem] h-[3rem] rounded-md p-auto">
            Wiki
          </button>
          <button className=" bg-white w-1/3 md:w-[8rem] h-[3rem] rounded-md p-auto">
            Wiki
          </button>
          <button className=" bg-white w-1/3 md:w-[8rem] h-[3rem] rounded-md p-auto">
            Wiki
          </button>
          <button className=" bg-white w-1/4 md:w-[8rem] h-[3rem] rounded-md p-auto">
            Wiki
          </button>
          <button className=" bg-white w-1/3 md:w-[8rem] h-[3rem] rounded-md p-auto">
            Wiki
          </button>
          <button className=" bg-white w-1/3 md:w-[8rem] h-[3rem] rounded-md p-auto">
            Wiki
          </button>
          <button className=" bg-white w-1/4 md:w-[8rem] h-[3rem] rounded-md p-auto">
            Wiki
          </button>
        </div>
        <section className=" bg-frame  bg-no-repeat ">
          <img src={wiki} alt="" className=" w-[100%]" />
        </section>
      </section>
    </div>
  );
};

export default Knowledge;
