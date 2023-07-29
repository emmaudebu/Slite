import React from "react";
import footerlogo from "../assets/images/images/footerlogo.svg.svg";
const Footer = () => {
  return (
    <div className=" bg-footerbg bg-white bg-[100%] bg-cover px-10 pb-20">
      <img src={footerlogo} alt="" className=" py-10" />
      <div className=" ">
        <section className=" flex items-start gap-[4rem] py-10  ">
          <ul className=" hidden md:flex flex-col gap-[10px]">
            <h2 className="text-[0.875rem] font-semibold">What it's for</h2>
            <li className=" text-[0.75rem]">Knowledge base</li>
            <li className=" text-[0.75rem]">Working remotely</li>
            <li className=" text-[0.75rem]">Fix remote meetings</li>
            <li className=" text-[0.75rem]">Onboarding remotely</li>
            <li className=" text-[0.75rem]">Build human connection</li>
            <li className=" text-[0.75rem]">Handbooks</li>
          </ul>
          <ul className=" hidden md:flex flex-col gap-[10px]">
            <h2 className="text-[0.875rem] font-semibold">How it works</h2>
            <li className=" text-[0.75rem]">Features</li>
            <li className=" text-[0.75rem]">Integrations</li>
            <li className=" text-[0.75rem]">Pricing</li>
            <li className=" text-[0.75rem]">What's new</li>
            <li className=" text-[0.75rem]">Help center</li>
            <li className=" text-[0.75rem]">Contact support</li>
          </ul>
          <ul className=" hidden md:flex flex-col gap-[10px]">
            <h2 className="text-[0.875rem] font-semibold">Resources</h2>
            <li className=" text-[0.75rem]">Templates</li>
            <li className=" text-[0.75rem]">Learn</li>
            <li className=" text-[0.75rem]">Blog</li>
            <li className=" text-[0.75rem]">Startup Bibles</li>
            <li className=" text-[0.75rem]">Remote handbook</li>
            <li className=" text-[0.75rem]">Management handbook</li>
            <li className=" text-[0.75rem]">Download apps</li>
            <li className=" text-[0.75rem]">Chrome extension</li>
          </ul>
          <ul className=" hidden md:flex   flex-col gap-[10px]">
            <h2 className="text-[0.875rem] font-semibold">Slite</h2>
            <li className=" text-[0.75rem]">About us</li>
            <li className=" text-[0.75rem]">Find us on Twitter</li>
            <li className=" text-[0.75rem]">Careers</li>
            <li className=" text-[0.75rem]">Customers</li>
            <li className=" text-[0.75rem]">Press kit</li>
          </ul>
          <ul className=" hidden md:flex flex-col gap-[10px]">
            <h2 className="text-[0.875rem] font-semibold">Compare</h2>
            <li className=" text-[0.75rem]">Notion</li>
            <li className=" text-[0.75rem]">Confluence</li>
            <li className=" text-[0.75rem]">Google Docs</li>
            <li className=" text-[0.75rem]">Dropbox Paper</li>
            <li className=" text-[0.75rem]">All comparisons</li>
          </ul>

          <section className="md:w-[24rem] text-[0.75rem] text-center md:text-left w-[80vw] ">
            <p className="text-[0.875rem] font-semibold">
              Remote letters to read on your own time
            </p>
            <div className=" rounded-full  ml-11  border-2 border-gray-500 md:mx-auto flex justify-between my-4">
              <input
                type="text"
                className=" md:h-[2.9rem] h-[2rem] text-[0.75rem]  w-1/2 outline-none focus:outline-none bg-transparent rounded-full mr-[3rem]  p-2 px-auto "
                placeholder="What's your email?"
                color="#98999A"
              />

              <button className=" md:h-[2.9rem] h-[2rem] w-1/2 md:w-1/6  rounded-full text-white bg-blue-500 cursor-pointer  px-5  ">
                →
              </button>
            </div>
            <p className="text-[0.675rem] ">
              100% homemade, no tricks or ponies or growth hacking nonsense.
              Just remote things we care about with a short surprising insight
              every week. No rush.
            </p>
          </section>
        </section>
      </div>
      <section className=" flex justify-between flex-col md:flex-row items-center text-[0.75rem] border-t-2 border-slate-400 pt-11  ">
        <div className="flex md:gap-10 items-center  gap-2 mb-5 md:mb-0  ">
          <span>Privacy</span>
          <span>User terms</span>
          <span>Security</span>
          <span>Customer terms</span>
        </div>
        <span>©2022 Slite. All rights reserved.</span>
      </section>
    </div>
  );
};

export default Footer;
