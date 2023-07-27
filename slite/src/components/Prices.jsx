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
        <section>
          <p>A radical change at a fair price.</p>
          <p>
            Give Slite a try. Save 16% on annual commitment. Big team? check the
            enterprise plan.
          </p>
          <button className=" border-2 border-slate-600 px-5 py-3 w-60 my-5 rounded-full">
            Browse templates
          </button>
          <button className=" bg-[#176AE5] w-[13rem] h-[3rem] text-white mx-auto rounded-full">
            I want that too
          </button>
        </section>
        <section className=" flex justify-around gap-11 ml-10">
          <div className=" w-[13rem] h-[19rem] border-2 border-black rounded-md text-center flex p-5">
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
              <span className=" text-[2.7rem] font-black">0</span>
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
