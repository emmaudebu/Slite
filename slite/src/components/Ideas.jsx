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
      <section className=" bg-black w-full h-[48rem] mx-auto rounded-md mt-10 flex items-end py-5">
        <button className=" bg-[#2F2F30] w-[6rem] h-[3rem] text-white mx-auto rounded-full flex items-center justify-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z"></path>
          </svg>{" "}
          <span>Play</span>
        </button>
      </section>
    </div>
  );
};

export default Ideas;
