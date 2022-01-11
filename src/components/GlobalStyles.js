import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    input {
      background: ${({ theme }) => theme.input};
      color: ${({ theme }) => theme.inputWhite};
    }
    .countries {
      div {
        background-color: ${({ theme }) => theme.backgroundBlack};
        .info {
          h1 , p{
            color: ${({ theme }) => theme.inputWhite};
          }
        }
      }
    }
    .detail-card {
      .info {
          h1 , p{
            color: ${({ theme }) => theme.inputWhite};
          }
        }
        .back {
          background: ${({ theme }) => theme.input};
        }
    }
    transition: all 0.50s linear;
  }
  `;
