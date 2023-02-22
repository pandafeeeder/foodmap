import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   body {
     background-color: ${(props) => props.theme.background};
     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans",
       Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
     color: #e9e9eb;
     margin: 0;
     padding: ${"1rem"};
   }
`;
