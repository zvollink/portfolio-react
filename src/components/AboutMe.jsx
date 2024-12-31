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
      <div className="details">

        <h3>About Me</h3>
        <p>Originally hailing from the delightful streets of Grand Rapids, Michigan, I've also spent six wild years in the Rocky Mountain state&mdash;Colorado! There, I honed my skills while teaching kids to code and soaking up the sun.</p>
        <p>When I'm not crafting pixel-perfect interfaces, you'll find me mountain biking down rugged trails, gaming with friends online, or disc golfing with the fam. While Frontend work happens to be where I shine, disc golf is.. well, not.</p>

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

        <span id="download-resume-container">
          <a
            id="download-resume-button"
            href="/assets/resume/Zach_Vollink_Resume_2024.pdf"
            download="Zach_Vollink_Resume_2024.pdf"
            title="Click to download my resume!"
          >
            <FontAwesomeIcon icon={['fas', 'download']} />
            Download Resume
          </a>
        </span>
      </div>
      <div className="portrait">
          <img src={ZachHeadshot} title="Portrait of Me! (Zach)" alt='Portrait of Zach Vollink' />
      </div>
    </div>
  );
};

export default AboutMe;