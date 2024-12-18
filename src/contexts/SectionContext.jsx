import React, { createContext, useState, useRef } from 'react';

export const SectionContext = createContext();

export const SectionProvider = ({ children }) => {

  // DOM elements to reference throughout the app.
  const refs = {
    toggle: useRef(null),
    content: useRef(null),
    aboutMe: useRef(null),
    work: useRef(null),
    projects: useRef(null),
    blogs: useRef(null),
  };

  // Keeping track of section heights for navigation purposes.
  const [heights, setHeights] = useState({});
  const updateHeight = (section, height) => {
    setHeights((prev) => ({ ...prev, [section]: height }));
  };

  // Whether to hide the hero content.
  const [hideHeroContent, setHideHeroContent] = useState(false);
  const updateHideHeroContent = (hidden) => {
    setHideHeroContent(hidden);
  };

  // The current theme.
  const savedTheme = localStorage.getItem('thezach-theme');
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const initialTheme = savedTheme || systemPreference;
  const [siteTheme, setSiteTheme] = useState(initialTheme);
  const toggleTheme = () => {
    setSiteTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('thezach-theme', newTheme);
      return newTheme;
    });
  };

  return (
    <SectionContext.Provider value={{ refs, heights, updateHeight,
        hideHeroContent, updateHideHeroContent, siteTheme, toggleTheme }}>
      {children}
    </SectionContext.Provider>
  );
};