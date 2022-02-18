import './NavBar.css';

let x = false;
let y = false;

function optionBtnFunction() {
  const optionMenu = document.querySelector('.nav__lnk-list');
  if (!x) {
    x = true;
    optionMenu.style.display = 'block';
  } else {
    x = false;
    optionMenu.style.display = 'none';
  }
}
function searchBtnFunction() {
  const searchInput = document.querySelector('.nav__search');

  if (!y) {
    y = true;
    searchInput.style.display = 'block';
  } else {
    y = false;
    searchInput.style.display = 'none';
  }
}
// function searchBtnFunction() {
//   const searchInput = document.querySelector('.nav__search');

//   searchInput.style.display = 'block';
// }

const NavBar = () => {
  return (
    <nav className='nav'>
      <button onClick={optionBtnFunction} className='nav__btn'></button>
      <ul className='nav__lnk-list'>
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
      <div className='nav__search-container'>
        <input type='search' className='nav__search' />
        <button
          onClick={searchBtnFunction}
          className='nav__search-btn'
        ></button>
        {/* <img
          className='nav__search-img'
          src='https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-search-ui-dreamstale-lineal-dreamstale.png'
        /> */}
      </div>
    </nav>
  );
};

export default NavBar;
