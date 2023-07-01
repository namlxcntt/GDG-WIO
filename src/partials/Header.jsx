import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logos/gdg_hanoi_icon.png";
import CtaButton from "../components/CtaButton";

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed bg-header w-full z-30 md:bg-opacity-100 transition duration-300 ease-in-out ${
        !top && "bg-header backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="px-8 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-shrink-0 mr-4">
            <Link to="/" className="block mr-8" aria-label="Cruip">
              <img src={logo} alt="" />
            </Link>
            <ul className="grid items-center grid-cols-site-navigator gap-8 text-white">
              <li>Home</li>
              <li>Speaker</li>
              <li>Agenda</li>
              <li>Partner</li>
              <li>About us</li>
            </ul>
          </div>

          {/* Site navigation */}
          <nav>
            <CtaButton action="Register Now"/>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
