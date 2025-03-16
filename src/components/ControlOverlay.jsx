import React, { useContext } from 'react'
import { socialLinks } from "../constants";
import { SectionContext } from '../contexts/SectionContext';

const ControlOverlay = () => {
  const { toggleTheme, refs, hideHeroContent } = useContext(SectionContext);

  return (
    <div id="control-overlay">
      <span className={hideHeroContent ? 'fake-theme-toggle hidden' : 'fake-theme-toggle'} ref={refs.content} aria-label='Fake theme toggle' onClick={toggleTheme}></span>
    </div>
  );
};

export default ControlOverlay;