import React, { useContext } from 'react'
import { SectionContext } from '../contexts/SectionContext';

const Waves = () => {
  const { toggleTheme } = useContext(SectionContext);

  return (
    <div id="waves">
      <span className='fake-theme-toggle' aria-label='Fake theme toggle' onClick={toggleTheme}></span>
    </div>
  );
}

export default Waves;