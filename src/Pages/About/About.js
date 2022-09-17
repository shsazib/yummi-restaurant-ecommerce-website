import React from "react";
import "./About.css";
import WhyChoose from "./WhyChoose/WhyChoose";
import BestBurger from "./BestBurger/BestBurger";
import VideoPlay from './VideoPlay/VideoPlay';
import OurQuality from './OurQuality/OurQuality';

const About = () => {
  return (
    <>
      <section className="about">
        <section className="about-head">
          <h1>About Us</h1>
        </section>
        <section>
          <BestBurger />
          <VideoPlay />
          <OurQuality />
          <WhyChoose />
        </section>
      </section>
    </>
  );
};

export default About;
