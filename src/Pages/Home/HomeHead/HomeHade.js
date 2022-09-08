import React from "react";
import "./HomeHade.css";
import Pizza from "../Image/img-slider-foodo.png";
import Tomato from "../Image/h1_tomato.png";

const HomeHade = () => {
  return (
    <>
      <section className="home-head">
        <div className="home-head-img">
          <div className="home-head-content">
            <img src={Tomato} alt="tomato"></img>
            <h1>
              UNLIMITED <br /> MEDIUM <span> PIZZAS </span>
            </h1>
            <h3>Medium 2-topping* pizza</h3>
            <p>
              Medium 2-topping* pizza *Additional charge for premium toppings.
              Minimum of 2 required.
            </p>
            <div className="home-head-price-btn">
              <a href="#">
                <button>ORDER NOW</button>
              </a>

              <div className="home-head-price-btn">
                <p>
                  $8.20 <del>$10.20</del>
                </p>
              </div>
            </div>
          </div>
          <div className="home-had-pizza">
            <img src={Pizza} alt="Pizza"></img>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHade;
