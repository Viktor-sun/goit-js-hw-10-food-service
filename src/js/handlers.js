import themes from './themes';
const { LIGHT, DARK } = themes;
import ref from './references';
const { body } = ref;

export function onCheckboxHandler(event) {
  if (!event.currentTarget.checked) {
    changeTheme(DARK, LIGHT);
  } else {
    changeTheme(LIGHT, DARK);
  }
}

const changeTheme = (oldTheme, newTheme) => {
  body.classList.add(newTheme);
  body.classList.remove(oldTheme);
  localStorage.setItem('theme', newTheme);
};
