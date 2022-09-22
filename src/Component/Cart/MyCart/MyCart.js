import React, { useState } from "react";
import "./MyCart.css";
import { RiShoppingBasketLine } from "react-icons/ri";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsInfoCircle, BsCheck2Circle, BsArrowLeft } from "react-icons/bs";
import { MdOutlineLocalShipping, MdPayment } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Img1 from "./image/download.jfif";
import Img2 from "./image/1-0927393382-1-238x238.661f2ea4077cdcd59bc3.jpg";

const MyCart = () => {
  const navigate = useNavigate();

  const price = 11.7;
  const tex = 0.3;
  const total = price + tex;
  const subtotal = total;

  const price2 = 7.1;
  const tex2 = 0.1;
  const total2 = price2 + tex2;
  const subtotal2 = total2;

  const [inc, setInc] = useState(1);
  const [itemPrice, setItemPrice] = useState(price);
  const [itemTex, setItemTex] = useState(tex);
  const [itemTotalPrice, setItemTotalPrice] = useState(total);
  const [itemSubTotal, setItemSubTotal] = useState(subtotal);

  const [inc2, setInc2] = useState(1);
  const [itemPrice2, setItemPrice2] = useState(price2);
  const [itemTex2, setItemTex2] = useState(tex2);
  const [itemTotalPrice2, setItemTotalPrice2] = useState(total2);
  const [itemSubTotal2, setItemSubTotal2] = useState(subtotal2);

  const decrement = () => {
    if (inc > 1) {
      setInc(inc - 1);
      setItemPrice(itemPrice - price);
      setItemTex(itemTex - tex);
      setItemTotalPrice(itemTotalPrice - total);
      setItemSubTotal(itemSubTotal - subtotal);
    } else {
      setInc(1);
    }
  };
  const increment = () => {
    setInc(inc + 1);
    setItemPrice(itemPrice + price);
    setItemTex(itemTex + tex);
    setItemTotalPrice(itemTotalPrice + total);
    setItemSubTotal(itemSubTotal + subtotal);
  };

  const FullSubtotal = itemSubTotal2 + itemSubTotal;

  const decrement2 = () => {
    if (inc2 > 1) {
      setInc2(inc2 - 1);
      setItemPrice2(itemPrice2 - price2);
      setItemTex2(itemTex2 - tex2);
      setItemTotalPrice2(itemTotalPrice2 - total2);
      setItemSubTotal2(itemSubTotal2 - subtotal2);
    } else {
      setInc2(1);
    }
  };
  const increment2 = () => {
    setInc2(inc2 + 1);
    setItemPrice2(itemPrice2 + price2);
    setItemTex2(itemTex2 + tex2);
    setItemTotalPrice2(itemTotalPrice2 + total2);
    setItemSubTotal2(itemSubTotal2 + subtotal2);
  };
  return (
    <>
      <div className="my-cart">
        <section className="my-cart-head">
          <div className="my-cart-item item-color">
            <RiShoppingBasketLine className="my-cart-icon item-color" />
            <p>1. My Cart</p>
          </div>
          <div className="my-cart-item">
            <BsInfoCircle className="my-cart-icon" />
            <p>2. Shipping info</p>
          </div>
          <div className="my-cart-item">
            <MdOutlineLocalShipping className="my-cart-icon" />
            <p>3. Delivery info</p>
          </div>
          <div className="my-cart-item">
            <MdPayment className="my-cart-icon" />
            <p>4. Payment</p>
          </div>
          <div className="my-cart-item">
            <BsCheck2Circle className="my-cart-icon" />
            <p>5. Confirmation</p>
          </div>
        </section>

        <section className="my-cart-details">
          <table>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th className="text">Tax</th>
              <th className="quantity">Quantity</th>
              <th className="total">Total</th>
              <th>Remove</th>
            </tr>

            <tr>
              <td className="product-cart-details-img">
                <img src={Img1} alt="Product"></img>
                <p>
                  Blackberry Smoothie <span>({inc})</span>
                </p>
              </td>
              <td>${itemPrice.toFixed(2)}</td>
              <td className="text">${itemTex.toFixed(2)}</td>
              <td className="quantity">
                <div className="my-cart-quantity">
                  <AiOutlineMinus
                    className="my-cart-quantity-icon"
                    onClick={decrement}
                  />
                  <span>{inc}</span>
                  <AiOutlinePlus
                    className="my-cart-quantity-icon"
                    onClick={increment}
                  />
                </div>
              </td>
              <td className="total-price total">
                ${itemTotalPrice.toFixed(2)}
              </td>
              <td>
                <AiOutlineDelete className="my-cart-item-delete" />
              </td>
            </tr>

            <tr>
              <td className="product-cart-details-img">
                <img src={Img2} alt="Product"></img>
                <p>
                  Blackberry Smoothie <span>({inc2})</span>
                </p>
              </td>
              <td>${itemPrice2.toFixed(2)}</td>
              <td className="text">${itemTex2.toFixed(2)}</td>
              <td className="quantity">
                <div className="my-cart-quantity">
                  <AiOutlineMinus
                    className="my-cart-quantity-icon"
                    onClick={decrement2}
                  />
                  <span>{inc2}</span>
                  <AiOutlinePlus
                    className="my-cart-quantity-icon"
                    onClick={increment2}
                  />
                </div>
              </td>
              <td className="total-price total">
                ${itemTotalPrice2.toFixed(2)}
              </td>
              <td>
                <AiOutlineDelete className="my-cart-item-delete" />
              </td>
            </tr>
          </table>
          <div className="subtotal">
            <p>Subtotal</p>
            <h5>${FullSubtotal.toFixed(2)}</h5>
          </div>
        </section>

        <section className="my-cart-bottom">
          <div
            className="my-cart-return-bottom"
            onClick={() => {
              navigate("/shop");
            }}
          >
            <BsArrowLeft />
            <button>Return to shop</button>
          </div>
          <button
            className="my-cart-continue-bottom"
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Continue to Shipping
          </button>
        </section>
      </div>
    </>
  );
};

export default MyCart;
