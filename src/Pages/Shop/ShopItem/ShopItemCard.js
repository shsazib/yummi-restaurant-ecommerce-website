import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";

const ShopCard = ({ menuData }) => {
  return (
    <>
      <section className="shop-item-card-container">
        {menuData.map((curElm, ind) => {
          const { name, image, category, price, description } = curElm;

          return (
            <>
              <div className="menu-card-container" key={ind}>
                <div className="shop-item-card">
                  <div className="shop-item-left">
                    <img src={image} alt="img" />
                  </div>

                  <div className="menu-wish-list">
                    <BsSuitHeartFill />
                  </div>

                  <div className="menu-card-body">
                    <h2 className="text-capitalize">{name}</h2>
                    <h5 className="text-capitalize">{category}</h5>
                    <p className="description">
                      {description}
                    </p>
                    <h3 className="price">{price}</h3>
                    <div>
                      <button className="button" variant="outlined">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default ShopCard;
