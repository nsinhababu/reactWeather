import { useContext } from 'react';
import { ThemeContext, themeConfig } from '../../ContextProvider';
import './styles.css';
import { getFormattedDate } from '../../utils';

const NavBar = ({ data = {} }) => {
  const currentWeatherData = data?.current;
  const date = new Date(currentWeatherData?.dt * 1000);

  const { changeTheme } = useContext(ThemeContext);

  let x = false;

  const classShifter = (element, class1, class2) => {
    element.classList.remove(class1);
    element.classList.add(class2);
  };

  function optionBtnFunction() {
    const optionMenu = document.querySelector('.nav__lnk-list');
    if (!x) {
      x = true;
      document.querySelector('.nav__btn').style.backgroundImage =
        'url("https://img.icons8.com/color-glass/50/000000/power-off-button.png")';
      classShifter(
        optionMenu,
        'nav__lnk-list-first-position',
        'nav__lnk-list-second-position'
      );
    } else {
      x = false;
      document.querySelector('.nav__btn').style.backgroundImage =
        "url('https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-button-clothes-and-fashion-kiranshastry-gradient-kiranshastry.png')";
      classShifter(
        optionMenu,
        'nav__lnk-list-second-position',
        'nav__lnk-list-first-position'
      );
    }
  }
  return (
    <nav className='nav'>
      <img
        src='assets/day-and-night.png'
        style={{ width: '50px', order: -5 }}
        alt=''
      />
      <button
        onClick={optionBtnFunction}
        className='nav__btn'
        type='button'
      ></button>
      <span>{getFormattedDate({ date })}</span>

      <input
        id='toggle-checkbox'
        className='toggle'
        onChange={changeTheme}
        type='checkbox'
      />
      <label className='toggle-label' htmlFor='toggle-checkbox'></label>

      {/* <button onClick={changeTheme}>Toggle</button> */}
      <button className='nav__btn-location' type='button'></button>

      <ul className='nav__lnk-list nav__lnk-list-first-position'>
        <li>
          <button className='nav__link' href='#'>
            Home
          </button>
        </li>
        <li>
          <button className='nav__link' href='#'>
            About Us
          </button>
        </li>
        <li>
          <button className='nav__link' href='#'>
            Feedback
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
