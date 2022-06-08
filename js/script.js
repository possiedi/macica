import MenuMobile from './menu-mobile.js';
import SmoothScroll from './smooth-scroll.js';

const smoothScroll = new SmoothScroll('a');
smoothScroll.init();

const menuMobile = new MenuMobile('btn-menu', 'nav', 'a');
menuMobile.init();
