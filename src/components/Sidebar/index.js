import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import logo from "../../logo.png";
import { NavLink } from "react-router-dom";
import { links, socialLinks } from "./links";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <SidebarStyled className={`${isSidebarOpen ? "open-sidebar" : ""}`}>
      <div className="sidebar">
        <header className="d-flex justify-content-between align-items-center p-4">
          <img src={logo} alt="" />
          <div className="close-btn text-danger h3" onClick={closeSidebar}>
            <FaTimes />
          </div>
        </header>
        <main className="mt-5 py-4 w-full">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <NavLink
                key={id}
                to={url}
                className={({ isActive }) =>
                  isActive ? "link bg-warning" : "link"
                }
              >
                {text}
              </NavLink>
            );
          })}
        </main>
        <div className="socials d-flex justify-content-center align-items-center">
          {socialLinks.map((link) => {
            const { id, url, icon } = link;
            return (
              <a href={url} key={id} className='d-inline-block mx-2 h2 text-black'>
                {icon}
              </a>
            );
          })}
        </div>
      </div>
    </SidebarStyled>
  );
};

const SidebarStyled = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  visibility: hidden;
  z-index: 1000;

  .sidebar {
    width: 350px;
    background-color: white;
    height: 100%;
    transform: translateX(-100%);
    transition: all 0.5s;
    position: relative;

    z-index: 100;
    .link {
      display: block;
      font-size: 1.2rem;
      padding: 1rem;
      color: black;
      font-weight: bold;
      transition: 0.3s;
      :hover {
        background-color: #fbb710;
      }
    }
    .socials {
      position: absolute;
      bottom: 2rem;
      left: 0;
      width: 100%;
    }
  }
  &.open-sidebar {
    visibility: visible;
    .sidebar {
      transform: translateX(0);
    }
  }
  @media screen and (max-width: 400px) {
    .sidebar {
      width: 100vw;
    }
  }
`;

export default Sidebar;
