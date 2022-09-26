const ShopItemNavbar = ({ filterItem, menuList }) => {
  return (
    <>
    <h3 className="item-categories-h3">Categories</h3>
      <nav className="ShopItemNavbar">
        <div className="item-btn-group">
          {menuList.map((curElm) => {
            return (
              <div className="item-button" onClick={() => filterItem(curElm)}>
                <button>{curElm}</button>
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default ShopItemNavbar;
