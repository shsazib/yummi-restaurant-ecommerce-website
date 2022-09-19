import React from "react";
import "./Menu.css";
import {Link} from "react-router-dom";
import { GoTriangleRight } from 'react-icons/go';
import Menulist from './MenuList/MenuList';

const Menu = () => {
  return (
    <>
      <section className="menu">
        <section className="menu-head">
          <h1>Food Menu</h1>
          <div className="menu-head-link">
            <Link to="/home">Home<GoTriangleRight /></Link>
            <p> Menu</p>
          </div>
        </section>
        <section>
          <Menulist />
        </section>
      </section>
    </>
  );
};

export default Menu;
