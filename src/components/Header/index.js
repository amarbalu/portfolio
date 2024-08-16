import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { nav_menu_constants } from "../../constants";
import ThemeToggle from "./ThemeToggle";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 1rem 0;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  z-index: 1000;
  a {
    color: inherit;
    text-decoration: none;
  }
  span {
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
  }

  .menu-icon {
    display: none;
    font-size: 2rem;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: rotate(90deg);
    }
    & .open {
      transform: rotate(90deg);
    }
    &.close {
      transform: rotate(0deg);
    }
  }

  ul {
    list-style-type: none;
    display: flex;
    gap: 2rem;

    @media (max-width: 768px) {
      display: ${(props) => (props.open ? "flex" : "none")};
      position: absolute;
      top: 60px;
      right: 0;
      flex-direction: row;
      background-color: ${(props) => props.theme.backgroundColor};
      color: ${(props) => props.theme.color};
      width: 100%;
      padding: 1rem 0;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      text-align: right;
    }
  }

  li {
    cursor: pointer;

    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        color: ${(props) => props.theme.colorHover};
      }
    }
  }

  @media (max-width: 768px) {
    .menu-icon {
      display: block;
    }
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu on link click
  };

  return (
    <NavBar open={menuOpen}>
      <Link to={`/`}>
        <span>BA</span>
      </Link>
      <div
        className={`menu-icon ${menuOpen ? "open" : "close"}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        &#9776;
      </div>
      <ul>
        {nav_menu_constants.map((value) =>
          value.toLowerCase() === "blogs" ? (
            <li key={value} onClick={handleLinkClick}>
              <a
                href="https://medium.com/@inboxamarbalu"
                target="_blank"
                rel="noopener noreferrer"
              >
                {value}
              </a>
            </li>
          ) : value.toLowerCase() === "publication" ? (
            <li key={value} onClick={handleLinkClick}>
              <a
                href="https://medium.com/thefreshwrites"
                target="_blank"
                rel="noopener noreferrer"
              >
                {value}
              </a>
            </li>
          ) : (
            <li key={value} onClick={handleLinkClick}>
              <Link to={`/${value.toLowerCase()}`}>{value}</Link>
            </li>
          )
        )}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </NavBar>
  );
};

export default Header;
