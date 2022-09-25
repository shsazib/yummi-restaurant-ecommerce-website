import React from "react";
import ShopItemAPI from "./ShopItemAPI";
import ShopItemCard from "./ShopItemCard";
import "./ShopItemList.css";
import MenuNavBar from "./ShopItemNavBar";
import { HiOutlineSearch } from 'react-icons/hi';


const uniqeList = [
  ...new Set(
    ShopItemAPI.map((curElm) => {
      return curElm.category;
    })
  ),
  "All",
];

const MenuList = () => {
  const [menuData, setMenuData] = React.useState(ShopItemAPI);
  const [menuList, setMenuList] = React.useState(uniqeList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(ShopItemAPI);
      return;
    }

    const updateList = ShopItemAPI.filter((curElm) => {
      return curElm.category === category;
    });
    setMenuData(updateList);
  };

  return (
    <>
      <section className="shop-item-list">
        <ShopItemCard menuData={menuData} />
        <section>
          <MenuNavBar filterItem={filterItem} menuList={menuList} />
          <div>
          <input type="input" placeholder="Search products..." />
          <HiOutlineSearch />
          </div>
          <div>
            <h5>Filter by price</h5>
            <input type="range" min="0" max="1000"/>
            <p>Price: $0 — $20</p>
          </div>
          <div>
            <h5>Best Deals</h5>
          </div>
        </section>
      </section>
    </>
  );
};

export default MenuList;
