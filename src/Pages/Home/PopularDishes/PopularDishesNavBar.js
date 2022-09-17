const PopularDishesNavbar = ({ filterItem, menuList }) => {
    return (
      <>
        <nav className="menuNavbar d-flex justify-content-center">
          <div className="btn-group">
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
  
  export default PopularDishesNavbar;
  