import React from "react";
import "./footer.scss";
import {
  Majangstories,
  ICFacebook,
  ICInstagram,
  ICTelegram,
  ICGithub,
} from "../../../assets";
const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={Majangstories} alt="logo majangstories" />
        </div>
        <div className="social-wrapper">
          <Icon img={ICFacebook} />
          <Icon img={ICInstagram} />
          <Icon img={ICTelegram} />
          <Icon img={ICGithub} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright 2020 By Yukafi DEV</p>
      </div>
    </div>
  );
};

export default Footer;
