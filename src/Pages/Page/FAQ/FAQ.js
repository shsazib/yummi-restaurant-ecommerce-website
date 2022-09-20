import React, { useState } from "react";
import "./FAQ.css";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ = () => {
  const [change, setChange] = useState(false);
  const [change2, setChange2] = useState(false);
  const [change3, setChange3] = useState(false);
  const [change4, setChange4] = useState(false);
  const [change5, setChange5] = useState(false);

  const handelClick = () => {
    setChange(!change);
  };
  const handelClick2 = () => {
    setChange2(!change2);
  };
  const handelClick3 = () => {
    setChange3(!change3);
  };
  const handelClick4 = () => {
    setChange4(!change4);
  };
  const handelClick5 = () => {
    setChange5(!change5);
  };
  return (
    <>
      <section className="faq-head">
        <h1>FAQ</h1>
        <div className="faq-head-link">
          <Link to="/home">
            Home
            <GoTriangleRight />
          </Link>
          <p> FAQ</p>
        </div>
      </section>
      <div className="main-faq">
        <section>
          <div className="faq">
            <div
              className={change ? "question-bg" : "question"}
              onClick={handelClick}
            >
              <p>How does this work?</p>
              <div className="question-icon">
                {change ? <FiMinus /> : <FiPlus />}
              </div>
            </div>
            <div className={change ? "answer-show" : "answer-hide"}>
              <p>
                Simply put, we deliver your favourite menu from fast-food
                restaurant of choice. Our platform enables you to enter your
                postcode and select a nearby restaurant of choice e.g McDonalds,
                KFC, …Wagamama e.t.c for delivery. Within each of these
                restaurants you will find their menus which you can add to
                basket, choose your payment method (PayPal or Credit / Debit
                Card) and submit. There you go, your order is sent to the
                selected restaurant or the nearby delivery driver where
                applicable.
              </p>
            </div>
          </div>

          <div className="faq">
            <div
              className={change2 ? "question-bg" : "question"}
              onClick={handelClick2}
            >
              <p>Can I order from different restaurant at the same time?</p>
              <div className="question-icon">
                {change2 ? <FiMinus /> : <FiPlus />}
              </div>
            </div>
            <div className={change2 ? "answer-show" : "answer-hide"}>
              <p>
                Simply put, we deliver your favourite menu from fast-food
                restaurant of choice. Our platform enables you to enter your
                postcode and select a nearby restaurant of choice e.g McDonalds,
                KFC, …Wagamama e.t.c for delivery. Within each of these
                restaurants you will find their menus which you can add to
                basket, choose your payment method (PayPal or Credit / Debit
                Card) and submit. There you go, your order is sent to the
                selected restaurant or the nearby delivery driver where
                applicable.
              </p>
            </div>
          </div>

          <div className="faq">
            <div
              className={change3 ? "question-bg" : "question"}
              onClick={handelClick3}
            >
              <p>Are your menu prices the same as those at the restaurant?</p>
              <div className="question-icon">
                {change3 ? <FiMinus /> : <FiPlus />}
              </div>
            </div>
            <div className={change3 ? "answer-show" : "answer-hide"}>
              <p>
                Simply put, we deliver your favourite menu from fast-food
                restaurant of choice. Our platform enables you to enter your
                postcode and select a nearby restaurant of choice e.g McDonalds,
                KFC, …Wagamama e.t.c for delivery. Within each of these
                restaurants you will find their menus which you can add to
                basket, choose your payment method (PayPal or Credit / Debit
                Card) and submit. There you go, your order is sent to the
                selected restaurant or the nearby delivery driver where
                applicable.
              </p>
            </div>
          </div>

          <div className="faq">
            <div
              className={change4 ? "question-bg" : "question"}
              onClick={handelClick4}
            >
              <p>Some menus are missing on a restaurant page?</p>
              <div className="question-icon">
                {change4 ? <FiMinus /> : <FiPlus />}
              </div>
            </div>
            <div className={change4 ? "answer-show" : "answer-hide"}>
              <p>
                Simply put, we deliver your favourite menu from fast-food
                restaurant of choice. Our platform enables you to enter your
                postcode and select a nearby restaurant of choice e.g McDonalds,
                KFC, …Wagamama e.t.c for delivery. Within each of these
                restaurants you will find their menus which you can add to
                basket, choose your payment method (PayPal or Credit / Debit
                Card) and submit. There you go, your order is sent to the
                selected restaurant or the nearby delivery driver where
                applicable.
              </p>
            </div>
          </div>

          <div className="faq">
            <div
              className={change5 ? "question-bg" : "question"}
              onClick={handelClick5}
            >
              <p>
                Do any of your cheeses contain enzymes derived from animal
                sources?
              </p>
              <div className="question-icon">
                {change5 ? <FiMinus /> : <FiPlus />}
              </div>
            </div>
            <div className={change5 ? "answer-show" : "answer-hide"}>
              <p>
                Simply put, we deliver your favourite menu from fast-food
                restaurant of choice. Our platform enables you to enter your
                postcode and select a nearby restaurant of choice e.g McDonalds,
                KFC, …Wagamama e.t.c for delivery. Within each of these
                restaurants you will find their menus which you can add to
                basket, choose your payment method (PayPal or Credit / Debit
                Card) and submit. There you go, your order is sent to the
                selected restaurant or the nearby delivery driver where
                applicable.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;
