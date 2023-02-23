import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   body {
     background-color: ${(props) => props.theme.background};
     font-family: ${(props) => props.theme.fontFamily};
     color: ${(props) => props.theme.color};
     margin: 0;
   }
`;
