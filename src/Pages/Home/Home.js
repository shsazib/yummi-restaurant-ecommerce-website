import React from "react";
import "./Home.css";
import HomeHade from './HomeHead/HomeHade';
import YourDoor from './YourDoor/YourDoor';
import ClientSays from './clientSays/clientSays';
import WhyChooseUs from '../About/WhyChoose/WhyChoose';



const Home = () => {
  return (
    <>
      <section className="home">
        <HomeHade />
        <YourDoor />
        <WhyChooseUs />
        <ClientSays />
      </section>
    </>
  );
};

export default Home;
