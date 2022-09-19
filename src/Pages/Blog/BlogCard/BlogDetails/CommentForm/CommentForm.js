import React, { useState } from "react";
import "./CommentForm.css";
import User from "./image/64e1b8d34f425d19e1ee2ea7236d3028.png";
import { BsFillClockFill } from "react-icons/bs";
import { TiArrowForward } from "react-icons/ti";
import { FaLocationArrow } from "react-icons/fa";

const CommentForm = () => {
  const [change, setChange] = useState(false);
  const [change2, setChange2] = useState(false);
  const [change3, setChange3] = useState(false);

  const toggolInput = () => {
    setChange(!change);
  };
  const toggolInput2 = () => {
    setChange2(!change2);
  };
  const toggolInput3 = () => {
    setChange3(!change3);
  };
  return (
    <>
      <section className="CommentAndForm">
        <section className="comments">
          <h4>
            <span>3 </span>Comments
          </h4>
          <div className="comment-content">
            <div className="comment">
              <div className="main-comment">
                <img src={User} alt="img"></img>
                <div>
                  <div className="main-comment-name-date">
                    <h6>Joe Doe</h6>
                    <p>
                      <BsFillClockFill /> <span>August 31, 2020</span>
                    </p>
                  </div>
                  <p>
                    This is exactly what i was looking for, thank you so much
                    for these tutorials
                  </p>
                  <div className="main-comment-reply">
                    <span onClick={toggolInput}>
                      Reply
                      <TiArrowForward />
                    </span>
                    <div className={change ? "input-show" : "input-hide"}>
                      <input placeholder="Write your Comment..." />
                      <FaLocationArrow className="comment-input-icon" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="main-comment">
                  <img src={User} alt="img"></img>
                  <div>
                    <div className="main-comment-name-date">
                      <h6>Elicia</h6>
                      <p>
                        <BsFillClockFill /> <span>August 31, 2020</span>
                      </p>
                    </div>
                    <p>
                    It would be great to try this theme for my businesses
                    </p>
                    <div className="main-comment-reply">
                      <span onClick={toggolInput2}>
                        Reply
                        <TiArrowForward />
                      </span>
                      <div className={change2 ? "input-show" : "input-hide"}>
                        <input placeholder="Write your Comment..." />
                        <FaLocationArrow className="comment-input-icon" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-comment replay-comment">
                  <img src={User} alt="img"></img>
                  <div>
                    <div className="main-comment-name-date">
                      <h6>Mike</h6>
                      <p>
                        <BsFillClockFill /> <span>August 31, 2020</span>
                      </p>
                    </div>
                    <p>
                    What a nice article. It keeps me reading more and more!
                    </p>
                    <div className="main-comment-reply">
                      <span onClick={toggolInput3}>
                        Reply
                        <TiArrowForward />
                      </span>
                      <div className={change3 ? "input-show" : "input-hide"}>
                        <input placeholder="Write your Comment..." />
                        <FaLocationArrow className="comment-input-icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="comment-form">
          <h2>Leave a Reply</h2>
          <p>Your email address will not be published. Required fields are marked <span>*</span></p>
          <div className="comment-form-input">
            <input placeholder="Your Name *"  type="text" />
            <input placeholder="Email Address *"  type="text" />
            <input placeholder="Your Website"  type="text" />
          </div>
          <textarea placeholder="Comment"  type="text"  />
          <div className="comment-form-input-checkbox">
            <input   type="checkbox" id="checkbox"/>
            <label for="checkbox">Save my name, email, and website in this browser for the next time I comment.</label>
          </div>
          <button>POST COMMENT</button>
        </section>
      </section>
    </>
  );
};

export default CommentForm;
