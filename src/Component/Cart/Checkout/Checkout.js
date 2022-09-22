import React from "react";
import "./Checkout.css";
import { Link, useNavigate } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import { RiShoppingBasketLine } from "react-icons/ri";
import { BsInfoCircle, BsCheck2Circle, BsArrowLeft } from "react-icons/bs";
import { MdOutlineLocalShipping, MdPayment } from "react-icons/md";

const Checkout = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="checkout">
        <section className="cart-head">
          <h1>Cart</h1>
          <div className="cart-head-link">
            <Link to="/home">
              Home
              <GoTriangleRight />
            </Link>
            <p> Cart</p>
          </div>
        </section>
        <section className="checkout-cart-head">
          <div className="checkout-cart-item item-success-color">
            <RiShoppingBasketLine className="checkout-cart-icon item-success-color" />
            <p>1. My Cart</p>
          </div>
          <div className="checkout-cart-item item-color">
            <BsInfoCircle className="checkout-cart-icon item-color" />
            <p>2. Shipping info</p>
          </div>
          <div className="checkout-cart-item">
            <MdOutlineLocalShipping className="checkout-cart-icon" />
            <p>3. Delivery info</p>
          </div>
          <div className="checkout-cart-item">
            <MdPayment className="checkout-cart-icon" />
            <p>4. Payment</p>
          </div>
          <div className="checkout-cart-item">
            <BsCheck2Circle className="checkout-cart-icon" />
            <p>5. Confirmation</p>
          </div>
        </section>

        <section className="my-cart-bottom">
          <div
            className="my-cart-return-bottom"
            onClick={() => {
              navigate("/shop");
            }}
          >
            <BsArrowLeft />
            <button>Return to shop</button>
          </div>
          <button
            className="my-cart-continue-bottom"
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Continue to Shipping
          </button>
        </section>
      </section>
    </>
  );
};

export default Checkout;
