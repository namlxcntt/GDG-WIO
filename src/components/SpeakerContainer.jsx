import React from "react";

const SpeakerContainer = ({ speaker, customClass }) => {
  return (
    <div
      className={`border-2 gap-7 h-auto rounded-3xl border-black grid grid-rows-block-info p-5 text-center justify-items-center ${customClass}`}
    >
      <img
        className="rounded-3xl border-2 border-black border-solid h-56"
        src={speaker.image}
        alt="image"
      />

      <div className="bg-speaker-name py-2.5 px-8 rounded-3xl border-2 border-black border-solid">
        <p className="text-2xl uppercase font-bold">{speaker.fullName}</p>
      </div>
      <div className="py-2.5 rounded-3xl w-full px-4 bg-speaker-title border-2 border-black border-solid">
        <p className="text-white text-xl text-sm">{speaker.title}</p>
      </div>
    </div>
  );
};

export default SpeakerContainer;
