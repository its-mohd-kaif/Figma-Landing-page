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
      <div className="main__victor">
        <div className="main__victor__title">
          <img src={vImg} alt="v img" />
          <div>
            <div className="main__victor__title__heading">VictorFlow</div>
            <div className="main__victor__title__text">
              Webflow Design &<aside>Development Agency</aside>
            </div>
          </div>
        </div>
        <div className="main__victor__social">
          <div className="main__victor__social__heading">Follow Us</div>
          <div className="main__victor__social__block">
            <img src={ig} alt="ig" />
            <div>
              <div className="main__victor__social__block__heading">
                Instagram{" "}
                <span>
                  <img src={arrow} alt="arrow" />
                </span>
              </div>
              <div className="main__victor__social__block__text">
                Join our Instagram page, We share UI/UX{" "}
                <aside>Design tips.</aside>
              </div>
            </div>
          </div>
          <div className="main__victor__social__block">
            <div>
              <img src={tw} alt="ig" />
            </div>
            <div style={{ marginLeft: "-0.6em" }}>
              <div className="main__victor__social__block__heading">
                Twitter{" "}
                <span>
                  <img src={arrow} alt="arrow" />
                </span>
              </div>
              <div className="main__victor__social__block__text">
                Join our Instagram page, We share UI/UX{" "}
                <aside>Design tips.</aside>
              </div>
            </div>
          </div>
          <div className="main__victor__social__block">
            <div>
              <img src={inImg} alt="ig" />
            </div>
            <div>
              <div className="main__victor__social__block__heading">
                LinkedIn{" "}
                <span>
                  <img src={arrow} alt="arrow" />
                </span>
              </div>
              <div className="main__victor__social__block__text">
                Join our Instagram page, We share UI/UX{" "}
                <aside>Design tips.</aside>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main__file">
        <div className="main__file__title">File Info</div>
        <div className="main__file__card">
          <div className="main__victor__social__block">
            <div>
              <img src={figma} alt="ig" />
            </div>
            <div>
              <div className="main__victor__social__block__heading">
                Figma File for&nbsp;
                <span style={{ color: "#4353FF" }}>FREE</span>
              </div>
              <div className="main__victor__social__block__text">
                It is free to use for personal and{" "}
                <aside>commercial purposes.</aside>
              </div>
            </div>
          </div>
          <div className="main__victor__social__block">
            <div>
              <img src={webflow} alt="ig" />
            </div>
            <div>
              <div className="main__victor__social__block__heading">
                Webflow
              </div>
              <div className="main__victor__social__block__text">
                The complete design is available as a{" "}
                <aside>Webflow template.</aside>
              </div>
            </div>
          </div>
          <button className="main__file__btn">Get Template $79 USD</button>
        </div>
      </div>
    </section>
  );
}

export default Main;
