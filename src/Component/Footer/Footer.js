import React from "react";
import "./Footer.css";
import Logo from "./image/Untitled-1.png";
import { NavLink } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { TiLocationArrowOutline } from "react-icons/ti";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineClockCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="all-footer">
        <div className="footer">
          <div className="footer-address">
            <img src={Logo} alt="Logo"></img>
            <div className="d-flex align-items-center">
              <GoLocation className="footer-address-icon" />
              <p className="">8901 Marmora Road, New York, NY 10013</p>
            </div>
            <div className="d-flex align-items-center">
              <AiOutlinePhone className="footer-address-icon" />
              <p>+88012345678</p>
            </div>
            <div className="d-flex align-items-center">
              <AiOutlineMail className="footer-address-icon" />
              <p>mail@companyname.com</p>
            </div>
            <div className="d-flex align-items-center">
              <AiOutlineClockCircle className="footer-address-icon" />
              <p>Mon - Fri: 8am - 11pm, Sat - Sun: 8am - 12pm</p>
            </div>
          </div>
          <div className="footer-menu ">
            <h1>Menu</h1>
            <div className="d-flex align-items-center">
              <TiLocationArrowOutline className="footer-icon" />
              <a href="##">
                <p>Pizza</p>
              </a>
            </div>
            <div className="d-flex align-items-center">
              <TiLocationArrowOutline className="footer-icon" />
              <a href="##">
                <p>Pasta</p>
              </a>
            </div>
            <div className="d-flex align-items-center">
              <TiLocationArrowOutline className="footer-icon" />
              <a href="##">
                <p>Burgers</p>
              </a>
            </div>
            <div className="d-flex align-items-center">
              <TiLocationArrowOutline className="footer-icon" />
              <a href="##">
                <p>Ice Cream</p>
              </a>
            </div>
            <div className="d-flex align-items-center">
              <TiLocationArrowOutline className="footer-icon" />
              <a href="##">
                <p>Shake</p>
              </a>
            </div>
          </div>
          <div className="footer-company">
            <h1>Company</h1>
            <div className="d-flex align-items-center">
              <TiLocationArrowOutline className="footer-icon" />
              <NavLink to="home">
                <p>Home</p>
              </NavLink>
            </div>
            <div className="d-flex align-items-center">
              <TiLocationArrowOutline className="footer-icon" />
              <NavLink to="about">
                <p>About</p>
              </NavLink>
            </div>
            <div className="d-flex align-items-center">
              <TiLocationArrowOutline className="footer-icon" />
              <NavLink to="shop">
                <p>Shop</p>
              </NavLink>
            </div>
            <div className="d-flex align-items-center">
              <TiLocationArrowOutline className="footer-icon" />
              <NavLink to="blog">
                <p>Blog</p>
              </NavLink>
            </div>
            <div className="d-flex align-items-center">
              <TiLocationArrowOutline className="footer-icon" />
              <NavLink to="contact">
                <p>FAQ</p>
              </NavLink>
            </div>
          </div>
          <div className="footer-contact">
            <h1>Contact</h1>
            <iframe
              title="myFrame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.816381774503!2d90.42269691536319!3d23.789552093195525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7bd0340980f%3A0xc1b37b7f015631e1!2sBikers%20Ocean!5e0!3m2!1sen!2sbd!4v1660560043960!5m2!1sen!2sbd"
              loading="lazy"
              referrer-policy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="copyright d-grid justify-content-center mt-5 ">
          <span>
            Copyright ©2022 All rights reserved | and Developed by
            <a href="https://zealtechbd.com/" target="__blank">
              ZealtechBD
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
