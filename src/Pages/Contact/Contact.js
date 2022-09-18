import React from "react";
import "./Contact.css";
import { BsPhoneVibrate } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <section className="contact-head">
          <h1>Contact Us</h1>
        </section>
        <section className="contact-middle">
          <h1>Call us or visit place</h1>
          <p className="contact-middle-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="contact-address">
            <div>
              <BsPhoneVibrate className="contact-icon" />
              <h6>Phone:</h6>
              <p>+ 44 123 456 78 90</p>
              <p>+ 844 123 444 77 88</p>
            </div>
            <div>
              <GoLocation className="contact-icon" />
              <h6>Address</h6>
              <p>Box 565, Pinney's Beach, Charlestown,</p>
              <p>Nevis, West Indies, Caribbean</p>
            </div>
            <div>
              <AiOutlineMail className="contact-icon" />
              <h6>Email:</h6>
              <p>contact@example.com</p>
              <p>info@example.com</p>
            </div>
          </div>
        </section>
        <section className="contact-map-address">
          <div>
            <iframe
              title="myFrame"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.816381774503!2d90.42269691536319!3d23.789552093195525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7bd0340980f%3A0xc1b37b7f015631e1!2sBikers%20Ocean!5e0!3m2!1sen!2sbd!4v1660560043960!5m2!1sen!2sbd"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <form>
            <h1>Send us a message</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <input placeholder="Your name" type="text" id="name" name="name" />
            <input placeholder="Email" type="text" id="email" name="email" />
            <input
              placeholder="Subject"
              type="text"
              id="subject"
              name="subject"
            />
            <textarea placeholder="Comment" id="comment" name="comment" />
            <button>SUBMIT</button>
          </form>
        </section>
      </section>
    </>
  );
};

export default Contact;
