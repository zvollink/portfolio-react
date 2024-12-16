import React, { useContext, useEffect } from 'react';
import { SectionContext } from '../contexts/SectionContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ZachHeadshot from '../assets/zach-vollink-headshot.png'

const AboutMe = () => {
  const { refs, updateHeight } = useContext(SectionContext);

  useEffect(() => {
    if (refs.aboutMe.current) {
      updateHeight('aboutMe', refs.aboutMe.current.clientHeight);
    }
  }, []);

  return (
    <div id="about-me" ref={refs.aboutMe}>
      <div className="portrait">
          <img src={ZachHeadshot} title="Portrait of Me! (Zach)" alt='Portrait of Zach Vollink' />
      </div>
      <div className="details">

        <h3>About Me</h3>
        <p>Originally hailing from the delightful streets of Grand Rapids, Michigan &#127750;, I've also spent six wild years in the Rocky Mountain state&mdash;Colorado! &#127956; There, I honed my skills while teaching kids to code and soaking up the sun. &#x2600;</p>
        <p>When I'm not crafting pixel-perfect interfaces, you'll find me mountain biking down rugged trails &#128693;, gaming with friends online &#127918;, or disc golfing with the fam &#129359;. While Frontend work happens to be where I shine, disc golf is.. well, not. &#128517;</p>

        <h3>Contact Details</h3>
        <address className="contact-info">
          <p>Zach Vollink</p>
          <p>Grand Rapids, MI</p>
          <p>
            <a href="tel:616-550-2266" title="Call me up or shoot me a text!">616-550-2266</a>
          </p>
          <p>
            <a href="mailto:zvollink@gmail.com" title="Send me an email!">zvollink@gmail.com</a>
          </p>
        </address>

        <form id="download-resume-form" method="get" action="/assets/resume/Zach Vollink Resume 2024.pdf">
          <button id="download-resume-button" type="submit" title="Click to download my resume!">
            <FontAwesomeIcon icon={['fas', 'download']} />
            Download Resume
          </button>
        </form>
      </div>
    </div>
  );
};

export default AboutMe;