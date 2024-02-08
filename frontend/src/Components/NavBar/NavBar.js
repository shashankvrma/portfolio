import "./NavBar.css"
import { React, useState ,useRef} from "react";
import { Link } from "react-router-dom";
import navbarItems from "./NavBarList";


export const Navbar = () => {

  return (
    <>
    <nav id="navbar">
      <ul className="navbar-items flexbox-col">
        <li className="navbar-logo flexbox-left">
          <a className="navbar-item-inner flexbox url">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 1438.88 1819.54">
              <polygon points="925.79 318.48 830.56 0 183.51 1384.12 510.41 1178.46 925.79 318.48"/>
              <polygon points="1438.88 1663.28 1126.35 948.08 111.98 1586.26 0 1819.54 1020.91 1250.57 1123.78 1471.02 783.64 1663.28 1438.88 1663.28"/>
            </svg>
          </a>
        </li>
         {navbarItems.map((item, index) => (
          <li className="navbar-item flexbox-left" key={index}>
            <Link className="navbar-item-inner flexbox-left" to={item.link}>
            <div className="navbar-item-inner-icon-wrapper flexbox" key={`${index}-icon`}>
            {item.icon}
            </div>
             <span className="link-text" key={`${index}-text`}>{item.title}</span>
           </Link>
           </li>
         ))}
       
      </ul>
    </nav>
    </>
  );
};

export default Navbar;