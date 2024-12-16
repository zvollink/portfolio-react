import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialLinks() {
  return (
    <span id="social-links">
      <a href="https://www.linkedin.com/in/zachvollink/" target="_blank" title="LinkedIn" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </a>
      <a href="https://github.com/zvollink" target="_blank" title="Github" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'github']} />
      </a>
      <a href="https://www.instagram.com/zachvollink/" target="_blank" title="Instagram" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'instagram']} />
      </a>
      <a href="https://airbnb.com/h/cozy-cottage-in-lake-city" target="_blank" title="Stay at our cottage!" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'airbnb']} />
      </a>
      <a href="https://open.spotify.com/user/1243407866?si=e3e016b095754570" target="_blank" title="Spotify Profile" rel="noopener noreferrer">
        <FontAwesomeIcon icon={['fab', 'spotify']} />
      </a>
    </span>
  )
}