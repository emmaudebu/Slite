import React from "react";
import logo from "../assets/images/images/logo.png";
import Button from "./Button";

const Nav = () => {
  return (
    <div className=" bg-[#F9EFE4] px-5 md:px-[5rem] h-20 flex items-center justify-between mb-3">
      <img src={logo} alt="" className=" cursor-pointer" />
      <section className=" flex items-center justify-between gap-5">
        <ul className="flex  md:flex-row flex-col items-center justify-between gap-8">
          <li>Products</li>
          <li>Templates</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Sign In</li>
        </ul>
        <section className=" ">
          <Button
            text={"Requst for demo"}
            klass={
              "w-24 h-5 p-2 border-[1px] border-black  rounded-full mr-5 cursor-pointer"
            }
          />
          <Button
            text={"Requst for demo"}
            klass={
              "w-24 h-5 p-2  rounded-full text-white bg-blue-500 cursor-pointer"
            }
          />
        </section>
        <svg
          className=" font-black w-8 h-8 hover:scale-75"
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z"></path>
        </svg>
      </section>
    </div>
  );
};

export default Nav;
