import React from "react";
import fTeam from "../assets/images/images/firstTeam.png";
import Steam from "../assets/images/images/Steam.png";
import third from "../assets/images/images/third.png";
import fourth from "../assets/images/images/fourth.png";
import six from "../assets/images/images/six.png";
import five from "../assets/images/images/five.png";
import seven from "../assets/images/images/seven.png";
import eight from "../assets/images/images/eight.png";

const Team = () => {
  return (
    <div className="  bg-[#F9EFE4] py-10 mx-auto">
      <p className=" text-[2rem] my-[2rem] text-center">
        What happy teams have to say.{" "}
      </p>
      <section className=" flex  flex-wrap  gap-3 item-center justify-center text-[0.9rem]">
        <div className=" bg-red-500 rounded w-[24rem] h-[21rem] shadow-md px-[2rem] pt-[3rem] pb-[2rem]">
          <p>"The most important thing in a wiki is</p>
          <p className=" bg-[#eebacb]">
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; how tight the edit / collaboration
            loop is
          </p>
          <p>
            . Most wikis are pretty bad there. But Slite is an example of a wiki
            that allows simultaneous editing."
          </p>
          <section className=" flex justify-between items-center mt-[3rem]">
            <div>
              <h4 className=" font-bold text-[0.63rem] uppercase py-2">
                jade rubick
              </h4>
              <h5 className=" text-[0.63rem]">
                CTO, GREMLIN 80+ <br></br>teammates
              </h5>
            </div>
            <img src={fTeam} alt="" />
          </section>
        </div>
        <div className=" bg-white rounded w-[24rem] h-[21rem] shadow-md px-[2rem] pt-[3rem] pb-[2rem]">
          <p className=" bg-[#eebacb] mb-1 ">
            Communication is key to scale a business.Slite is the best to keep
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; things in writing.
          </p>
          <p className=" bg-[#eebacb] mr-[5rem]">
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;"Slite is easier to use on daily
            basis. We chose to avoid a distracting tool to offer
          </p>
          <p className=" -mt-2">Summary to stay up to date on all topics."</p>
          <section className=" flex justify-between items-center mt-[3rem]">
            <div>
              <h4 className=" font-bold text-[0.63rem] uppercase py-2">
                by LEE LIU
              </h4>
              <h5 className=" text-[0.63rem]">
                CTO, Log DNA 150+ <br></br>teammates
              </h5>
            </div>
            <img src={Steam} alt="" />
          </section>
        </div>
        <div className=" bg-white rounded w-[24rem] h-[21rem] shadow-md px-[2rem] pt-[3rem] pb-[2rem]">
          <p>
            "Slite is easier to use on daily basis. We chose to avoid a
            distracting tool to offer
          </p>
          <p className=" bg-[#eebacb] inline">a place of focus and clarity</p>
          <p className="pt-5">
            The tips on how to structure our knowledge were also a big plus."
          </p>
          <section className=" flex justify-between items-center mt-[3rem]">
            <div>
              <h4 className=" font-bold text-[0.63rem] uppercase py-2">
                Thibault Morlo
              </h4>
              <h5 className=" text-[0.63rem]">
                VP Operations, Shippeo <br /> 240+ teammates
              </h5>
            </div>
            <img src={third} alt="" />
          </section>
        </div>
        <div className=" bg-white rounded w-[24rem] h-[21rem] shadow-md px-[2rem] pt-[3rem] pb-[2rem]">
          <p>
            "Slite let us bring the two most important communication bits in the
            same place: documentation & decision-making. The connection
          </p>
          <p className=" bg-[#eebacb] ">
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; makes decision-making more
            efficient, transparent & contextualized
          </p>

          <section className=" flex justify-between items-center mt-[3rem]">
            <div>
              <h4 className=" font-bold text-[0.63rem] uppercase py-2">
                Sebastien Gendreau
              </h4>
              <h5 className=" text-[0.63rem]">
                Head of product, AgoraPulse <br /> 175+ teammates
              </h5>
            </div>
            <img src={fourth} alt="" />
          </section>
        </div>
        <div className=" bg-white rounded w-[24rem] h-[21rem] shadow-md px-[2rem] pt-[3rem] pb-[2rem]">
          <p>
            The reasons why certain decisions were made can be found in one
            place
          </p>
          <p className=" bg-[#eebacb] -mt-2 mb-[5rem]">
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;and not scattered across different
            Slack channels."
          </p>

          <section className=" flex justify-between items-center mt-[3rem]">
            <div>
              <h4 className=" font-bold text-[0.63rem] uppercase py-2">
                by Jurgita Paulauskaite
              </h4>
              <h5 className=" text-[0.63rem]">
                Customer Success, Tymeshift <br />
                75+ teammates
              </h5>
            </div>
            <img src={six} alt="" />
          </section>
        </div>
        <div className=" bg-white rounded w-[24rem] h-[21rem] shadow-md px-[2rem] pt-[3rem] pb-[2rem]">
          <p>
            "As we're growing fast, the ease of adoption is a crucial element
            when choosing a new solution. You can see
          </p>
          <p className=" bg-[#eebacb]">
            Slite is more user friendly, and its similarities with Slack make it
            easier to adopt.
          </p>

          <section className=" flex justify-between items-center mt-[3rem]">
            <div>
              <h4 className=" font-bold text-[0.63rem] uppercase py-2">
                Martijn Hazelaar
              </h4>
              <h5 className=" text-[0.63rem]">
                Head of Digital, Vanmoof <br></br>500+ teammates
              </h5>
            </div>
            <img src={five} alt="five" />
          </section>
        </div>
        <div className=" bg-white rounded w-[24rem] h-[21rem] shadow-md px-[2rem] pt-[3rem] pb-[2rem]">
          <p>
            "Slite let us bring the two most important communication bits in the
            same place: documentation & decision-making. The connection
          </p>
          <p className=" bg-[#eebacb] ">
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; makes decision-making more
            efficient, transparent & contextualized
          </p>

          <section className=" flex justify-between items-center mt-[3rem]">
            <div>
              <h4 className=" font-bold text-[0.63rem] uppercase py-2">
                Sebastien Gendreau
              </h4>
              <h5 className=" text-[0.63rem]">
                Head of product, AgoraPulse <br /> 175+ teammates
              </h5>
            </div>
            <img src={eight} alt="" />
          </section>
        </div>
        <div className=" bg-white rounded w-[24rem] h-[21rem] shadow-md px-[2rem] pt-[3rem] pb-[2rem]">
          <p>
            The reasons why certain decisions were made can be found in one
            place
          </p>
          <p className=" bg-[#eebacb] -mt-2 mb-[5rem]">
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;and not scattered across different
            Slack channels."
          </p>

          <section className=" flex justify-between items-center mt-[3rem]">
            <div>
              <h4 className=" font-bold text-[0.63rem] uppercase py-2">
                by Jurgita Paulauskaite
              </h4>
              <h5 className=" text-[0.63rem]">
                Customer Success, Tymeshift <br />
                75+ teammates
              </h5>
            </div>
            <img src={seven} alt="" />
          </section>
        </div>
        <div className=" bg-white rounded w-[24rem] h-[21rem] shadow-md px-[2rem] pt-[3rem] pb-[2rem]">
          <section className=" flex justify-center items-center mt-[3rem]">
            <p className="my-10">
              Read more <br />
              <span className=" underline underline-offset-8">reviews →</span>
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Team;
