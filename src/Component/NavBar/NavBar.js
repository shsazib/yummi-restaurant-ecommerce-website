import React, { useState } from "react";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "./image/Untitled-1.png";
import { HiOutlineSearch } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { BsSuitHeart } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { RiShoppingBasketLine, RiArrowDownSLine } from "react-icons/ri";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Login from "../SignUp/SignUp";

const NavBar = () => {
  const [change, setChange] = useState(false);
  const [click, setClick] = useState(true);

  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

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
                    id="main-sub-menu"
                    className={click ? "main-sub-menu" : "main-sub-menu-close"}
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
                  <CgProfile onClick={onOpenModal} />
                  <Modal open={open} onClose={onCloseModal} center>
                    <Login />
                  </Modal>
                </div>
                <div className="nav-right-icon right-span">
                  <Link to="/wishlist" className="right-span-link">
                    <BsSuitHeart title="My Wishlist" />
                    <span className="nav-right-icon-span">4</span>
                  </Link>
                </div>
                <div className="nav-right-icon right-span">
                  <Link to="/cart" className="right-span-link">
                    <RiShoppingBasketLine title="View your shopping cart" />
                    <span className="nav-right-icon-span">0</span>
                  </Link>
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
