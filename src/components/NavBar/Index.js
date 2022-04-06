import { useContext } from 'react';
import { ThemeContext, themeConfig } from '../../ContextProvider';
import './styles.css';
import { getFormattedDate } from '../../utils';
import Search from '../Search';

const NavBar = ({ data = {} }) => {
  const currentWeatherData = data?.current;
  const date = new Date(currentWeatherData?.dt * 1000);

  const { changeTheme } = useContext(ThemeContext);

  return (
    <nav className='nav'>
      <img className='logo' src='assets/day-and-night.png' alt='' />

      <span>{getFormattedDate({ date })}</span>

      <input
        id='toggle-checkbox'
        className='toggle'
        onChange={changeTheme}
        type='checkbox'
      />
      <label className='toggle-label' htmlFor='toggle-checkbox'></label>

      <Search />

      <button className='nav__btn-location' type='button'></button>
    </nav>
  );
};

export default NavBar;
