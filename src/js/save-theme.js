import ref from './references';
const { checkbox, body } = ref;
import themes from './themes';

const theme = localStorage.getItem('theme');
export const saveTheme = () => {
  if (theme) {
    body.classList.add(theme);
  }
};

export const saveValueCheckbox = () => {
  if (theme === themes.DARK) {
    checkbox.checked = true;
  }
};
