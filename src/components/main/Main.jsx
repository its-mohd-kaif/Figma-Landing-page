import React from "react";
import "./Main.css";
import vImg from "../../images/v logo.png";
import ig from "../../images/instagram(1).png";
import arrow from "../../images/right.png";
import tw from "../../images/twitter.png";
import inImg from "../../images/linkedin.png";
import figma from "../../images/Group 3.png";
import webflow from "../../images/Group.png";
// This is main component
function Main() {
  return (
    <section className="main">
      <div>
        <div className="main__column1">
          <div>
            <img src={vImg} alt="v img" />
          </div>
          <div>
            <div className="main__column1__heading">VictorFlow</div>
            <div className="main__column1__text">
              Webflow Design &<aside>Development Agency</aside>
            </div>
          </div>
        </div>
        <div className="socialDiv">
          <div className="socialDiv__heading">Follow Us</div>
          <div className="socialDiv__row">
            <div>
              <img className="socialDiv__row__img" src={ig} alt="ig" />
            </div>
            <div>
              <div className="socialDiv__row__title">
                Instagram{" "}
                <span>
                  <img src={arrow} alt="arrow" />
                </span>
              </div>
              <div className="socialDiv__row__text">
                Join our Instagram page, We share UI/UX{" "}
                <aside>Design tips.</aside>
              </div>
            </div>
          </div>
          <div className="socialDiv__row">
            <div>
              <img className="socialDiv__row__img" src={tw} alt="ig" />
            </div>
            <div style={{ marginLeft: "-0.6em" }}>
              <div className="socialDiv__row__title">
                Twitter{" "}
                <span>
                  <img src={arrow} alt="arrow" />
                </span>
              </div>
              <div className="socialDiv__row__text">
                Join our Instagram page, We share UI/UX{" "}
                <aside>Design tips.</aside>
              </div>
            </div>
          </div>
          <div className="socialDiv__row">
            <div>
              <img className="socialDiv__row__img" src={inImg} alt="ig" />
            </div>
            <div>
              <div className="socialDiv__row__title">
                LinkedIn{" "}
                <span>
                  <img src={arrow} alt="arrow" />
                </span>
              </div>
              <div className="socialDiv__row__text">
                Join our Instagram page, We share UI/UX{" "}
                <aside>Design tips.</aside>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mainColumn2__title">File Info</div>
        <div className="mainColumn2__card">
          <div className="socialDiv__row">
            <div>
              <img className="socialDiv__row__img" src={figma} alt="ig" />
            </div>
            <div>
              <div className="socialDiv__row__title">
                Figma File for&nbsp;
                <span style={{ color: "#4353FF" }}>FREE</span>
              </div>
              <div className="socialDiv__row__text">
                It is free to use for personal and{" "}
                <aside>commercial purposes.</aside>
              </div>
            </div>
          </div>
          <div className="socialDiv__row">
            <div>
              <img className="socialDiv__row__img" src={webflow} alt="ig" />
            </div>
            <div>
              <div className="socialDiv__row__title">Webflow</div>
              <div className="socialDiv__row__text">
                The complete design is available as a{" "}
                <aside>Webflow template.</aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
