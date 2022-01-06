import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderWrap>
      <h1>Where in the world</h1>
      <div className="logo">
        <h1>logo</h1>
        <h2>Dark Mode</h2>
      </div>
    </HeaderWrap>
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
    h2 {
      margin-left: 2rem;
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
    }
  }

  @media (min-width: 1440px) {
    padding: 2.3rem 8.1rem;
    h1 {
      font-size: 24px;
      line-height: 33px;
    }
    .logo {
      h2 {
        margin-left: 2rem;
        font-size: 12px;
      }
    }
  }
`;

export default Header;
