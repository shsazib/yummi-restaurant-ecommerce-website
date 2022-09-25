const ShopItemNavbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="ShopItemNavbar">
        <div className="item-btn-group">
          {menuList.map((curElm) => {
            return (
              <div>
                <button onClick={() => filterItem(curElm)}>{curElm}</button>
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default ShopItemNavbar;
