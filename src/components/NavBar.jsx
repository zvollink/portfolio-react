export default class NavBarManager {
  constructor() {

    if (window.location.pathname !== '/' &&
        window.location.pathname !== '/index.html') {
      return;
    }

    /**
     * Navigation links.
     * @type {Object}
     */
    this.links = {
      'About': { id: 'about-me', href: '#about-me' },
      'Work': { id: 'work', href: '#work' },
      'Projects': { id: 'projects', href: '#projects' },
      'Blogs': { id: 'blogs', href: '#blogs' }
    }

    /**
     * A navbar to display at the top of the page for users to navigate
     * the site from.
     */
    this.navbar = document.createElement('div');
    this.navbar.id = 'navbar';

    for (let link in this.links) {
      let linkTag = document.createElement('a');
      linkTag.dataset.id = this.links[link].id;
      linkTag.classList.add('link');
      linkTag.innerText = link;
      //linkTag.href = this.links[link].href;
      this.navbar.append(linkTag);
    }

    const aboutSection = document.getElementById('about-me');
    document.body.insertBefore(this.navbar, aboutSection);

    this.activateLinks();
  }


  /**
   * Handles attaching the navigation to the top of the page as the user
   * scrolls past it.
   * 
   * Designed to be called via scroll event handler:
   *   window.addEventListener('scroll', navBarManager.stickyNavBar);
   */
  stickyNavBar() {
    const doc = window.document;
    let yPos = window.pageYOffset;
    let stickyHeight = window.innerHeight;
    const pageLimit = document.body.scrollHeight - window.innerHeight;

    // Heights of all the various sections.
    const aboutHeight = doc.getElementById('about-me').clientHeight;

    // Shortening the tools section here gives more room to the projects
    // section, and in turn allows the blog section to start sooner.
    const workHeight = doc.getElementById('work').clientHeight +
                       doc.getElementById('education').clientHeight +
                       doc.getElementById('tools').clientHeight * .5;
    const projectsHeight = doc.getElementById('projects').clientHeight;

    // Doubling the blog section height keeps the Blog nav link selected as
    // users scroll beyond the bottom of the page on mobile.
    const blogsHeight = doc.getElementById('blogs').clientHeight * 2;

    // An array of section heights and ids to help us figure out where
    // on the page we are.
    let sectionHeights = [
      { id: 'intro', height: stickyHeight },
      { id: 'about-me', height: aboutHeight },
      { id: 'work', height: workHeight },
      { id: 'projects', height: projectsHeight },
      { id: 'blogs', height: blogsHeight }
    ];

    // Attach/detach navbar.
    if (yPos > stickyHeight && !this.navbar.classList.contains('sticky')) {
      this.navbar.classList.add('sticky');
    } else if (yPos < stickyHeight && this.navbar.classList.contains('sticky')) {
      this.navbar.classList.remove('sticky');
    }

    // Highlight links according to section we're currently in.
    let currentSection;
    let leftOver = yPos + this.navbar.clientHeight;
    while (leftOver > 0) {
      currentSection = sectionHeights[0]?.id;
      leftOver -= sectionHeights[0]?.height;
      sectionHeights.shift();
    }

    const navLinks = Array.from(this.navbar.children);
    for (var link of navLinks) {
      link.classList.remove('selected');
      if (Math.floor(yPos) !== pageLimit &&
          Math.round(yPos) !== pageLimit) {
        link.dataset.id === currentSection && link.classList.add('selected');
      } else {

        // If we're at the bottom of the page, select the Blogs link.
        navLinks[navLinks.length - 1].classList.add('selected');
      }
    }
  }


  /**
   * Sets up the links within the navbar to scroll to their respective spots
   * on the page when selected.
   */
  activateLinks () {
    const navLinks = Array.from(this.navbar.children);
    for (var link of navLinks) {
      link.addEventListener('click', this.linkClickHandler.bind(this, link));
    }
  }


  /**
   * Handles clicks on links within the navbar.
   * @param {HTMLElement} link The link in the nav to set up a click event for.
   */
  linkClickHandler (link) {
    const yPos = window.pageYOffset;
    const linkId = link.dataset.id;
    const divToScrollTo = document.getElementById(linkId);
    const buffer = linkId !== 'about-me' ? 80 : 0;
    const position = yPos + divToScrollTo.getBoundingClientRect().top - buffer;
    this.scrollUserTo(position);
  }


  /**
   * A shorthand function for the scrollTo method.
   * @param {Number} position The position to scroll to.
   * @param {String} opt_behavior The optional behavior of the
   *     scroll. This can be 'smooth', 'instant', or 'auto'.
   */
  scrollUserTo(position, opt_behavior) {
    const behavior = opt_behavior || 'smooth';

    window.scrollTo({
        top: position,
        left: 0,
        behavior: behavior,
      });
  }
}