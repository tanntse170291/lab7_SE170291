// ThemeToggle.js
import React from 'react';

const ThemeToggle = ({ isDarkTheme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className={`theme-toggle ${isDarkTheme ? 'dark' : 'light'}`}>
      {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    </button>
  );
};

export default ThemeToggle;
