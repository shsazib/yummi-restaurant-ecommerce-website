import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./WhyChoose.css";
import WhyChooseApi from "./WhyChooseApi";

const WhyChoose = () => {
  const [details] = useState(WhyChooseApi);

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <>
      <section className="why-choose-full">
        <h1>Why Choose Us</h1>
        <div className="why-choose">
          {details.map((elm) => {
            const { id, img, title, des, path } = elm;
            return (
              <div key={id} className="why-choose-card">
                <img src={img} alt="img"></img>
                <h1>{title}</h1>
                <p>{truncateString(des, 100)}</p>
                <Link to={path} state={{ id, img, title, des, path }}><button>Read More...</button></Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
