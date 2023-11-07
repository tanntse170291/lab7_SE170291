import { useState } from 'react';

const useThemeToggle = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  return { isDarkTheme, toggleTheme };
};

export default useThemeToggle;
