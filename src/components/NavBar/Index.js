import './Styles.css';

let x = false;
// let y = false;

const optionBtn = document.querySelector('.nav__btn');

const classShifter = (element, class1, class2) => {
  element.classList.remove(class1);
  element.classList.add(class2);
};

function optionBtnFunction() {
  const optionMenu = document.querySelector('.nav__lnk-list');
  if (!x) {
    x = true;
    // optionMenu.style.display = 'block';
    classShifter(
      optionMenu,
      'nav__lnk-list-first-position',
      'nav__lnk-list-second-position'
    );
  } else {
    x = false;
    // optionMenu.style.display = 'none';
    classShifter(
      optionMenu,
      'nav__lnk-list-second-position',
      'nav__lnk-list-first-position'
    );
  }
}

const NavBar = () => {
  return (
    <nav className='nav'>
      <button onClick={optionBtnFunction} className='nav__btn'></button>
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
