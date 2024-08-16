import React, { useContext } from "react";
import styled from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";

// Styled button component
const ToggleButton = styled.span`
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  outline: none;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ToggleButton
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <FaMoon size={24} /> : <FaSun size={24} />}
    </ToggleButton>
  );
};

export default ThemeToggle;
