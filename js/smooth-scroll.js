export default class SmoothScroll {
  constructor(internalLinks) {
    this.internalLinks = document.querySelectorAll(internalLinks);
  }

  smoothScroll(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  addSmoothScrollEvent() {
    this.internalLinks.forEach((link) => {
      link.addEventListener('click', this.smoothScroll);
    });
  }

  init() {
    if (this.internalLinks.length) {
      this.addSmoothScrollEvent();
    }
    return this;
  }
}
