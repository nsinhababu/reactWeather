import './styles.css';

const NavBar = ({ data = {} }) => {
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
      <button
        onClick={optionBtnFunction}
        className='nav__btn'
        type='button'
      ></button>
      <button className='nav__btn-location' type='button'></button>

      <ul className='nav__lnk-list nav__lnk-list-first-position'>
        <li>
          <a className='nav__link' href='#'>
            Home
          </a>
        </li>
        <li>
          <a className='nav__link' href='#'>
            About Us
          </a>
        </li>
        <li>
          <a className='nav__link' href='#'>
            Feedback
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
