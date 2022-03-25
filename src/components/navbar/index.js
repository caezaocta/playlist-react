import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav>
        <h2>GIGIH 2.0 Playlist</h2>
        <ul>
          <li>
            <a href="#" id="logo1">
              <i>
                <FaGithub color="white" size="2em" />
              </i>
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <FaLinkedinIn color="white" size="2em" />
              </i>
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <FaInstagram color="white" size="2em" />
              </i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
