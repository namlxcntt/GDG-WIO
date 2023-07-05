import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState, useEffect } from "react";
import SpeakerContainer from "../components/SpeakerContainer";
import "swiper/css";
import { FreeMode } from "swiper/modules";
import "swiper/css/free-mode";

const BG_COLOR = [
  "bg-google-speaker-1",
  "bg-google-speaker-2",
  "bg-google-speaker-3",
  "bg-google-speaker-4",
];

const Speakers = () => {
  const [speakers, setSpeakers] = useState([
    { id: 1, title: "Dev", fullName: "Mr. A", bio: "Something about me!!!" },
    { id: 2, title: "SM", fullName: "Mr. B", bio: "Something about me!!!" },
    { id: 3, title: "Test", fullName: "Mr. C", bio: "Something about me!!!" },
    { id: 4, title: "Pm", fullName: "Mr. D", bio: "Something about me!!!" },
    { id: 5, title: "Dev", fullName: "Mr. E", bio: "Something about me!!!" },
    { id: 6, title: "SM", fullName: "Mr. F", bio: "Something about me!!!" },
    { id: 7, title: "Test", fullName: "Mr. G", bio: "Something about me!!!" },
    { id: 8, title: "Pm", fullName: "Mr. H", bio: "Something about me!!!" },
  ]);
  useEffect(() => {}, []);

  return (
    <section className=" lg:mx-10 md:mx-8">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        centeredSlides={true}
        freeMode={true}
        loop={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {speakers.map((speaker, index) => (
          <SwiperSlide key={speaker.id}>
            <SpeakerContainer
              customClass={BG_COLOR[index % 4]}
              speaker={speaker}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Speakers;
