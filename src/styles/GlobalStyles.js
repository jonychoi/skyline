import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import {darkBg, lightBg} from './index';

 
export const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Open Sans', 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.darkMode ? darkBg : lightBg};
  }
  .ff {
    font-family: 'Lexend Peta', sans-serif;
  }
  a {
    text-decoration: none;
  };
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(0,0,0,0); 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(100,100,100,0.5); 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(200,200,200,0.5); 
  }
`;
 
export default GlobalStyle;