import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About Us",
    path: "/aboutus",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Our Services",
    path: "/ourservices",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Developer",
    path: "/developer",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Source Code",
    path: "/sourecode",
    icon: <IoIcons.IoLogoGithub />,
    cName: "nav-text",
  },
  {
    title: "Book Now!",
    path: "/booking",
    icon: <FaIcons.FaUmbrellaBeach />,
    cName: "nav-text",
  },
  {
    title: "Register/Login",
    path: "/signup",
    icon: <IoIcons.IoIosLogIn />,
    cName: "nav-text",
  },
];
