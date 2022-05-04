import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { Props, ThemeContextType } from "../types/themeType";
const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<string>("dark");
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
