import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: 'Basis Grotesque Pro';
    box-sizing: border-box;
  }

  html,body,#root{
    min-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  }
`;
