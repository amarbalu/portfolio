import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";
import Resume from "./components/Resume"; // Import the Resume component
import Introduction from "./components/Introduction";
import {
  ThemeProvider as CustomThemeProvider,
  ThemeContext,
} from "./context/ThemeContext";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import About from "./components/About";
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    transition: background-color 0.3s, color 0.3s;
  }

  /* Additional global styles */
`;
const lightTheme = {
  backgroundColor: "#ffffff",
  color: "#333333",
  primaryColor: "#007bff",
  secondaryColor: "#555555",
  tertiaryColor: "#777777",
  cardBackground: "#f9f9f9",
  textColor: "#333333",
  accentColor: "#007bff",
  badgeTextColor: "#ffffff",
  awardBackground: "#fff4e6",
  awardBorderColor: "#ff8800",
};

const darkTheme = {
  backgroundColor: "#333333",
  color: "#ffffff",
  primaryColor: "#66b2ff",
  secondaryColor: "#cccccc",
  tertiaryColor: "#aaaaaa",
  cardBackground: "#444444",
  textColor: "#f9f9f9",
  accentColor: "#66b2ff",
  badgeTextColor: "#333333",
  awardBackground: "#4a4a4a",
  awardBorderColor: "#ffcc00",
};
function App() {
  const { theme } = useContext(ThemeContext);
  const selectedTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <div
        className="App"
        style={{
          backgroundColor: selectedTheme.backgroundColor,
          color: selectedTheme.color,
        }}
      >
        <Router basename="/portfolio">
          <Header />
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/about" element={<About />} /> {/* Resume Route */}
            <Route path="/resume" element={<Resume />} /> {/* Resume Route */}
            <Route path="*" element={<Introduction />} /> {/* 404 page */}
          </Routes>
          <Footer />
        </Router>
      </div>
    </StyledThemeProvider>
  );
}

export default function RootApp() {
  return (
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  );
}
