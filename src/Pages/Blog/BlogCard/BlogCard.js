import React, { useState } from "react";
import "./BlogCard.css";
import BlogAPI from "./BlogAPI";
import { Link } from "react-router-dom";

const BlogCard = () => {
  const [details] = useState(BlogAPI);

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <>
      <section className="blog-card">
        {details.map((elm) => {
          const { id, img, dateTime, desc, title, path, quote } = elm;
          return (
            <div className="blog-cards" key={id}>
              <img src={img} alt="img"></img>
              <div className="blog-cards-content">
                <span>{dateTime}</span>
                <Link
                  to={path}
                  state={{ id, img, dateTime, desc, title, path, quote }}
                >
                  <h2>{title}</h2>
                </Link>
                <p>{truncateString(desc, 150)}</p>
                <Link
                  to={path}
                  state={{ id, img, dateTime, desc, title, path, quote }}
                >
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default BlogCard;
