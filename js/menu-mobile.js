export default class MenuMobile {
  constructor(btnMenu, nav) {
    this.btnMenu = document.getElementById(btnMenu);
    this.nav = document.querySelector(nav);

    this.menuMobile = this.menuMobile.bind(this);
  }

  menuMobile(event) {
    if (event.type === 'touchstart') {
      event.preventDefault();
    }
    this.nav.classList.toggle('active');
    const active = this.nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);

    if (active) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
  }

  addEventMenuMobile() {
    this.btnMenu.addEventListener('touchstart', this.menuMobile);
    this.btnMenu.addEventListener('click', this.menuMobile);
  }

  init() {
    this.addEventMenuMobile();
    return this;
  }
}
