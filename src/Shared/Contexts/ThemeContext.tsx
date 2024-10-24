import isMobile from "Shared/Utils/Functions/Mobile";
import { ReactNode, useEffect } from "react";
import { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

type themeTypes = 'default' | 'dark';

interface ThemeContextType {
  theme: themeTypes;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Retrieve the theme from localStorage or use 'default' as a default value
  const initialTheme = localStorage.getItem('theme') as themeTypes || 'default';

  const [theme, setTheme] = useState<themeTypes>(initialTheme);

  // Update the theme in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.setAttribute("class", `theme theme--${theme} ${isMobile() ? 'Mobile' : ''}`)
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'default' : 'dark');

  const contextValue: ThemeContextType = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
  );
};
