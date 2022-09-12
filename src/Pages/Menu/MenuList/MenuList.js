import React from "react";
import MenuAPI from "./MenuAPI";
import MenuCard from "./MenuCard";
import "./MenuList.css";
import MenuNavBar from "./MenuNavBar";

const uniqeList = [
  ...new Set(
    MenuAPI.map((curElm) => {
      return curElm.category;
    })
  ),
  "All",
];

const MenuList = () => {
  const [menuData, setMenuData] = React.useState(MenuAPI);
  const [menuList, setMenuList] = React.useState(uniqeList);

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
      <MenuNavBar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default MenuList;
