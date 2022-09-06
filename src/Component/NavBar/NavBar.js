import React from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "./image/logo.png";
import { HiOutlineSearch } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { BsSuitHeart } from "react-icons/bs";
import { RiShoppingBasketLine, RiArrowDownSLine } from "react-icons/ri";

const NavBar = () => {
  return (
    <>
      <section className="full-nav-bar">
        <div className="menu">
          <div className="logo">
            <Link to="/home">
              <img src={Logo} alt="Logo"></img>
            </Link>
          </div>
          <div className="full-nav-right-side">
            <nav>
              <ul>
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/menu">Menu</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/shop">Shop</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <div className="sub-menu">
                  <li className="sub-menu-index">
                    <Link to="#">Pages</Link>
                    <RiArrowDownSLine />
                  </li>

                  <ul className="main-sub-menu">
                    <li>
                      <NavLink to="/faq">FAQ</NavLink>
                    </li>
                    <li>
                      <NavLink to="/ourteams">Our Teams</NavLink>
                    </li>
                  </ul>
                </div>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
            <div className="nav-icon">
              <div>
                <input />
                <HiOutlineSearch />
              </div>
              <CgProfile />
              <BsSuitHeart />
              <RiShoppingBasketLine />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
