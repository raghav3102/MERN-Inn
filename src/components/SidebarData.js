import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About Us',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Our Services',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Developer',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Source Code',
    path: '/support',
    icon: <IoIcons.IoLogoGithub />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <IoIcons.IoIosLogIn />,
    cName: 'nav-text'
  },
];
