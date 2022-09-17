import React from "react";
import "./BestBurger.css";
import { useNavigate } from "react-router-dom";
import Img1 from './image/three-girl-friends-having-pizza-bar.jpg';

const BestBurger = () => {
    const navigate = useNavigate()
  return (
    <>
      <section className="best-burger">
        <div className="best-burger-left-section">
          <h2>Wellome!</h2>
          <h1>Best burger ideas & traditions from the whole world</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <p>
            Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat
            fermentum. Aliquam non tincidunt urna. Integer tincidunt nec nisl
            vitae ullamcorper. Proin sed ultrices erat.
          </p>
          <button onClick={() => {
            navigate("/contact")
          }}>Contact Now</button>
        </div>
        <div className="best-burger-right-section">
            <img src={Img1} alt="img"></img>
        </div>
      </section>
    </>
  );
};

export default BestBurger;
