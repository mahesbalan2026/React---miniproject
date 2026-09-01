import React, { useState } from "react";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`theme-container ${theme}`}>
      <button onClick={toggleTheme}>
        Toggle to {theme === "dark" ? "light" : "dark"} theme
      </button>
    </div>
  );
}

export default App;
