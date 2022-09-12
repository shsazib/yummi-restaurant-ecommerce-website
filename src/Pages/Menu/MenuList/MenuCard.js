import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card-container">
        {menuData.map((curElm) => {
          const { id, name, image, category, price, description } = curElm;

          return (
            <>
              <div className="menu-card-container" key={id}>
                <div className="menu-card">
                  <div className="meni-left">
                    <img src={image} alt="img" />
                  </div>

                  <div className="menu-wish-list">
                    <BsSuitHeartFill />
                  </div>

                  <div className="menu-card-body">
                    <h2 className="text-capitalize">{name}</h2>
                    <h5 className="text-capitalize">{category}</h5>
                    <span className="description text-justify">
                      {description}
                    </span>
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

export default MenuCard;
