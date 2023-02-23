import { DefaultTheme } from "styled-components";

export type Theme = "dark" | "light";

const fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans",
Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`;

const light: DefaultTheme = {
  background: "#e8e8e8",
  color: "black",
  fontFamily,
  category: {
    background: "white",
    border: "#a8a8a8",
    color: "#a8a8a8",
  },
  enjoy: {
    background: "#b7f7d5",
    border: "#7eb194",
    color: "#17653b",
    measurement: {
      background: "#7bc69c",
      border: "#447f5c",
      color: "#1c4f32",
    },
  },
  avoid: {
    background: "#f8bac6",
    border: "#974e5d",
    color: "#962445",
    measurement: {
      background: "#d68595",
      border: "#7c3b48",
      color: "#63152c",
    },
  },
  notes: {
    background: "#f8efba",
    border: "#968f15",
    color: "#a86724",
  },
};

const dark: DefaultTheme = {
  background: "#0e0f17",
  color: "#e8e8e8",
  fontFamily,
  category: {
    background: "#23212f",
    border: "#625d72",
    color: "#d9d6e1",
  },
  enjoy: {
    background: "#05160d",
    border: "#2caf68",
    color: "#3aff95",
    measurement: {
      background: "#0a4123",
      border: "#2e6e48",
      color: "#3aff95",
    },
  },
  avoid: {
    background: "#16050a",
    border: "#af2c52",
    color: "#ff4e82",
    measurement: {
      background: "#410a19",
      border: "#6f1a31",
      color: "#ff4e82",
    },
  },
  notes: {
    background: "#161206",
    border: "#b19536",
    color: "#ffd34b",
  },
};
export const themes = {
  light,
  dark,
};
