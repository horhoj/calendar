import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: DevCoder, monospace;
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
    line-height: 1.3rem;
    //transition: all .3s ease;
  }
`;
