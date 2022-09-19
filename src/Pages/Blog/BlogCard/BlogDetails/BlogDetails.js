import React from "react";
import "./BlogDetails.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import CommentForm from './CommentForm/CommentForm';
import AddImg from './image/118639941_10158735516679120_1471934652881143028_n.jpg';
import RecentImg1 from './image/blog-1.jpg'
import RecentImg2 from './image/blog-2.jpg'
import RecentImg3 from './image/blog-3.jpg'


const BlogDetails = () => {
  const location = useLocation();
  return (
    <>
      <section className="blog-details-head">
      <h1></h1>
        <div className="blog-details-head-link">
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
          <CommentForm />
        </div>
        <div className="blog-details-right">
          <div className="blog-details-right-search">
            <input placeholder="Search..."/>
            <BsSearch className="blog-details-right-search-icon" />
          </div>
          <div className="recent-post">
            <h4>Recent Posts</h4>
            <div className="recent-post-content">
              <img src={RecentImg1} alt="img"></img>
              <div>
                <h5>The Ultimate Hangover Burger</h5>
                <p>Jun 15, 2022</p>
              </div>
            </div>
          
          
            <div className="recent-post-content">
              <img src={RecentImg2} alt="img"></img>
              <div>
                <h5>Egg in a Hole Burger Grilled Cheese</h5>
                <p>August 10, 2021</p>
              </div>
            </div>
          
            <div className="recent-post-content">
              <img src={RecentImg3} alt="img"></img>
              <div>
                <h5>The Ultimate Hangover Burger</h5>
                <p>Jun 15, 2022</p>
              </div>
            </div>
          
        </div>
        <img src={AddImg} alt="AddImg" className="add-img"></img>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
