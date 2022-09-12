const MenuNavbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="menuNavbar d-flex justify-content-center">
        <div className="btn-group">
          {menuList.map((curElm) => {
            return (
              <>
                <button onClick={() => filterItem(curElm)}>{curElm}</button>
              </>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default MenuNavbar;
