"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export type Theme = "dark" | "light";

interface ThemeData {
  setTheme: Dispatch<SetStateAction<Theme>>;
  theme: Theme;
  getTheme: () => ThemeColors;
}

type ThemeItem = {
  backgroundColor: string;
  textColor: string;
};

type ThemeColors = {
  primary: ThemeItem;
  secondary: ThemeItem;
  ternary: ThemeItem;
  button: ThemeItem;
};

const ThemeContext = createContext<ThemeData | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("dark");

  const darkTheme: ThemeColors = {
    primary: { backgroundColor: "#171717", textColor: "#f5f5f5" },
    secondary: { backgroundColor: "#262626", textColor: "#e5e5e5" },
    ternary: { backgroundColor: "#404040", textColor: "#d4d4d4" },
    button: { backgroundColor: "#525252", textColor: "white" },
  };
  const lightTheme: ThemeColors = {
    primary: { backgroundColor: "#e5e5e5", textColor: "#171717" },
    secondary: { backgroundColor: "#e5e5e5", textColor: "#262626" },
    ternary: { backgroundColor: "#d4d4d4", textColor: "#404040" },
    button: { backgroundColor: "#a3a3a3", textColor: "black" },
  };

  function getTheme() {
    let themeObj: ThemeColors = {
      primary: { backgroundColor: "", textColor: "" },
      secondary: { backgroundColor: "", textColor: "" },
      ternary: { backgroundColor: "", textColor: "" },
      button: { backgroundColor: "", textColor: "" },
    };
    if (theme === "dark") {
      themeObj = darkTheme;
    } else if (theme === "light") {
      themeObj = lightTheme;
    }
    return themeObj;
  }

  const themeData: ThemeData = {
    setTheme,
    theme,
    getTheme,
  };

  return (
    <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>
  );
};
