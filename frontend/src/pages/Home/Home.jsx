import React, { useState } from "react";
import "./Home.css";
import Heder from "../../components/Heder/Heder";
import Menu from "../../components/Menu/Menu";
const Home = () => {
  const [category ,setCategory] =useState("All")
  return (
    <div>
      <Heder />
      <Menu  category={category} setCategory={setCategory}/>
    </div>
  );
};

export default Home;
