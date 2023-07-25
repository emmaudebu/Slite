import { React, useEffect, useState } from "react";
import wiki from "../assets/images/images/wikiframe.png";
import nuro from "../assets/images/images/nurosound.png";
import creative from "../assets/images/images/creative.png";

const Knowledge = () => {
  const [Banner, setBanner] = useState("");

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
          <button
            className=" bg-white w-1/3 md:w-[8rem] h-[3rem] rounded-md p-auto shadow-md"
            onClick={() => setBanner(wiki)}
          >
            Wiki
          </button>
          <button
            className=" bg-white  w-1/3 md:w-[8rem] h-[3rem] rounded-md shadow-md "
            onClick={() => setBanner(nuro)}
          >
            Projects
          </button>
          <button
            className=" bg-white w-1/4 md:w-[8rem] h-[3rem] rounded-md p-auto shadow-md"
            onClick={() => setBanner(creative)}
          >
            Processes
          </button>
          <button className=" bg-white w-1/3 md:w-[8rem] h-[3rem] rounded-md p-auto shadow-md">
            Onboarding
          </button>
          <button className=" bg-white w-1/3 md:w-[8rem] h-[3rem] rounded-md p-auto shadow-md">
            Meetings
          </button>
          <button className=" bg-white w-1/4 md:w-[8rem] h-[3rem] rounded-md p-auto shadow-md">
            Team updates
          </button>
          <button className=" bg-white w-1/3 md:w-[8rem] h-[3rem] rounded-md p-auto shadow-md">
            1:1s
          </button>
          <button className=" bg-white w-1/3 md:w-[8rem] h-[3rem] rounded-md p-auto shadow-md">
            User research
          </button>
          <button className=" bg-white w-1/4 md:w-[8rem] h-[3rem] rounded-md p-auto shadow-md">
            More →
          </button>
        </div>
        <section className="   bg-no-repeat ">
          <img src={Banner} alt="" className=" w-[100%]" />
        </section>
      </section>
    </div>
  );
};

export default Knowledge;
