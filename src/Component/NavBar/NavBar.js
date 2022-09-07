import React, { useState } from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "./image/logo.png";
import { HiOutlineSearch } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { BsSuitHeart } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { RiShoppingBasketLine, RiArrowDownSLine } from "react-icons/ri";

const NavBar = () => {
  const [change, setChange] = useState(false);
  const [click, setClick] = useState(false);

  const handelClick = () => {
    setChange(!change);
  };
  const clicked = () => {
    setClick(!click);
  };

  return (
    <>
      <section className="full-nav-bar">
        <div className="menu">
          <div className="logo">
            <Link to="/home">
              <img src={Logo} alt="Logo"></img>
            </Link>
          </div>
          <div
            className={
              change
                ? "full-nav-right-side"
                : " full-nav-right-side full-nav-right-side-close"
            }
          >
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
                  <li className="sub-menu-index" onClick={clicked}>
                    <Link to="#">Pages</Link>
                    <RiArrowDownSLine className={click ? "page-array" : ""} />
                  </li>

                  <ul
                    className={click ? "main-sub-menu-close" : "main-sub-menu"}
                  >
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
              <div className="nav-input-search">
                <input placeholder="Search..." />
                <HiOutlineSearch className="search-icon" />
              </div>
              <div className="nav-right-3icon">
                <div className="nav-right-icon profile-right">
                  <CgProfile />
                </div>
                <div className="nav-right-icon right-span">
                  <BsSuitHeart />
                  <span className="nav-right-icon-span">0</span>
                </div>
                <div className="nav-right-icon right-span">
                  <RiShoppingBasketLine />
                  <span className="nav-right-icon-span">0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-responsive-icon" onClick={handelClick}>
            {change ? (
              <GrClose className="nav-responsive-bars-icon" />
            ) : (
              <FaBars className="nav-responsive-bars-icon" />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;
