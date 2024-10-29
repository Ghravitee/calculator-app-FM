import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const themes = ["theme1", "theme2", "theme3"];

  // Initialize theme from localStorage, or default to themes[0]
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || themes[0]
  );

  // Update localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Function to toggle themes
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      // Get the index of the current theme
      const currentIndex = themes.indexOf(prevTheme);
      // Calculate the next index, cycling back to the first theme if at the end
      const nextIndex = (currentIndex + 1) % themes.length;
      return themes[nextIndex];
    });
  };
  return (
    <AuthContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
