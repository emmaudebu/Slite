import React from "react";

const Template = () => {
  return (
    <div className="bg-[#F9EFE4] text-center">
      <h1 className=" font-bold text-3xl">
        Beat the blank canvas with Templates
      </h1>
      <h2 className=" font-medium">
        Ready-to-use Templates for product specs, company handbooks, meeting
        notes and more.
      </h2>
      <button className=" border-2 border-slate-600 px-5 py-3 w-60 my-5 rounded-full">
        Browse templates
      </button>

      <div className=" flex bg-div">
        <section className="  bg-white h-[252px] min-w-[190px] rounded-lg p-5 pb-8 flex justify-between items-center flex-col relative">
          <p>Text will be here</p>
          <span
            className={`absolute w-[105px] h-[103.5px] rounded-full bottom-8 bg-red-600`}
          ></span>
        </section>
      </div>
    </div>
  );
};

export default Template;
