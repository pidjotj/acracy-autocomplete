import { createGlobalStyle } from 'styled-components';

export const StyledGlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    margin: 0;
  }
  
  body {
    background-image: linear-gradient(black, grey, white);
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  * {
    font-family: Bebas Neue, sans-serif;
  }
`;