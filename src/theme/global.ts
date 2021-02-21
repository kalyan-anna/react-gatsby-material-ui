import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  html,
  body,
  #___gatsby {
    min-height: 100vh;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    margin: 0px;
    font: 1rem;
  }

  *, *:before, *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }
`;
