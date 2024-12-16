import React, { useContext, useEffect } from 'react';
import { SectionContext } from '../contexts/SectionContext';
import BlogBitsboxWeather from '../assets/blog-weather-app-sm.jpg'
import BlogGoodbyeScrolling from '../assets/blog-search-feature-sm.jpg'

const Blogs = () => {
  const { refs, updateHeight } = useContext(SectionContext);

  useEffect(() => {
    if (refs.blogs.current) {
      updateHeight('blogs', refs.blogs.current.clientHeight * 2);
    }
  }, []);

  return (
    <div id="blogs" className="resume-section" ref={refs.blogs}>
      <h4>Blogs</h4>

      <span className="experience">
        <a href="https://bitsbox.com/blog/bitsbox-builds-a-weather-app" target="_blank" rel='noreferrer' className="blog-card">
          <div className="blog-card-image-container">
          <img alt="Blog article photo" src={BlogBitsboxWeather} className="fit" />
          </div>Bitsbox Builds a Weather App!
        </a>
        <a href="https://bitsbox.com/blog/goodbye-scrolling-hello-search" target="_blank" rel="noreferrer" className="blog-card">
          <div className="blog-card-image-container">
            <img alt="Blog article photo" src={BlogGoodbyeScrolling} className="fit" />
          </div>Goodbye scrolling (and scrolling). Helloooo SEARCH!
        </a>
      </span>
    </div>
  );
};

export default Blogs;