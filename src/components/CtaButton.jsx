import React from "react";

function CtaButton({ action, customClass }) {
  return (
    <a
      href="#"
      className={`inline-block bg-cta px-6 py-2 rounded-full h-12 text-black font-bold text-2xl leading-9 ${customClass}`}
    >
      {action}
    </a>
  );
}

export default CtaButton;
