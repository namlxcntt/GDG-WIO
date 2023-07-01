import React from "react";

import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
import Footer from "../partials/Footer";
import Countdown from "../partials/Countdown";
import AboutUs from "../partials/AboutUs";
import Register from "../partials/Register";
import Sponsors from "../partials/Sponsors";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow mt-28 lg:mt-20">
        {/*  Page sections */}
        <HeroHome />
        <Countdown />
        <AboutUs />
        <Register />
        <Sponsors />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
