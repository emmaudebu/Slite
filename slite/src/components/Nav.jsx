import React from "react";
import logo from "../assets/images/images/logo.png";
import Button from "./Button";
import { useState } from "react";

const Nav = () => {
  const [Menu, setMenu] = useState(false);
  function show(params) {
    setMenu(!Menu);
    console.log(Menu);
  }

  return (
    <div className=" relative bg-[#F9EFE4] px-5 md:px-[5rem] h-20 flex items-center justify-between mb-3">
      <img src={logo} alt="" className=" cursor-pointer" />
      <section className=" flex items-center justify-between gap-5">
        <ul
          className={` md:relative md:flex  items-center justify-between gap-8   ${
            Menu
              ? " z-10 block absolute top-0 left-0 mt-24 ml-2 md:mt-0 text-black  md:relative md:flex md:items-center md:justify-between md:gap-8   bg-[#f9efe4] w-72 p-5 rounded-md uppercase drop-shadow-md"
              : "hidden "
          }`}
        >
          <li
            className={` hover:scale-105 ${
              Menu ? "py-2 font-bold cursor-pointer " : ""
            }`}
          >
            Products
          </li>
          <li
            className={` hover:scale-105  ${
              Menu ? "py-2 font-bold cursor-pointer" : ""
            }`}
          >
            Templates
          </li>
          <li
            className={` hover:scale-105  ${
              Menu ? "py-2 font-bold cursor-pointer" : ""
            }`}
          >
            Pricing
          </li>
          <li
            className={` hover:scale-105  ${
              Menu ? "py-2 font-bold cursor-pointer" : ""
            }`}
          >
            Blog
          </li>
          <li
            className={` hover:scale-105  ${
              Menu ? "py-2 font-bold cursor-pointer" : ""
            }`}
          >
            Sign In
          </li>
        </ul>
        <section className=" ani ">
          <Button
            text={"Requst for demo"}
            klass={
              "w-24 h-5 p-2 border-[1px] border-black  rounded-full mr-5 cursor-pointer hover:scale-105  hidden md:inline"
            }
          />
          <Button
            text={"Start for free"}
            klass={
              "w-24 h-5 p-2  rounded-full text-white bg-blue-500 cursor-pointer hover:scale-105   md:inline animate-pulse"
            }
          />
        </section>
        {Menu ? (
          <svg
            className=" font-black w-8 h-8 hover:scale-75 md:hidden  "
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            version="1.1"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            onClick={show}
          >
            <path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path>
          </svg>
        ) : (
          <svg
            className=" font-black w-8 h-8 hover:scale-75 md:hidden  "
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            onClick={show}
          >
            <path d="M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z"></path>
          </svg>
        )}
      </section>
    </div>
  );
};

export default Nav;
