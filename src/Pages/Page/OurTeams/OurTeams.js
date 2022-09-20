import React from "react";
import "./OurTeams.css";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import Teams from './Teams/Teams';


const OurTeams = () => {
  return (
    <>
      <section className="teams-head">
        <h1>Our Teams</h1>
        <div className="teams-head-link">
          <Link to="/home">
            Home
            <GoTriangleRight />
          </Link>
          <p> Our Teams</p>
        </div>
      </section>
      <section>
        <Teams />
      </section>
    </>
  );
};

export default OurTeams;
