import React from "react";
import MenuAPI from "./PopularDishesAPI";
import MenuCard from "./PopularDishesCard";
import "./PopularDishes.css";
import MenuNavBar from "./PopularDishesNavBar";
import { useNavigate } from "react-router-dom";

const UniqeList = [
  ...new Set(
    MenuAPI.map((curElm) => {
      return curElm.category;
    })
  ),
  "All",
];

const MenuList = () => {
  const [menuData, setMenuData] = React.useState(MenuAPI);
  const [menuList, setMenuList] = React.useState(UniqeList);
  const navigate = useNavigate();

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(MenuAPI);
      return;
    }

    const updateList = MenuAPI.filter((curElm) => {
      return curElm.category === category;
    });
    setMenuData(updateList);
  };

  return (
    <>
      <h1 className="Popular-dishes-heading">Popular dishes</h1>
      <MenuNavBar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
      <div className="Popular-dishes-btn">
        <button
          onClick={() => {
            navigate("/shop");
          }}
        >
          All products
        </button>
      </div>
    </>
  );
};

export default MenuList;
