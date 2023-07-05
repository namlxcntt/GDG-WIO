import React from "react";

function BenefitContainer({ benefit }) {
  return (
    <div className="border-2 gap-7 h-benefit rounded-3xl border-black grid grid-rows-block-info p-5 text-center justify-items-center">
      <img className="rounded-3xl" src={benefit.image} alt="image" />
      <p className="text-2xl uppercase font-bold">{benefit.header}</p>
      <p>{benefit.description}</p>
    </div>
  );
}

export default BenefitContainer;
