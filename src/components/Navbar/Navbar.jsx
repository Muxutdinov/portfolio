import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Jaxongir</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Resume
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true}>
                <button className="button n-button">Contact</button>
              </Link>
            </li>
          </ul>
        </div>
        <div
          style={{ cursor: "pointer" }}
          className="n-bar"
          onClick={() => setShow(!show)}
        >
          <i className="fa fa-outdent"></i>
        </div>
        <div
          className="mobile"
          style={show ? { width: "100%", cursor: "pointer" } : {}}
          onClick={() => setShow(!show)}
        >
          <div className="mobile-left"></div>
          <div className="mobile-right">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <div>
                  <i class="fas fa-window-close"></i>
                </div>
              </li>
              <li>
                <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="services" spy={true} smooth={true}>
                  Resume
                </Link>
              </li>
              <li>
                <Link to="portfolio" spy={true} smooth={true}>
                  Protfolio
                </Link>
              </li>
              <li>
                <Link to="testimonial" spy={true} smooth={true}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
