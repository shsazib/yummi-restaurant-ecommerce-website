import React, {useState} from "react";
import ShopItemAPI from "./ShopItemAPI";
import ShopItemCard from "./ShopItemCard";
import "./ShopItemList.css";
import MenuNavBar from "./ShopItemNavBar";
import { HiOutlineSearch } from "react-icons/hi";

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
  const [price, setPrice] = useState(50);

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
          <div className="shop-item-right-input">
            <input type="input" placeholder="Search products..." />
            <HiOutlineSearch className="shop-item-right-search-icon" />
          </div>
          <div>
            <h5>Filter by price</h5>
            <input type="range" min="0" max="100" onChange={e => {setPrice(e.target.value)}}/>
            <p>Price: ${price} — $100</p>
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
