import { createContext } from "react";

const ThemeContextValue: String[] = ["light", "dark", "pink"];

const ThemeContext = createContext(ThemeContextValue[0]);

export { ThemeContext, ThemeContextValue };
