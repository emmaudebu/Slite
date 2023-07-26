import React from "react";

const Ideas = () => {
  return (
    <div className="bg-[#F9EFE4] text-center p-24 flex justify-center flex-col">
      <h1 className=" font-semibold leading-[4rem] text-4xl">
        Move ideas forward. <br /> Docs, meet Discussions.
      </h1>
      <p className=" w-[58rem] text-center mx-auto py-10 text-[1.12rem]">
        Decisions don't work on their own, and neither does your team. In Slite,
        decision-making and async discussion comes built-in, inside Docs. Say
        goodbye to scattered conversations and endless Slack threads.
      </p>
      <button className=" bg-[#176AE5] w-[13rem] h-[3rem] text-white mx-auto rounded-full">
        I want that too
      </button>
      <section className=" bg-black w-full h-[48rem] mx-auto rounded-md mt-10"></section>
    </div>
  );
};

export default Ideas;
