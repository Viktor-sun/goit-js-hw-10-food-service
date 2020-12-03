import './styles.css';

import ref from './js/references';
import { onCheckboxHandler } from './js/handlers';
import './js/save-theme';
import { saveTheme } from './js/save-theme';

import menu from './json/menu.json';
import template from './template/menu-item.hbs';

ref.checkbox.addEventListener('change', onCheckboxHandler);
saveTheme();

ref.menuItems.insertAdjacentHTML('afterbegin', template(menu));
