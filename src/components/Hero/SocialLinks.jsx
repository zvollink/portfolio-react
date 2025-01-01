import { socialLinks } from '../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialLinks() {
  return (
    <span id="social-links">
      {Object.values(socialLinks).map((link) => 
        <a href={link.href} target='_blank' title={link.title} rel='noopener noreferrer'>
          <FontAwesomeIcon icon={['fab', link.icon]} />
        </a>
      )}
    </span>
  )
}