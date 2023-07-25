import React from "react";
import wiki from "../assets/images/images/wikiframe.png";

const Knowledge = () => {
  return (
    <div className=" bg-[#F9EFE4] py-10">
      <section className=" text-center py-12">
        <p className=" font-bold text-2xl">A home for all of your knowledge.</p>
        <span>
          Project, knowledge base, process – bring all your work to life in
          Docs.
        </span>
      </section>
      <section className="flex mx-12 ">
        <div className=" w-1/12">
          <button>Wiki</button>
        </div>
        <section className=" bg-frame  bg-no-repeat ">
          <img src={wiki} alt="" className=" w-[80vw]" />
        </section>
      </section>
    </div>
  );
};

export default Knowledge;
