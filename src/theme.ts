export type Theme = "dark" | "light";

const fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans",
Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`;

export const themes = {
  light: {
    background: "white",
    fontFamily,
  },
  dark: {
    background: "#0e0f17",
    fontFamily,
  },
};
