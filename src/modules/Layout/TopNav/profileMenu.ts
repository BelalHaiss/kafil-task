import { handleAriaExpanded } from '../../shared/attribute';
import { handleClickOutside } from '../../shared/dom-listner';

const profile_menu_button = document.getElementById('profile-menu-button')!;
const profile_menu = document.getElementById('profile-menu')!;
profile_menu_button.addEventListener('click', handleClickOnProfileBTN);
handleClickOutside(profile_menu, profile_menuExit, profile_menu_button);
function handleClickOnProfileBTN() {
  const isVisible = profile_menu!.style.visibility === 'visible';
  profile_menu.style.visibility = isVisible ? 'hidden' : 'visible';
  handleAriaExpanded(profile_menu_button);
}

function profile_menuExit() {
  profile_menu.style.visibility = 'hidden';
  handleAriaExpanded(profile_menu_button);
}
