import React from 'react';
import './Teams.css';
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import TeamsAPI from "./TeamsAPI";

const Teams = () => {
  return (
    <>

<section className="our-teams">
        {TeamsAPI.map((elm) => {
          return (
            <>
              <div className="our-team">
                <img src={elm.img} alt="img"></img>
                <span>{elm.identity}</span>
                <h5>{elm.name}</h5>
                <p>{elm.desc}</p>
                <div className="our-team-s-icon">
                  <a href={elm.facebook}>
                    <FaFacebookF />
                  </a>
                  <a href={elm.twitter}>
                    <FaTwitter />
                  </a>
                  <a href={elm.google}>
                    <FaGoogle />
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  )
}

export default Teams;