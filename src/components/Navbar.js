import React, { Component } from "react";
import logo from "../images/logo.svg.jpeg";
import { FaBars, FaHome } from "react-icons/fa";
import {RiContactsLine} from "react-icons/ri";
import {BsFillPersonPlusFill} from "react-icons/bs";
import {MdPerson} from "react-icons/md";
import {GiBed} from "react-icons/gi";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img className="logo" src={logo} alt="Transylvenia" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaBars className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          ><li>
              <Link to="/"><FaHome className="nav-icon" />Home</Link>
            </li>
            <li>
              <Link to="/rooms"><GiBed className="nav-icon" />Rooms</Link>
            </li>
            <li>
              <Link to="/login"><MdPerson className="nav-icon" />Login</Link>
            </li>
            <li>
              <Link to="/register"><BsFillPersonPlusFill className="nav-icon" />Register</Link>
            </li>
            <li>
              <Link to="/contact"><RiContactsLine className="nav-icon" />Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
