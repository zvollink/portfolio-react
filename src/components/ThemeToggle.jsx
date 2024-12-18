import React, { useState, useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SectionContext } from '../contexts/SectionContext';


/**
 * Toggle switch that sets the site theme 'light' or 'dark'.
 */
export default function ThemeToggle() {
  const { hideHeroContent } = useContext(SectionContext);

  // Get the saved theme, if any.
  const savedTheme = localStorage.getItem('thezach-theme') || false;

  // Also grab any theme preference from the users operating system.
  const themePreference = window.matchMedia &&
                          window.matchMedia('(prefers-color-scheme: dark)')
                              .matches ? 'dark' : 'light';
  
  // Default to the saved theme, over the preference.
  const [siteTheme, setSiteTheme] = useState(savedTheme || themePreference);

  // Set initial theme based on the user's preference or default setting.
  useEffect(() => {
    setSiteTheme(savedTheme || themePreference);
    document.body.classList.toggle('dark-mode', siteTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = siteTheme === 'light' ? 'dark' : 'light';
    setSiteTheme(newTheme);
    document.body.classList.toggle('dark-mode', newTheme === 'dark');
    localStorage.setItem('thezach-theme', newTheme);
  };

  return (
    <label className={hideHeroContent ? 'switch hidden' : 'switch'}>
      <input onClick={toggleTheme} aria-label="Toggle theme" type="checkbox" id="toggleSwitch" defaultChecked={siteTheme === 'dark'} />
      <span className="slider"></span>
      <FontAwesomeIcon icon="sun" />
      <FontAwesomeIcon icon="moon" />
    </label>
  )
}