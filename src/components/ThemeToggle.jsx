import React, { useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SectionContext } from '../contexts/SectionContext';


/**
 * Toggle switch that sets the site theme 'light' or 'dark'.
 */
export default function ThemeToggle() {
  const { refs, hideHeroContent, siteTheme, toggleTheme } = useContext(SectionContext);

  // Sync the theme with the user's preferences or saved setting during mount.
  useEffect(() => {
    const savedTheme = localStorage.getItem('thezach-theme');
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemPreference;

    // Only update if the theme isn't already set.
    if (siteTheme !== initialTheme) {
      toggleTheme(initialTheme);
    }

    // Sync the body's class with the theme.
    document.body.classList.toggle('dark-mode', initialTheme === 'dark');
  }, [siteTheme, toggleTheme]);

  return (
    <label className={hideHeroContent ? 'switch hidden' : 'switch'} ref={refs.toggle}>
      <input
        aria-label="Toggle theme"
        type="checkbox"
        id="toggleSwitch"
        checked={siteTheme === 'dark'}
        readOnly
      />
      <span className="slider"></span>
      <FontAwesomeIcon icon="sun" />
      <FontAwesomeIcon icon="moon" />
    </label>
  );
}