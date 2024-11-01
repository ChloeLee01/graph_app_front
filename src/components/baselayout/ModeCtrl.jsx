import React, { useState } from "react";
import { Icons } from "../../assets/icons";

const ModeCtrl = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  }

  return (
    <button onClick={toggleTheme}>
      <img src={darkMode ? Icons.SunFill : Icons.MoonFill} alt="" className="w-5 h-5 dark:invert-[1] dark:brightness-[100%]"/>
    </button>
  );
};

export default ModeCtrl;
