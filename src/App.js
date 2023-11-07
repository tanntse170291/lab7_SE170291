import React from 'react';
import './component/Films.css';
import Films from './component/Films';
import ThemeToggle from './component/ThemeToggle'
import useThemeToggle from './component/useThemeToggle';
import './App.css'



function App() {
  const { isDarkTheme, toggleTheme } = useThemeToggle();
 
  return (
    <div className={`App ${isDarkTheme ? 'dark' : 'light'}`}>
      <header className="App-header">
        <h1>My Film Collection</h1>
      
        <ThemeToggle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      </header>
     <Films/>
     
     
    </div>
  );
}

export default App;
