import { React, useEffect, useState } from "react";
import employ from "../assets/images/images/book.png.png";
import week from "../assets/images/images/time.png.png";
import product from "../assets/images/images/s.png";
import board from "../assets/images/images/file.png.png";
import star from "../assets/images/images/star.png.png";
import kite from "../assets/images/images/kite.png.png";
import think from "../assets/images/images/thought.png.png";

const Template = () => {
  const Data = [
    {
      img: employ,
      text: "Employee Handbook",
      color: "bg-[#f9efe4]",
    },
    {
      img: week,
      text: "Weekly Reviews",
      color: "bg-[#EEBACB]",
    },
    {
      img: product,
      text: "Products Planning",
      color: " bg-[#176AE5]",
    },
    {
      img: board,
      text: "OnBording CheckList",
      color: "bg-[#f9efe4]",
    },
    {
      img: employ,
      text: "Employee Handbook",
      color: "bg-[#EEBACB]",
    },
    {
      img: think,
      text: "Product Spec",
      color: "bg-[#f9efe4]",
    },
    {
      img: star,
      text: "Talent Accquisitions",
      color: "bg-[#EEBACB]",
    },
    {
      img: kite,
      text: "Talent Accquisitions",
      color: "bg-[#F67748]",
    },
  ];

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

      <div className=" flex bg-div px-10 py-10 overflow-x-scroll  gap-5 pt-10">
        {Data.map((item, index) => (
          <section
            key={index}
            className="  bg-white h-[252px] min-w-[190px] rounded-lg p-5 pb-8 flex justify-between items-center flex-col relative"
          >
            <p className=" text-[22px] font-medium leading-[32px]">
              {" "}
              {item.text}
            </p>
            <span
              className={`absolute w-[105px] h-[103.5px] rounded-full bottom-8 ${item.color}`}
            ></span>
            <img
              className={`z-20 w-[112px] h-[110.391px] `}
              src={item.img}
              alt="men mount"
            />
          </section>
        ))}
      </div>
    </div>
  );
};

export default Template;
