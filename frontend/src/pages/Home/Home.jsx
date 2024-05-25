import React, { useState } from "react";
import "./Home.css";
import Heder from "../../components/Heder/Heder";
import Menu from "../../components/Menu/Menu";
import FoodDisplay from "../../foodDisplay/FoodDisplay";
const Home = () => {
  const [category ,setCategory] =useState("All")
  return (
    <div>
      <Heder />
      <Menu  category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
