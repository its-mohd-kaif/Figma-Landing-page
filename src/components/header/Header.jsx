import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import img from "../../images/Images.png";
import bigCircle from "../../images/Ellipse full.png";
import miniCircle from "../../images/Ellipse mini.png";
function Header() {
  // This is header component
  return (
    <section className="head">
      <div className="ellipseDiv">
        <span>
          <img src={bigCircle} alt="circle" />
        </span>
        <span>
          <img src={miniCircle} alt="circle" />
        </span>
      </div>
      <div className="header">
        <img className="header__img" src={logo} alt="logo" />
        <div className="header__title">
          <span>Pages</span>
        </div>
      </div>
      <div className="subtitle">Book Website Template</div>
      <div className="text">
        Pages is a professional author bookstore Webflow template bundled with a
        bunch of unique layouts. Impressive interface and practical sections put
        all the creative power right in your hands to publish your masterpiece.
      </div>
      <div>
        <img className="mainImg" src={img} alt="mainImg" />
      </div>
    </section>
  );
}

export default Header;
