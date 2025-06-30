import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Popupbox from "./Popupbox";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    // <div className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-gray-500 bg-clip-padding backdrop-filter backdrop-blue bg-opacity-10 backdrop saturate-100 backdrop-contrast-100 text-gray-900 text-lg text- font-satoshi z-50">
    <div className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 text-gray-900 text-lg font-satoshi z-50">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "100px" }} />
      </div>

      {/* Menu */}
      <div>
        <ul className="hidden md:flex">
          <li className="py-2 px-4 hover:text-blue-500 transition duration-300">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-2 px-4 hover:text-blue-500 transition duration-300">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-2 px-4 hover:text-blue-500 transition duration-300">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-2 px-4 hover:text-blue-500 transition duration-300">
            <Link to="education" smooth={true} duration={500}>
              Education
            </Link>
          </li>
          <li className="py-2 px-4 hover:text-blue-500 transition duration-300">
            <Link to="certificates" smooth={true} duration={500}>
              Certifications
            </Link>
          </li>
          <li className="py-2 px-4 hover:text-blue-500 transition duration-300">
            <Link to="work" smooth={true} duration={500}>
              Projects
            </Link>
          </li>

          {/* shadow-[0_4px_30px_rgba(0,0,0,0.1)] */}
          <li className="backdrop-blur-md bg-white/20 border border-white/20 text-gray-900 px-6 py-2 rounded-xl shadow-[0_0_15px_rgba(0,255,150,0.9)] hover:bg-white/20 hover:scale-105 transition-all duration-300">
            <Popover>
              <PopoverTrigger>Let's Connect</PopoverTrigger>
              <PopoverContent
                className="mr-16 max-w-lg w-full bg-white/10 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg p-6 text-gray-900 transition-all duration-300 ease-in-out"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <h1>
                  <Popupbox />
                </h1>
              </PopoverContent>
            </Popover>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="education"
            smooth={true}
            duration={500}
          >
            Education
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link
            onClick={handleClick}
            to="certificates"
            smooth={true}
            duration={500}
          >
            Certifications
          </Link>
        </li>
        <li className="py-6 text-4xl border-4 border-white-600">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Let's Connect
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <ul className="hidden lg:flex fixed mt-52 flex-col top-[35%] left-0">
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
          <a
            target="blank"
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/shashank-verma7/"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
          <a
            target="blank"
            className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/shashankvrma"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
          <a
            target="blank"
            className="flex justify-between items-center w-full text-black"
            href="mailto:shashankvrma@gmail.com"
          >
            Email Me <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
          <a
            target="blank"
            className="flex justify-between items-center w-full text-gray-300"
            href="https://docs.google.com/document/d/1mklylYHgnJphCWNgkkwFyGTxIyK8s4jj6VK925kFdEs/edit?usp=sharing"
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
