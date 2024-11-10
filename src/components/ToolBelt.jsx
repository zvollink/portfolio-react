export default class ToolBeltManager {
  constructor() {

    /**
     * A hash of my skills to include in the tool belt.
     * @type {Object}
     */
    this.tools = {
      'javascript': { title: 'JavaScript', icon: '' },
      'html': { title: 'HTML', icon: '' },
      'css': { title: 'CSS', icon: '' },
      'sass': { title: 'Sass', icon: '' },
      'tailwind': { title: 'Tailwind CSS', icon: '' },
      'jquery': { title: 'jQuery', icon: '' },
      'typescript': { title: 'TypeScript', icon: '' },
      'python': { title: 'Python', icon: '' },
      'php': { title: 'PHP', icon: '' },
      'react': { title: 'React', icon: '' },
      'reactnative': { title: 'React Native', icon: '' },
      'ajax': { title: 'AJAX', icon: '' },
      'nodejs': { title: 'Node.js', icon: '' },
      'npm': { title: 'npm', icon: '' },
      'ejs': { title: 'EJS', icon: '' },
      'nunjucks': { title: 'Nunjucks', icon: '' },
      'firebase': { title: 'Firebase', icon: '' },
      'wordpress': { title: 'WordPress', icon: '' },
      'vercel': { title: 'Vercel', icon: '' },
      'git': { title: 'Git', icon: '' },
      'vsc': { title: 'Visual Studio Code', icon: '' },
      'warp': { title: 'Warp', icon: '' },
      'uiux': { title: 'UI/UX', icon: '' },
      'figma': { title: 'Figma', icon: '' },
      'adobecc': { title: 'Adobe Creative Cloud', icon: '' },
      'api': { title: 'API Integration', icon: '' },
      'unittest': { title: 'Unit Testing', icon: '' },
      'googlecloudfunctions': { title: 'Google Cloud Functions', icon: '' }
    };

    /**
     * An on-screen tool belt to showcase my skills.
     */
    this.toolBelt = document.createElement('div');
    this.toolBelt.id = 'tool-belt';

    for (let tool in this.tools) {
      let toolSpan = document.createElement('span');
      toolSpan.classList.add('tool');
      toolSpan.innerText = this.tools[tool].title;
      this.toolBelt.append(toolSpan);
    }

    const toolsSection = document.getElementById('tools');
    if (toolsSection) {
      const toolsContent = toolsSection.getElementsByClassName('experience')[0];
      toolsContent.replaceWith(this.toolBelt);
    }
  }
}