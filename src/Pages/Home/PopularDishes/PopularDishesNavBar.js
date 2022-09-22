const PopularDishesNavbar = ({ filterItem, menuList }) => {
    return (
      <>
        <nav className="menuNavbar d-flex justify-content-center">
          <div className="btn-group">
            {menuList.map((curElm, ind) => {
              return (
                <div key={ind}>
                  <button onClick={() => filterItem(curElm)} key={ind}>{curElm}</button>
                </div>
              );
            })}
          </div>
        </nav>
      </>
    );
  };
  
  export default PopularDishesNavbar;
  