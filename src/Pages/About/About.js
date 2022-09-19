import React from "react";
import "./About.css";
import {Link} from "react-router-dom";
import { GoTriangleRight } from 'react-icons/go';
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
          <div className="about-head-link">
            <Link to="/home">Home<GoTriangleRight /></Link>
            <p> About</p>
          </div>
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
