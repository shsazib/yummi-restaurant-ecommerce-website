import React from "react";
import "./Home.css";
import HomeHade from './HomeHead/HomeHade';
import YourDoor from './YourDoor/YourDoor';



const Home = () => {
  return (
    <>
      <section className="home">
        <HomeHade />
        <YourDoor />
      </section>
    </>
  );
};

export default Home;
