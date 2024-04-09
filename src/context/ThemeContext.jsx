import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // 切換淺色/深色主題
  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    console.log("clicked!");
    console.log(theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      <div className="themeContainer" data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
