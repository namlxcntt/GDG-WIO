import React from "react";
import google_io from "../images/logos/google_io.svg";
import CtaButton from "../components/CtaButton";
import background from "../images/background/background.png";

function HeroHome() {
  return (
    <section className="relative" id="AboutUs">
      <div className="flex w-full lg:w-4/5 items-center mx-auto flex-wrap">
        <div className="mx-4 mt-28 lg:mx-0 w-full lg:w-1/2">
          <img className="w-11/12 lg:w-full" src={google_io} alt="" />
          <span className="">Organized by Google Developer Group Hanoi</span>

          <div className="font-bold text-base md:text-xl my-18">
            <p>Time: 13:00 - 17:30, Saturday, July 22, 2023</p>
            <p>Venue: Hanoi, Vietnam</p>
          </div>

          <CtaButton
            customClass="mb-20 border-2 border-solid leading-6 lg:leading-10 border-black md:text-3xl md:h-16"
            action="Get The Ticket"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <img src={background} alt="" />
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
