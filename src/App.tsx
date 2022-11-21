import { FC, useState } from 'react';
import { ThemeContext } from './contexts/theme-context';
import { DirectionContext } from './contexts/direction-context';
import Layout from './layout';
import moon from './images/moon.png';
import sun from './images/sun.png';

import './App.scss';

export enum Direction {
  LTR = 'LTR',
  RTL = 'RTL'
}

const App: FC = () => {

  //#region Theme

  // Detecting the default theme
  const isBrowserDefaulDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaulDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };

  const [theme, setTheme] = useState(getDefaultTheme());

  //#endregion

  //#region Direction

  const [direction, setDirection] = useState<Direction>(Direction.LTR);

  //#endregion

  return (
    <DirectionContext.Provider value={{ direction, setDirection }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`theme-${theme} direction-${direction}`}>
          <Layout>
            <div className='test-div' />
            <div className="content-wrapper">
              <img src={theme === 'dark' ? moon : sun} alt={theme === 'dark' ? 'moon' : 'sun'} />
            </div>
          </Layout>
        </div>
      </ThemeContext.Provider>
    </DirectionContext.Provider>
  );
};

export default App;
