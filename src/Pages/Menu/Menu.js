import React from "react";
import "./Menu.css";
import Menulist from './MenuList/MenuList';

const Menu = () => {
  return (
    <>
      <section className="menu">
        <section className="menu-head">
          <h1>Food Menu</h1>
        </section>
        <section>
          <Menulist />
        </section>
      </section>
    </>
  );
};

export default Menu;
