import React from "react";
import author from "../assets/images/images/auto.png";

const Prices = () => {
  return (
    <div className="bg-[#F9EFE4] text-center py-10 ">
      <section className=" w-[50rem] h-[13.5rem] mx-auto border-y-2 border-slate-400 relative ">
        <p className="mx-auto text-center py-5">
          Slite let us bring the two most important communication bits in the
          same place:<br></br> documentation & decision-making. The connection
          between docs and <br /> discussions makes decision-making more
          efficient, transparent & contextualized.
        </p>
        <p className=" text-xs font-bold ">Sebastien Gendreau</p>
        <span className="text-[0.6rem]">CPO of AGORAPULSE</span>
        <img
          src={author}
          alt=""
          className=" absolute bottom-[-40px]  right-[120px] w-20 h-20"
        />
      </section>
      <section className=" w-[65rem] mx-auto text-justify flex justify-around my-[12rem]">
        <section className=" w-[28.5rem] h-[19.2rem]">
          <p className=" text-5xl leading-snug my-5">
            A radical change at a fair price.
          </p>
          <p className=" pr-[3.8rem]">
            {" "}
            Give Slite a try. Save 16% on annual commitment. Big team? check the{" "}
            <span className=" underline underline-offset-8">
              enterprise plan.
            </span>
          </p>
          <div className=" flex justify-start gap-2">
            <button className=" bg-[#176AE5] w-[9rem] h-[3rem] text-white my-5  rounded-full  px-[0.8rem]">
              Start for free
            </button>
            <button className=" border-2 border-slate-600 px-5 py-3 w-60 my-5 rounded-full flex items-center gap-2 justify-center">
              Compare all plans
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 12.796L11.481 8 6 3.204v9.592zm.659.753l5.48-4.796a1 1 0 000-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 001.659.753z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </section>
        <section className=" flex justify-around gap-11 ml-10">
          <div className=" w-[13rem] h-[19rem] border-2 border-black rounded-md text-center  p-5">
            <div className=" w-[80%] border-b-2 border-slate-700  mx-auto my-5 pb-11">
              <p className=" text-[1.35rem] font-semibold">Free</p>
              <span className=" text-xs ">Plain</span>
            </div>
            <div className=" flex justify-center  items-center">
              {" "}
              <span className=" text-[1.5rem]">$</span>
              <span className=" text-[2.7rem] font-black">0</span>
              <sup className=" text-xs">/month</sup>
            </div>{" "}
            <p className="text-xs ">Up to 50 docs</p>
          </div>
          <div className=" w-[13rem] h-[19rem]  rounded-md text-center p-5 shadow-md bg-white">
            <div className=" w-[80%] border-b-2 border-slate-700  mx-auto my-5 pb-11">
              <p className=" text-[1.35rem] font-semibold">Standard</p>
              <span className=" text-xs ">Plain</span>
            </div>
            <div className=" flex justify-center items-center">
              {" "}
              <span className=" text-[1.5rem]">$</span>
              <span className=" text-[2.7rem] font-black">6</span>
              <sup className=" text-[0.97rem] font-black">67</sup>
              <sup className=" text-xs">/month</sup>
            </div>{" "}
            <p className="text-xs ">per user</p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Prices;
