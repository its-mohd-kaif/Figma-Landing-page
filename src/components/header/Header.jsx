import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import img from "../../images/Images.png";
import bigCircle from "../../images/Ellipse full.png";
import miniCircle from "../../images/Ellipse mini.png";
function Header() {
  // This is header component
  return (
    <section className="header">
      <div className="header__ellipse">
        <span>
          <img src={bigCircle} alt="circle" />
        </span>
        <span>
          <img src={miniCircle} alt="circle" />
        </span>
      </div>
      <div className="header__title">
        <img className="header__title__img" src={logo} alt="logo" />
        <div className="header__title__heading">
          <span>Pages</span>
        </div>
      </div>
      <div className="header__subtitle">Book Website Template</div>
      <div className="header__text">
        Pages is a professional author bookstore Webflow template bundled with a
        bunch of unique layouts. Impressive interface and practical sections put
        all the creative power right in your hands to publish your masterpiece.
      </div>
      <div>
        <img className="header__mainImg" src={img} alt="mainImg" />
      </div>
    </section>
  );
}

export default Header;
