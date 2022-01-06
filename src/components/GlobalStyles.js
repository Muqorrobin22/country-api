import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    input {
      background: ${({ theme }) => theme.input};
      color: ${({ theme }) => theme.inputWhite};
    }
    transition: all 0.50s linear;
  }
  `;
