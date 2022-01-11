import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    p {
      font-size: 40px;
    }
  }
`;

function NotFound() {
  return (
    <Wrap>
      <p>Page not found</p>
    </Wrap>
  );
}

export default NotFound;
