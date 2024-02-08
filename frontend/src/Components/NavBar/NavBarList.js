import { IoHomeOutline } from "react-icons/io5";
import { MdContactPhone } from "react-icons/md";
import { FaJava } from "react-icons/fa6";
import { BsFilePost } from "react-icons/bs";

const navbarItems = [
    {
      title: "HomePage",
      link: "/",
      icon: <IoHomeOutline/>
    },
    {
      title: "Posts",
      link: "/posts",
      icon: <BsFilePost />
    },
    {
      title: "Contact Us",
      link: "/contact",
      icon: <MdContactPhone/>
    },
    {
      title: "Developers",
      link: "/developers",
      icon: <FaJava/>
    },
  ];
  
  export default navbarItems;