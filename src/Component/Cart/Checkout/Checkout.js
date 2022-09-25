import React, { useState } from "react";
import "./Checkout.css";
import { Link, useNavigate } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import { HiOutlinePlus } from "react-icons/hi";
import { RiShoppingBasketLine } from "react-icons/ri";
import {
  BsInfoCircle,
  BsCheck2Circle,
  BsArrowLeft,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { MdOutlineLocalShipping, MdPayment } from "react-icons/md";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const Checkout = () => {
  const [change, setChange] = useState(true);
  const [change2, setChange2] = useState(true);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handelClick = () => {
    setChange(!change);
  };
  const handelClick2 = () => {
    setChange2(!change2);
  };

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

        <section className="checkout-shipping">
          <div className="checkout-shipping-details">
            <div className="shipping-address address1">
              <input type="radio" id="address1" name="address" />

              <label for="address1">
                <p>
                  <span>Address: </span>Uttara 12 No. Sector
                </p>
                <p>
                  <span>City: </span>Dhaka
                </p>
                <p>
                  <span>Country: </span>Bangladesh
                </p>
                <p>
                  <span>Postal Code: </span>1200
                </p>
                <p>
                  <span>Phone: </span>+8801827892939
                </p>
              </label>
              <div className="address-edit-delete">
                <BsThreeDotsVertical
                  className="address-edit-delete-icon"
                  onClick={handelClick}
                />
                <div
                  className={
                    change
                      ? "address-edit-delete-btn"
                      : " address-edit-delete-btn hide-edit-delete"
                  }
                >
                  <ul>
                    <li>Edit</li>
                    <li>delete</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="shipping-address">
              <input type="radio" id="address2" name="address" />

              <label for="address2">
                <p>
                  <span>Address: </span>Uttara 12 No. Sector
                </p>
                <p>
                  <span>City: </span>Dhaka
                </p>
                <p>
                  <span>Country: </span>Bangladesh
                </p>
                <p>
                  <span>Postal Code: </span>1200
                </p>
                <p>
                  <span>Phone: </span>+8801827892939
                </p>
              </label>
              <div className="address-edit-delete2">
                <BsThreeDotsVertical
                  className="address-edit-delete-icon2"
                  onClick={handelClick2}
                />
                <div
                  className={
                    change2
                      ? "address-edit-delete-btn2"
                      : " address-edit-delete-btn2 hide-edit-delete2"
                  }
                >
                  <ul>
                    <li>Edit</li>
                    <li>delete</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="add-div">
            <div onClick={onOpenModal} className="add-new-address">
              <HiOutlinePlus className="add-new-address-icon" />
              <p>Add New Address</p>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
              <h2 className="pop-up-login-h2">New Address</h2>
              <textarea
                placeholder="Your Address"
                className="address-pop-up-textarea"
              />
              <input
                type="text"
                placeholder="Your Country"
                className="pop-pu-login-input"
              />
              <input
                type="text"
                placeholder="Your City"
                className="pop-pu-login-input"
              />
              <input
                type="text"
                placeholder="Your Postal Code"
                className="pop-pu-login-input"
              />
              <input
                type="text"
                placeholder="+880"
                className="pop-pu-login-input"
              />
              <button className="pop-up-save-btn">Save</button>
            </Modal>
          </div>
        </section>

        <section className="checkout-bottom">
          <div
            className="checkout-return-bottom"
            onClick={() => {
              navigate("/shop");
            }}
          >
            <BsArrowLeft />
            <button>Return to shop</button>
          </div>
          <button
            className="checkout-continue-bottom"
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Continue to Delivery Info
          </button>
        </section>
      </section>
    </>
  );
};

export default Checkout;
