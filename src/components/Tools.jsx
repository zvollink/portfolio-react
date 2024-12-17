    /**
     * A hash of my skills to include in the tool belt.
     * @type {Object}
     */
    const tools = {
      'javascript': { title: 'JavaScript', icon: '' },
      'jquery': { title: 'jQuery', icon: '' },
      'react': { title: 'React', icon: '' },
      'reactnative': { title: 'React Native', icon: '' },
      'html': { title: 'HTML', icon: '' },
      'css': { title: 'CSS', icon: '' },
      'sass': { title: 'Sass', icon: '' },
      'tailwind': { title: 'Tailwind CSS', icon: '' },
      'python': { title: 'Python', icon: '' },
      'php': { title: 'PHP', icon: '' },
      'ajax': { title: 'AJAX', icon: '' },
      'nodejs': { title: 'Node.js', icon: '' },
      'bash': { title: 'Bash/shell', icon: '' },
      'npm': { title: 'npm', icon: '' },
      'ejs': { title: 'EJS', icon: '' },
      'nunjucks': { title: 'Nunjucks', icon: '' },
      'api': { title: 'API Integration', icon: '' },
      'unittest': { title: 'Unit Testing', icon: '' },
      'googlecloudfunctions': { title: 'Google Cloud Functions', icon: '' },
      'vercel': { title: 'Vercel', icon: '' },
      'firebase': { title: 'Firebase', icon: '' },
      'wordpress': { title: 'WordPress', icon: '' },
      'git': { title: 'Git', icon: '' },
      'uiux': { title: 'UI/UX', icon: '' },
      'figma': { title: 'Figma', icon: '' },
      'adobecc': { title: 'Adobe Creative Cloud', icon: '' }
    };

/**
 * An on-screen tool belt to showcase my skills.
 */
const Tools = () => {
  return (
    <div id="tools" className="resume-section">
      <h4>Tools</h4>

      <span className="experience">
        <div id='tool-belt'>
          {Object.values(tools).map((toolInfo) =>
            <span className="tool">{toolInfo.title}</span>
          )}
        </div>
      </span>
    </div>
  );
};

export default Tools;