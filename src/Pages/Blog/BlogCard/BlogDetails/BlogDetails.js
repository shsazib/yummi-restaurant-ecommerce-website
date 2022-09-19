import React from "react";
import "./BlogDetails.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const BlogDetails = () => {
  const location = useLocation();
  return (
    <>
      <section className="about-head">
        <h1></h1>
        <div className="about-head-link">
          <Link to="/home">
            Home
            <GoTriangleRight />
          </Link>
          <Link to="/blog">
            Blog
            <GoTriangleRight />
          </Link>
          <p>{location.state.title}</p>
        </div>
      </section>
      <section className="blog-detail">
        <div className="blog-details">
          <img src={location.state.img} alt="img"></img>
          <div className="blog-details-content">
            <span>{location.state.dateTime}</span>
            <h1>{location.state.title}</h1>
            <p>{location.state.desc.slice(0, 450)}</p>
            <div>
            <p className="blog-details-content-quote"><FaQuoteLeft className="blog-details-content-quote-icon" /> {location.state.quote} <FaQuoteRight className="blog-details-content-quote-icon"  /></p>
            </div>
            <p>{location.state.desc.slice(351, 1000000000)}</p>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default BlogDetails;
