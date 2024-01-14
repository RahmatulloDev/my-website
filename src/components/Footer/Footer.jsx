import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-telegram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import UilTelegram from "@iconscout/react-unicons/icons/uil-telegram";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>rahmatillozokirjonov853@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/rakhmatillo_zokirjonov/"><Insta color="white" size={"3rem"} /></a>
         <a href="https://t.me/rahmatillo_zokirjonov"> <UilTelegram   color="white" size={"3rem"} /></a>
         <a href="https://github.com/RahmatulloDev/"> <Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
