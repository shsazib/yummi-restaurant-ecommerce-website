import React from "react";
import "./OurQuality.css";
import { useNavigate } from "react-router-dom";
import Img1 from "./image/about-imager-5.png";
import Img2 from "./image/about-imager-6.png";
import Img3 from "./image/about-imager-7.png";

const OurQuality = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="our-quality">
        <div className="our-quality-left-section">
          <h2>Our Quality!</h2>
          <h1>Chicken</h1>
          <p>
            Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken
            Bites and Grilled Chicken Topping are made from chickens raised
            without antibiotics and fed an all vegetable-grain diet, with no
            animal by-products. Plus, our Bites are made with 100% chicken
            breast meat.
          </p>
          <button
            onClick={() => {
              navigate("/shop");
            }}
          >
            ORDER NOW
          </button>
        </div>
        <div className="our-quality-right-section">
          <img src={Img1} alt="img"></img>
        </div>
      </section>
      <section className="our-quality our-burger-quality">
        <div className="our-quality-right-section our-quality-burger-right-section">
          <img src={Img2} alt="img"></img>
        </div>
        <div className="our-quality-left-section">
          <h2>Our Quality!</h2>
          <h1>Burger</h1>
          <p>
            Some of the world’s best cheese is made close to home! All our
            deliciously melty Mozzarella is made with 100% Canadian milk. We’re
            proud to support Canadian dairy farmers.
          </p>
          <button
            onClick={() => {
              navigate("/shop");
            }}
          >
            ORDER NOW
          </button>
        </div>
      </section>
      <section className="our-quality">
        <div className="our-quality-left-section">
          <h2>Our Quality!</h2>
          <h1>Pizza Douch</h1>
          <p>
            Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken
            Bites and Grilled Chicken Topping are made from chickens raised
            without antibiotics and fed an all vegetable-grain diet, with no
            animal by-products. Plus, our Bites are made with 100% chicken
            breast meat.
          </p>
          <button
            onClick={() => {
              navigate("/shop");
            }}
          >
            ORDER NOW
          </button>
        </div>
        <div className="our-quality-right-section">
          <img src={Img3} alt="img"></img>
        </div>
      </section>
    </>
  );
};

export default OurQuality;
