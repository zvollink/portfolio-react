import React, { useContext } from 'react'
import { socialLinks } from "../constants";
import { SectionContext } from '../contexts/SectionContext';

const ControlOverlay = () => {
  const { toggleTheme } = useContext(SectionContext);

  return (
    <div id="control-overlay">
      <span className='fake-theme-toggle' aria-label='Fake theme toggle' onClick={toggleTheme}></span>
    </div>
  );
};

export default ControlOverlay;