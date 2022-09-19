import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import BlogCard from "./BlogCard/BlogCard";

const Blog = () => {
  return (
    <>
      <section className="blog">
        <section className="blog-head">
          <h1>Blog</h1>
          <div className="blog-head-link">
            <Link to="/home">
              Home
              <GoTriangleRight />
            </Link>
            <p> Blog</p>
          </div>
        </section>
        <BlogCard />
      </section>
    </>
  );
};

export default Blog;
