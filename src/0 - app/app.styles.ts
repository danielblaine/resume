import { createGlobalStyle } from 'styled-components';

// COLORS
// #d7d7d7 - GREY
// #e6e6e6 - LIGHT GREY
// #373d48 - BLUE
// #343434 - DARK BLUE

export const AppStyles = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  * {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    border: none;
    font-size: 14px;
  }
`;
