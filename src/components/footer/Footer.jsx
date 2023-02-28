import React from "react";
import "./Footer.css";
import arrow from "../../images/right.png";
import pexels from "../../images/pexels.png";
import unsplash from "../../images/unsplash.png";
import cardo from "../../images/cardo.png";
import inter from "../../images/inter.png";
function Footer() {
  return (
    <section>
      <div className="footer">
        <div>
          <div className="footer__title">Images</div>
          <div className="footer__social__div">
            <span>
              <img src={pexels} alt="arrow" />
            </span>
            <div style={{ marginTop: "0.5em" }}>Pexels</div>
            <span style={{ marginTop: "0.5em" }}>
              <img src={arrow} alt="arrow" />
            </span>
          </div>
          <div className="footer__social__text">
            You can check the licenses and download{" "}
            <aside>
              the images for free on{" "}
              <span style={{ fontWeight: "bolder", color: "black" }}>
                Pexels
              </span>
            </aside>
          </div>

          <div className="footer__social__div">
            <span>
              <img src={unsplash} alt="arrow" />
            </span>
            <div style={{ marginTop: "0.5em" }}>Unsplash</div>
            <span style={{ marginTop: "0.5em" }}>
              <img src={arrow} alt="arrow" />
            </span>
          </div>
          <div className="footer__social__text">
            You can check the licenses and download{" "}
            <aside>
              the images for free on{" "}
              <span style={{ fontWeight: "bolder", color: "black" }}>
                Unsplash
              </span>
            </aside>
          </div>
        </div>
        <div>
          <div className="footer__title">Fonts</div>
          <div className="footer__social__div">
            <span>
              <img src={cardo} alt="arrow" />
            </span>
            <div style={{ marginTop: "0.5em" }}>Cardo</div>
            <span style={{ marginTop: "0.5em" }}>
              <img src={arrow} alt="arrow" />
            </span>
          </div>
          <div className="footer__social__text">
            Pages Book Website Template uses free licensed{" "}
            <span style={{ fontWeight: "bolder", color: "black" }}>
              Google Fonts
            </span>
          </div>

          <div className="footer__social__div">
            <span>
              <img src={inter} alt="arrow" />
            </span>
            <div style={{ marginTop: "0.5em" }}>Inter</div>
            <span style={{ marginTop: "0.5em" }}>
              <img src={arrow} alt="arrow" />
            </span>
          </div>
          <div className="footer__social__text">
            Pages Book Website Template uses free licensed{" "}
            <span style={{ fontWeight: "bolder", color: "black" }}>
              Google Fonts
            </span>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        Proudly Presented by{" "}
        <span style={{ color: "#FFB322", borderBottom: "1px solid #FFB322" }}>
          VictorFlow
        </span>{" "}
        in Designed by Figma and Build in Webflow
      </div>
    </section>
  );
}

export default Footer;
