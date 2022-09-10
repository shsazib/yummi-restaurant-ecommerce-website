import React from "react";
import "./Home.css";
import HomeHade from './HomeHead/HomeHade';
import YourDoor from './YourDoor/YourDoor';
import ClientSays from './clientSays/clientSays';



const Home = () => {
  return (
    <>
      <section className="home">
        <HomeHade />
        <YourDoor />
        <ClientSays />
      </section>
    </>
  );
};

export default Home;
