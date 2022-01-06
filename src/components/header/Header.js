import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../GlobalStyles";
import { lightTheme, darkTheme } from "../Theme";
import { ReactComponent as Moon } from "../../assets/icon-moon.svg";
import { ReactComponent as Sun } from "../../assets/icon-sun.svg";

function Header() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <HeaderWrap theme={theme}>
        <h1>Where in the world</h1>
        <div className="logo">
          {theme === "light" ? (
            <Moon onClick={themeToggler} />
          ) : (
            <Sun onClick={themeToggler} />
          )}
          <h2>{theme === "light" ? "Dark " : "Light "} Mode</h2>
        </div>
      </HeaderWrap>
    </ThemeProvider>
  );
}

const HeaderWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.9rem 1.5rem;
  border-bottom: 1px solid grey;
  h1 {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 33px;
  }

  .logo {
    display: flex;
    align-items: center;
    background-color: #2b3844;
    padding: 0.4rem 1rem;
    border-radius: 30px;
    color: white;
    margin-left: 2rem;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    h2 {
      font-size: 10px;
      margin-left: 1rem;
    }
  }

  @media (min-width: 1440px) {
    padding: 2.3rem 8.1rem;
    h1 {
      font-size: 24px;
      line-height: 33px;
    }
    .logo {
      border-radius: 40px;
      padding: 1rem 2rem;
      h2 {
        margin-left: 2rem;
        font-size: 15px;
      }
    }
  }
`;

export default Header;
