import React from "react";
import "..//HoneyComb/HoneyComb.css";

const HoneyComb = () => {
  return (
    <ul className="honeycomb">
      <li className="honeycomb-cell">
        <img
          className="honeycomb-cell_img"
          src="https://github.com/shashankvrma/portfolio/blob/main/src/assets/java.png"
          alt="JAVA"
        />
        <div className="honeycomb-cell_title">JAVA</div>
      </li>
      <li className="honeycomb-cell">
        <img
          className="honeycomb-cell_img"
          src="src/assets/react.png"
          alt="React"
        />
        <div className="honeycomb-cell_title">React</div>
      </li>
      <li className="honeycomb-cell">
        <img
          className="honeycomb-cell_img"
          src="https://github.com/shashankvrma/portfolio/blob/main/src/assets/html.png"
          alt="html"
        />
        <div className="honeycomb-cell_title">HTML</div>
      </li>
      <li className="honeycomb-cell">
        <img
          className="honeycomb-cell_img"
          src="./src/assets/aws.png"
          alt="aws"
        />
        <div className="honeycomb-cell_title">AWS</div>
      </li>
      <li className="honeycomb-cell">
        <img
          className="honeycomb-cell_img"
          src="https://github.com/shashankvrma/portfolio/blob/main/src/assets/css.png"
          alt="css"
        />
        <div className="honeycomb-cell_title">CSS</div>
      </li>
      <li className="honeycomb-cell">
        <img
          className="honeycomb-cell_img"
          src="https://github.com/shashankvrma/portfolio/blob/main/src/assets/tailwind.png"
          alt="Tailwind"
        />
        <div className="honeycomb-cell_title">Tailwind</div>
      </li>
      <li className="honeycomb-cell honeycomb-Hidden"></li>
    </ul>
  );
};

export default HoneyComb;
