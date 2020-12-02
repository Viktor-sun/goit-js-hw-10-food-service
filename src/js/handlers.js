import themes from './themes';
const { LIGHT, DARK } = themes;
import ref from './references';
const { body } = ref;

body.classList.add(LIGHT);

export function onCheckboxHandler(event) {
  if (!event.currentTarget.checked) {
    body.classList.add(LIGHT);
    body.classList.remove(DARK);
    localStorage.setItem('theme', LIGHT);
  } else {
    body.classList.add(DARK);
    body.classList.remove(LIGHT);
    localStorage.setItem('theme', DARK);
  }
}
