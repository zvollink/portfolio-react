import React, { useContext, useEffect } from 'react';
import { SectionContext } from '../contexts/SectionContext';

const Work = () => {
  const { refs, updateHeight } = useContext(SectionContext);

  useEffect(() => {
    if (refs.work.current) {
      updateHeight('work', refs.work.current.clientHeight + refs.work.current.clientHeight * 0.5);
    }
  }, []);

  return (
    <div id="work" className="resume-section" ref={refs.work}>
      <h4>Work</h4>

      <span className="experience" style={{ paddingTop: 0 }}>
        <span className="title">Bitsbox</span>
        <span className="caption">Frontend Engineer &bull; November 2016 - July 2024 &bull; Boulder, CO</span>
        <ul>
          <li><span className="bold">Bridged the gap between design and development</span>, translating wireframes into user-friendly and functional web pages in collaboration with designers, marketing, and operation leads.</li>
          <li><span className="bold">Crafted responsive and accessible UIs</span> for Bitsbox and two of their key partners, STEMscopes and Highlights Kids. Leveraging HTML5, CSS3, and JavaScript, I ensured a seamless experience for over 1.5 million users across any device, including 500k Bitsbox users, 50k STEMscopes students, and more than one million Highlights subscribers.</li>
          <li><span className="bold">Delivered high-performing web experiences</span> utilizing Google Cloud Functions. Key achievements include automating cancellations, saving the support team 30 seconds per cancellation (~1200 man hours per year), accelerating shipment processing, dynamically serving social and SEO meta tags for Bitsbox user pages, and managing users' custom images.</li>
          <li><span className="bold">Led project to enhance user experience and system efficiency</span> by merging child coding accounts with adult subscription accounts on Amazon and Cratejoy. This improved the parents' user experience dramatically by giving them more control over their kids' coding accounts, letting them have multiple child accounts under the umbrella parental account, and enabling a password reset option for kids accounts that goes to the parents email.</li>
          <li><span className="bold">Managed data flows and external APIs</span> such as Google's Place Autocomplete API, to facilitate address completion at checkout. Oversaw data flow between front-end and back-end systems through data-manager scripts and Google Cloud functions.</li>
          <li><span className="bold">Championed code quality</span> by conducting regular code reviews, maintaining high coding standards, and remaining passionately dedicated to continuous learning, seeking out emerging technologies, best practices, and industry trends.</li>
        </ul>
      </span>

      <span className="experience">
        <span className="title">CU*Answers</span>
        <span className="caption">GUI Developer &bull; May 2014 - August 2016 &bull; Grand Rapids, MI</span>
        <ul>
          <li><span className="bold">Responsible for developing and maintaining GUI panels</span> for core and custom screens, as well as developing XML scripts and program code to extend the base functionality of the company's core software product.</li>
          <li><span className="bold">Worked with interdisciplinary teams</span> to assess client needs, determine project requirements, and iteratively develop the GUI to meet those specifications.</li>
        </ul>
      </span>

    </div>
  );
};

export default Work;