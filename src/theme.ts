import { DefaultTheme } from "styled-components";

export type Theme = "dark" | "light";

const fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans",
Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`;

const light: DefaultTheme = {
  background: "#e8e8e8",
  color: "black",
  fontFamily,
  header: {
    background: "white",
    border: "#a8a8a8",
  },
  search: {
    background: "#e8e8e8",
    border: "#a8a8a8",
    color: "#a8a8a8",
    placeholder: "#a8a8a8",

    focus: {
      background: "#ffdbef",
      border: "#ff008b",
      color: "#b30062",
      placeholder: "#b30062",
    },
  },
  category: {
    background: "white",
    border: "#a8a8a8",
    color: "#717171",
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
  header: {
    background: "#23212f",
    border: "#625d72",
  },
  search: {
    background: "#0f0e17",
    border: "#635c72",
    color: "#c5bcd4",
    placeholder: "#c5bcd4",

    focus: {
      background: "#b8c8fa",
      border: "#5077f3",
      color: "#0a1c4c",
      placeholder: "#0a1c4c",
    },
  },
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
