// import React from 'react'
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = ({ setShowLogin ,token ,setToken }) => {
  const [menu, setMenu] = useState("home");
  const cardItems = useSelector((state) => state.card.Card);
  // console.log(cardItems.length)
  const totalItems = cardItems.reduce((price, item) => price + item.qty, 0);
  // console.log("total items", totalItems);
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact-us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <Link to="/card">
            <img
              src={assets.basket_icon}
              alt="search"
              className={menu === "card" ? "active" : ""}
              onClick={() => setMenu("card")}
            />
          </Link>
          <div className={totalItems=== 0 ? "" : "dot"}>
            <p> {totalItems===0?"":totalItems}</p>
          </div>
        </div>
        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
