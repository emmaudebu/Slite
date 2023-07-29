import React from "react";
import footerlogo from "../assets/images/images/footerlogo.svg.svg";
const Footer = () => {
  return (
    <div className=" bg-[#F9EFE4]">
      <img src={footerlogo} alt="" />
      <section className=" bg-footerbg"> </section>
    </div>
  );
};

export default Footer;
