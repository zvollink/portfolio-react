import React, { createContext, useState, useRef } from 'react';

export const SectionContext = createContext();

export const SectionProvider = ({ children }) => {
  const refs = {
    content: useRef(null),
    aboutMe: useRef(null),
    work: useRef(null),
    projects: useRef(null),
    blogs: useRef(null),
  };

  const [heights, setHeights] = useState({});

  const updateHeight = (section, height) => {
    setHeights((prev) => ({ ...prev, [section]: height }));
  };

  const [hideHeroContent, setHideHeroContent] = useState(false);

  const updateHideHeroContent = (hidden) => {
    setHideHeroContent(hidden);
  };

  return (
    <SectionContext.Provider value={{ refs, heights, updateHeight,
        hideHeroContent, updateHideHeroContent }}>
      {children}
    </SectionContext.Provider>
  );
};