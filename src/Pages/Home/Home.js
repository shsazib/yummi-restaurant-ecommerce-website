import React from "react";
import "./Home.css";
import HomeHade from "./HomeHead/HomeHade";
import YourDoor from "./YourDoor/YourDoor";
import ClientSays from "./clientSays/clientSays";
import WhyChooseUs from "../About/WhyChoose/WhyChoose";
import Girl from "./Image/h1_img-3.png";

const Home = () => {
  return (
    <>
      <section className="home">
        <HomeHade />
        <YourDoor />
        <WhyChooseUs />
        <section className="pizza-of-the-day">
          <img src={Girl} alt="girl"></img>
          <div className="pizza-of-the-day-content">
            <h3>FREE DELIVERY WITH</h3>
            <h1>PIZZA OF THE DAY</h1>
            <h5>Feel Hunger! Order Your Favouriate Food.</h5>
            <button>Order Now</button>
          </div>
        </section>
        <ClientSays />
      </section>
    </>
  );
};

export default Home;
