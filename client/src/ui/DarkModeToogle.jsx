import { useDarkMode } from '../context/DarkModeContext';
import Button from './Button';
import { CiLight } from 'react-icons/ci';
import { CiDark } from 'react-icons/ci';

function DarkModeToogle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <Button size="verySmall" onClick={toggleDarkMode}>
      {isDarkMode ? <CiLight /> : <CiDark />}
    </Button>
  );
}

export default DarkModeToogle;
