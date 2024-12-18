import React, { useContext } from 'react';
import SocialLinks from './SocialLinks'
import { SectionContext } from '../../contexts/SectionContext';

export default function Content() {
  const { refs, hideHeroContent } = useContext(SectionContext);

  return (
    <span className={hideHeroContent ? 'content hidden' : 'content'} ref={refs.content}>
      <h2>Hi, I'm <span className="emphasize">Zach</span> Vollink</h2>
      <p>I'm a <span className="bold">Frontend Engineer</span> with a background in <span className="bold">Graphic Design</span>. I enjoy building pleasing relationships between applications and their users through <span className="bold">code.</span></p>
      <SocialLinks />
    </span>
  )
}