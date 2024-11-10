import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', isDarkMode);
  };

  return (
    <label className="switch">
      <input onClick={toggleTheme} aria-label="Toggle theme" type="checkbox" id="toggleSwitch" checked/>
      <span className="slider"></span>
      <FontAwesomeIcon icon="sun" />
      <FontAwesomeIcon icon="moon" />
    </label>
  )
}