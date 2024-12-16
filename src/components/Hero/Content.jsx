import SocialLinks from './SocialLinks'

export default function Content() {
  return (
    <span className='content'>
      <h2>Hi, I'm <span className="emphasize">Zach</span> Vollink</h2>
      <p>I'm a <span className="bold">Frontend Engineer</span> with a background in <span className="bold">Graphic Design</span>. I enjoy building pleasing relationships between applications and their users through <span className="bold">code.</span></p>
      <SocialLinks />
    </span>
  )
}