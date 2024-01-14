import { handleAriaExpanded } from '../../shared/attribute';
import { handleClickOutside } from '../../shared/dom-listner';
const overlay = document.getElementById('nav-overlay')!;
const sidenav = document.getElementById('side-nav')!;
const sidenav_menu_btn = document.getElementById('sidenav-menu_btn')!;
const sidenav_exit_btn = document.getElementById('sidenav-exit_btn')!;
sidenav_menu_btn.addEventListener('click', (_) => {
  sidenav.classList.toggle('sidenav-open');
  overlay.classList.toggle('overlay-show');
  handleAriaExpanded(sidenav_menu_btn);
});

// side nav handlers
sidenav_exit_btn.addEventListener('click', sidenavExitBtnHandler);
handleClickOutside(sidenav, sidenavExitBtnHandler);

function sidenavExitBtnHandler() {
  sidenav.classList.remove('sidenav-open');
  overlay.classList.remove('overlay-show');
  sidenav_menu_btn.setAttribute('aria-expanded', 'false');
}
