import { useContext } from 'react'
import { SectionContext } from '../contexts/SectionContext';
import { socialLinks } from '../constants'

const ControlOverlay = () => {
  const { toggleTheme, refs, hideHeroContent } = useContext(SectionContext);

  return (
    <div id="control-overlay">
      <span
        className={hideHeroContent ? 'fake-theme-toggle hidden' : 'fake-theme-toggle'}
        ref={refs.toggle}
        aria-label='Theme toggle'
        onClick={toggleTheme}
      />
      <span className={hideHeroContent ? 'fake-social-links hidden' : 'fake-social-links'}>
        {Object.values(socialLinks).map((link) =>
          <button
            key={link.title}
            aria-label={link.title}
            onClick={() => window.open(link.href, '_blank', 'noopener,noreferrer')}
          ></button>
        )}
      </span>
    </div>
  );
};

export default ControlOverlay;