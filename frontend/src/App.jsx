import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Card from "./pages/Cart/Card";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";

function App() {
  
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);
  return (
    <BrowserRouter>
      {showLogin ? (
        <LoginPopup setToken={setToken} setShowLogin={setShowLogin} />
      ) : (
        <></>
      )}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} token={token} setToken={setToken} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
