import React, { Component } from "react";
import {GiPiercedHeart} from "react-icons/gi";
import {FaLinkedin, FaInstagram, FaFacebookSquare, FaGithub, FaTwitter} from "react-icons/fa";

class footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="contain">
          <div className="col social">
            <h1>Made with <GiPiercedHeart className="nav-icon" /> by
                Sinothando Bacela</h1>
            <ul>
              <li>
                <a href="https://www.facebook.com/sinothando.bacela" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className="social-icon" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/sinothando_bace " target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
                </a>
              </li>
              <li>
                <a href="https://za.linkedin.com/in/sinothando-bacela-850aba13a" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
                </a>
              </li>
              <li>
                <a href="https://github.com/SheMortal" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/sinothando_bacela/?hl=en" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default footer;