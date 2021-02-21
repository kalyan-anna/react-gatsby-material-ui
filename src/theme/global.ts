import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  html,
  body,
  #___gatsby {
    min-height: 100vh;
    font-size: 1rem;
  }

  body {
    margin: 0px;
    font: 1rem;
  }
`;
