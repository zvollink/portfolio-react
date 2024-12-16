import React, { useEffect, useRef, useState, useContext } from 'react';
import { SectionContext } from '../contexts/SectionContext';

export default function NavBar({ links }) {
  const navbarRef = useRef(null);

  const { refs, heights } = useContext(SectionContext);
  const [sticky, setSticky] = useState(false);
  const [selectedSection, setSelectedSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.pageYOffset;
      const stickyHeight = window.innerHeight;
      const pageLimit = document.body.scrollHeight - window.innerHeight;

      const sectionHeights = [
        { id: 'intro', height: stickyHeight },
        { id: 'about-me', height: heights.aboutMe },
        { id: 'work', height: heights.work },
        { id: 'projects', height: heights.projects },
        { id: 'blogs', height: heights.blogs }
      ];

      // Check sticky logic.
      setSticky(yPos > stickyHeight);

      // Determine current section.
      let currentSection;
      let leftOver = yPos + (navbarRef.current?.clientHeight || 0);
      let tempSections = [...sectionHeights];

      while (leftOver > 0) {
        currentSection = tempSections[0]?.id;
        leftOver -= tempSections[0]?.height;
        tempSections.shift();
      }

      // Highlight appropriate link
      if (Math.floor(yPos) !== pageLimit && Math.round(yPos) !== pageLimit) {
        setSelectedSection(currentSection);
      } else {
        setSelectedSection('blogs'); // At the bottom of the page.
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  /**
   * Handles clicks on links within the navbar.
   * @param {Event} event The event object.
   * @param {String} linkRef The ref of the link in the nav to set up a click
   *     event for.
   */
  const linkClickHandler = (event, linkRef) => {
    event.preventDefault();

    console.log(linkRef)

    const yPos = window.pageYOffset;
    const divToScrollTo = refs[linkRef].current;
    const buffer = linkRef !== 'aboutMe' ? 80 : 0;
    const position = yPos + divToScrollTo.getBoundingClientRect().top - buffer;
    scrollUserTo(position);
  };


  /**
   * A shorthand function for the scrollTo method.
   * @param {Number} position The position to scroll to.
   * @param {String} opt_behavior The optional behavior of the
   *     scroll. This can be 'smooth', 'instant', or 'auto'.
   */
  const scrollUserTo = (position, opt_behavior) => {
    const behavior = opt_behavior || 'smooth';

    window.scrollTo({
        top: position,
        left: 0,
        behavior: behavior,
      });
  };

  return (
    <div
      id='navbar'
      ref={navbarRef}
      className={sticky ? 'sticky' : ''}
    >
      {Object.entries(links).map(([linkText, linkData]) => (
        <a
          key={linkData.id}
          data-id={linkData.id}
          className={selectedSection === linkData.id ? 'selected link' : 'link'}
          href={linkData.href}
          onClick={(e) => linkClickHandler(e, linkData.ref)}
        >
          {linkText}
        </a>
      ))}
    </div>
  );
}