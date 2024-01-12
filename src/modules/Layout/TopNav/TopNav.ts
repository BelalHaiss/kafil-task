import { handleClickOutside } from '../../shared/dom-listner';

const overlay = document.getElementById('nav-overlay')!;
const sidenav = document.getElementById('side-nav')!;
const sidenav_menu_btn = document.getElementById('sidenav-menu_btn')!;
const sidenav_exit_btn = document.getElementById('sidenav-exit_btn')!;
const profile_menu_button = document.getElementById('profile-menu-button')!;
const profile_menu = document.getElementById('profile-menu')!;
sidenav_menu_btn.addEventListener('click', (_) => {
  sidenav.classList.toggle('sidenav-open');
  overlay.classList.toggle('overlay-show');
  const isExpanded = sidenav_menu_btn.getAttribute('aria-expanded') === 'true';
  sidenav_menu_btn.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
});

sidenav_exit_btn.addEventListener('click', sidenavExitBtnHandler);
handleClickOutside(sidenav, sidenavExitBtnHandler);

profile_menu_button.addEventListener('click', handleClickOnProfileBTN);
handleClickOutside(profile_menu, profile_menuExit, profile_menu_button);
function handleClickOnProfileBTN() {
  const isVisible = profile_menu!.style.visibility === 'visible';
  profile_menu.style.visibility = isVisible ? 'hidden' : 'visible';
}

function profile_menuExit() {
  profile_menu.style.visibility = 'hidden';
}
function sidenavExitBtnHandler() {
  sidenav.classList.remove('sidenav-open');
  overlay.classList.remove('overlay-show');
  sidenav_menu_btn.setAttribute('aria-expanded', 'false');
}
