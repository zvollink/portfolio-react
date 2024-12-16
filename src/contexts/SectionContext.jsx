import React, { createContext, useState, useRef } from 'react';

export const SectionContext = createContext();

export const SectionProvider = ({ children }) => {
  const refs = {
    aboutMe: useRef(null),
    work: useRef(null),
    projects: useRef(null),
    blogs: useRef(null),
  };

  const [heights, setHeights] = useState({});

  const updateHeight = (section, height) => {
    setHeights((prev) => ({ ...prev, [section]: height }));
  };

  return (
    <SectionContext.Provider value={{ refs, heights, updateHeight }}>
      {children}
    </SectionContext.Provider>
  );
};