import logo from "../images/logos/gdg_hanoi_about_us.png";
import technical from "../images/background/technical.png";
import networking from "../images/background/networking.png";
import exhibition from "../images/background/exhibition.png";
import BenefitContainer from "../components/BenefitContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const AboutUs = () => {
  const benefits = [
    {
      image: technical,
      header: "Technical Talk",
      description: "Explore Google's latest technologies",
    },
    {
      image: networking,
      header: "Networking & Experience",
      description: "Meet and match with the experts & Challenge yourself",
    },
    {
      image: exhibition,
      header: "Exhibition",
      description:
        "Connect with career opportunities and exclusive experiences",
    },
  ];

  return (
    <section className="my-20">
      <div className="w-11/12 lg:w-3/5 grid justify-items-center mx-auto my-20 text-center">
        <img alt="logo" src={logo} className="mb-16" />
        <p className="mb-12 text-2xl animate-fade-in delay-200">
          Google I/O Extended is the extended and localized version of Google
          I/O - the biggest tech conference from Google, with the view to
          updating new technology and appropriate topics to meet the demand of
          the local community. The year 2023 will be marking the eighth year of
          the event's presence in Hanoi, with the greatest scale and experience
          in the country.
        </p>
        <p className="text-2xl animate-fade-in delay-200">
          Google I/O Extended Hanoi 2023 is held for the community and
          connection, with 4 main topics, including: Technology in general, AI,
          Mobile, Web and Game, alongside with a series of exhibitions to
          connect the IT community. The event is expected to welcome up to 1000
          participants, 15 speakers & experts, 10 exhibition booths, 20
          partners, media agencies & news outlets.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-block-info gap-3 w-fit mx-auto place-items-center mb-20">
        {benefits.map((benefit) => (
          <BenefitContainer
            key={`benefit-${benefit.header}`}
            benefit={benefit}
          />
        ))}
      </div>
      <div className="w-full lg:w-2/3 mx-auto">
        <iframe
          className="w-full h-full rounded-3xl aspect-video"
          src="https://www.youtube.com/embed/OcW57x8J5rM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default AboutUs;
