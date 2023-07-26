import { React, useEffect, useState } from "react";
import wiki from "../assets/images/images/wikiframe.png";
import nuro from "../assets/images/images/nurosound.png";
import creative from "../assets/images/images/creative.png";
import dashboard from "../assets/images/images/dashboard.png";
import deltify from "../assets/images/images/deltify.png";
import archi from "../assets/images/images/archi.png";
import loud from "../assets/images/images/yoruba.png";
import tailwind from "../assets/images/images/tailwind.png";

const Knowledge = () => {
  const [Banner, setBanner] = useState("");

  useEffect(() => {
    setBanner(wiki);
  }, []);

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
        <div className=" w-full md:w-1/12 flex flex-row md:flex-col md:gap-5 gap-5 items-center overflow-x-scroll md:overflow-x-visible  px-5">
          <button
            className={`${
              Banner == wiki && "bg-white shadow-md"
            } w-1/3 md:w-[8rem] h-[3rem] rounded-md px-5`}
            onClick={() => setBanner(wiki)}
          >
            Wiki
          </button>
          <button
            className={`${
              Banner == nuro && "bg-white  shadow-md"
            } w-1/3 md:w-[8rem] h-[3rem] rounded-md  px-5 `}
            onClick={() => setBanner(nuro)}
          >
            Projects
          </button>
          <button
            className={`${
              Banner == creative && "bg-white shadow-md"
            } w-1/3 md:w-[8rem] h-[3rem] rounded-md  px-5 `}
            onClick={() => setBanner(creative)}
          >
            Meetings
          </button>
          <button
            className={`${
              Banner == dashboard && "bg-white  shadow-md"
            } w-1/3 md:w-[8rem] h-[3rem] rounded-md  px-5 `}
            onClick={() => setBanner(dashboard)}
          >
            Onboarding
          </button>
          <button
            className={`${
              Banner == deltify && "bg-white  shadow-md"
            } w-1/3 md:w-[8rem] h-[3rem]  rounded-md  px-5`}
            onClick={() => setBanner(deltify)}
          >
            Processes
          </button>
          <button
            className={`${
              Banner == archi && "bg-white  shadow-md"
            } w-1/3 md:w-[8rem] h-[3rem] rounded-md  px-5`}
            onClick={() => setBanner(archi)}
          >
            1:1s
          </button>
          <button
            className={`${
              Banner == loud && "bg-white  shadow-md"
            } w-1/3 md:w-[8rem] h-[3rem]  px-5  `}
            onClick={() => setBanner(loud)}
          >
            Team updates
          </button>
          <button
            className={`${
              Banner == tailwind && "bg-white rounded-md  shadow-md"
            }  w-1/3 md:w-[8rem] h-[3rem]  px-5`}
            onClick={() => setBanner(tailwind)}
          >
            User research
          </button>
          <button className=" w-1/4 md:w-[8rem] h-[3rem] rounded-md  px-5 ">
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
