import React from 'react';
import './Cart.css';
import { Link, useNavigate } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import { RiShoppingBasketLine } from "react-icons/ri";
import MyCart from './MyCart/MyCart';

const Cart = () => {
  const navigate = useNavigate();
  return (
    <>
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


      {/* empty-cart start  */}
      {/* <section className="empty-cart">
        <RiShoppingBasketLine className="empty-cart-icon" />
        <h1>Your cart is currently empty.</h1>
        <p>
          You don't have any products in the cart yet. <br /> You will find a lot
          of interesting products on our "Shop" page.
        </p>
        <button onClick={() => {navigate("/shop")}}>Return to Shop</button>
      </section> */}
      {/* empty-cart end */}

      <MyCart />


    </>
  )
}

export default Cart;