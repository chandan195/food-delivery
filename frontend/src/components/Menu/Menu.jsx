import React from "react";
import "./Menu.css";
import { menu_list } from "../../assets/assets";
const Menu = ( {category ,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempore
        reprehenderit sit, repudiandae rem consequatur perspiciatis tenetur
        aperiam et a!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
             onClick={()=>setCategory(prev=>prev===item.menu_name ?"All":item.menu_name)} key={index} className="explore-menu-list-item">
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name}  />
              <p className={category===item.menu_name?"active-item-name":""} >{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Menu;
