import React from "react";
import partner1 from "../assets/images/images/vanmoof.png";
import partner2 from "../assets/images/images/bambo.png";
import partner3 from "../assets/images/images/opulse.png";
import partner4 from "../assets/images/images/spotify.svg";
import partner5 from "../assets/images/images/angola.png";
import partner6 from "../assets/images/images/meero.svg";

const Partners = () => {
  return (
    <div className="  bg-[#F9EFE4] text-center ">
      <p className="py-10 text-[#2F2F30]">
        200,000+ teams have found focus with Slite
      </p>
      <section className=" flex justify-center items-center gap-10 pb-10 flex-wrap">
        <img src={partner1} alt="" className=" hover:scale-110 " />
        <img src={partner2} alt="" className=" hover:scale-110" />
        <img src={partner3} alt="" className=" hover:scale-110" />
        <img src={partner4} alt="" className=" hover:scale-110" />
        <img src={partner5} alt="" className=" hover:scale-110" />
        <img src={partner6} alt="" className=" hover:scale-110" />
      </section>
    </div>
  );
};

export default Partners;
