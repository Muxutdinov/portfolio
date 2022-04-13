import React, { useContext } from "react";
import "./Portfolio.css";
import p1 from "../../img/p1.png";
import p2 from "../../img/p2.png";
import p3 from "../../img/p3.png";
import p4 from "../../img/p4.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>React Projects</span>
      <span>Portfolio</span>
      <div className="img-wrapper">
        <div className="img-wrap">
          <img src={p1} alt="" />
          <div className="project-wrapper">
            <a href="https://github.com/Muxutdinov/shop-res-react">Code</a>
            <a href="https://shop-res-react-build.vercel.app/">Demo</a>
          </div>
        </div>
        <div className="img-wrap">
          <img src={p2} alt="" />
          <div className="project-wrapper">
            <a href="https://github.com/Muxutdinov/fast-food">Code</a>
            <a href="https://food-six.vercel.app/">Demo</a>
          </div>
        </div>
        <div className="img-wrap">
          <img src={p3} alt="" />
          <div className="project-wrapper">
            <a href="https://github.com/Muxutdinov/shopping_cart_context_api">
              Code
            </a>
            <a href="https://shopping-card-chi.vercel.app/">Demo</a>
          </div>
        </div>
        <div className="img-wrap">
          <img src={p4} alt="" />
          <div className="project-wrapper">
            <a href="https://github.com/Muxutdinov/Notes-with-react">Code</a>
            <a href="https://modest-edison-c967a1.netlify.app/">Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
