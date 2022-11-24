import { FC, useContext } from 'react';
import { Direction } from '../App';
import { DirectionContext } from '../contexts/direction-context';
import { ThemeContext } from '../contexts/theme-context';

import logoIcon from '../images/logo-icon.png';
// import './styles-one.scss';
import './styles-tow.scss';


const Header: FC = () => {

  //#region Direction

  const { direction, setDirection } = useContext(DirectionContext)

  //#endregion

  //#region Theme

  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === 'dark';
    setTheme(isCurrentDark ? 'light' : 'dark');
    setDirection(isCurrentDark ? Direction.LTR : Direction.RTL)
    localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
  };

  //#endregion

  return (
    <header className="header">
      <div className="header-content">
        <a href="/" className="logo-section">
          <img src={logoIcon} alt="logo" />
          <span>Light/Dark mode app</span>
        </a>
        <div className="toggle-btn-section">
          <div className={`toggle-checkbox m-vertical-auto`}>
            <input
              className="toggle-btn__input"
              type="checkbox"
              name="checkbox"
              onChange={handleThemeChange}
              checked={theme === 'light'}
            />
            <button type="button" className={`toggle-btn__input-label`} onClick={handleThemeChange}></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
