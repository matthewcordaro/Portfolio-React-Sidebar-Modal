import React from 'react';
import {
  FaLinkedin,
  FaXTwitter,
  FaPizzaSlice,
  FaFolderOpen,
  FaWpforms,
} from "react-icons/fa6"
import {
  FaUserFriends,
  FaHome,
  FaCalendarAlt,
} from "react-icons/fa"
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: <FaCalendarAlt />,
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.x.com/matthewcordaro",
    icon: <FaXTwitter />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/matthewcordaro/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: "https://www.matthewcordaro.com/",
    icon: <FaPizzaSlice />,
  },
]
