import ref from './references';
const { checkbox, body } = ref;
import themes from './themes';

export const saveTheme = () => {
  const theme = localStorage.getItem('theme');
  if (theme === themes.DARK) {
    body.classList.add(theme);
    checkbox.checked = true;
  } else {
    body.classList.add(themes.LIGHT);
  }
};
