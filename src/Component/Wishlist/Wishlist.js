import React from "react";
import "./Wishlist.css";
import { Link, useNavigate } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { BsSuitHeart } from "react-icons/bs";

import Img1 from "./image/1-0927393382-1-238x238.661f2ea4077cdcd59bc3.jpg";
import Img2 from "./image/52-1-450x450.731931ac4c7034e5ea37.png";

const Wishlist = () => {
    const navigate = useNavigate();
  return (
    <>
      <section className="wishlist-head">
        <h1>Wishlist</h1>
        <div className="wishlist-head-link">
          <Link to="/home">
            Home
            <GoTriangleRight />
          </Link>
          <p> Wishlist</p>
        </div>
      </section>


      {/* empty-wishlist start  */}
      <section className="empty-wishlist">
        <BsSuitHeart className="empty-wishlist-icon" />
        <h1>Wishlist is empty.</h1>
        <p>
          You don't have any products in the wishlist yet. <br /> You will find a lot
          of interesting products on our "Shop" page.
        </p>
        <button onClick={() => {navigate("/shop")}}>Return to Shop</button>
      </section>
      {/* empty-wishlist end */}




      <section className="wishlist">
        <div className="wishlist-cart">
          <div className="wishlist-close-add">
            <h5>Angus Burger</h5>
            <GrFormClose
              className="wishlist-close-icon"
              title="Remove from Wishlist"
            />
          </div>
          <div className="wishlist-product-price">
            <img src={Img1} alt="img"></img>
            <div>
              <div className="wishlist-re-icon">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
              <p>$20.00</p>
            </div>
          </div>
          <button>Add to cart</button>
        </div>
        <div className="wishlist-cart">
          <div className="wishlist-close-add">
            <h5>Tropicana Juice</h5>
            <GrFormClose
              className="wishlist-close-icon"
              title="Remove from Wishlist"
            />
          </div>
          <div className="wishlist-product-price">
            <img src={Img2} alt="img"></img>
            <div>
              <div className="wishlist-re-icon">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
              <p>$11.00</p>
            </div>
          </div>
          <button>Add to cart</button>
        </div>
        <div className="wishlist-cart">
          <div className="wishlist-close-add">
            <h5>Angus Burger</h5>
            <GrFormClose
              className="wishlist-close-icon"
              title="Remove from Wishlist"
            />
          </div>
          <div className="wishlist-product-price">
            <img src={Img1} alt="img"></img>
            <div>
              <div className="wishlist-re-icon">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
              <p>$20.00</p>
            </div>
          </div>
          <button>Add to cart</button>
        </div>
        <div className="wishlist-cart">
          <div className="wishlist-close-add">
            <h5>Tropicana Juice</h5>
            <GrFormClose
              className="wishlist-close-icon"
              title="Remove from Wishlist"
            />
          </div>
          <div className="wishlist-product-price">
            <img src={Img2} alt="img"></img>
            <div>
              <div className="wishlist-re-icon">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
              <p>$10.00</p>
            </div>
          </div>
          <button>Add to cart</button>
        </div>
      </section>
    </>
  );
};

export default Wishlist;
