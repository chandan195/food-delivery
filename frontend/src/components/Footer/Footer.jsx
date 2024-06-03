import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import AppDownload from "../AppDownload/AppDownload";
// import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            architecto, tempora ipsam commodi voluptas aliquam deserunt vel amet
            modi voluptatem incidunt doloribus a totam omnis.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="facebook icon" />
            <img src={assets.linkedin_icon} alt="linkedin_icon" />
            <img src={assets.twitter_icon} alt="twitter_icon" />
          </div>
        </div>
        <div className="footer-content-center" id="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 1122334455</li>
            <li>company@tomato.com</li>
            <li><AppDownload/></li>
          </ul>
        </div>
      </div>
      
      <hr />
      <p className="footer-copyright"> copyright 2024@Tomato.com -</p>
    </div>
  );
};

export default Footer;
