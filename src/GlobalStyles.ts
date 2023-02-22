import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   body {
     background-color: ${(props) => props.theme.background};
     font-family: ${(props) => props.theme.fontFamily};
     color: #e9e9eb;
     margin: 0;
   }
`;
