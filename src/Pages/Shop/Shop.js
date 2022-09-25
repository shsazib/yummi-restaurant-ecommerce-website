import React from "react";
import "./Shop.css";
import { Link } from "react-router-dom";
import { GoTriangleRight } from "react-icons/go";
import ShopItemList from "./ShopItem/ShopItemList";

const Shop = () => {
  return (
    <>
      <section>
        <section className="shop-head">
          <h1>Shop</h1>
          <div className="shop-head-link">
            <Link to="/home">
              Home
              <GoTriangleRight />
            </Link>
            <p> Shop</p>
          </div>
        </section>
        <section>
          <div className="shop-item-sorting">
            <p>Showing all <span>12</span> results</p>
            <select name="cars" id="cars">
              <option value="volvo">Default sorting</option>
              <option value="saab">Sort by popularity</option>
              <option value="mercedes">Sort by average rating</option>
              <option value="audi">Sort by latest</option>
              <option value="audi">Sort by price: low to high</option>
              <option value="audi">Sort by price: high to low</option>
            </select>
          </div>
          <ShopItemList />
        </section>
      </section>
    </>
  );
};

export default Shop;
