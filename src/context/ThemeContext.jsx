import { createContext, useContext, useState, useEffect } from "react";

// ✅ Create Theme Context
const ThemeContext = createContext();

// ✅ Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ✅ Custom Hook to Use Theme
export const useTheme = () => {
  return useContext(ThemeContext);
};

export default ThemeContext;
