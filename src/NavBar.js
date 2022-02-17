import './NavBar.css';

const optionMenu = document.querySelector('.nav__lnk-list');
const searchInput = document.querySelector('.nav__search');

function optionBtnFunction(elem) {
  elem.style.display = 'inline-block';
  console.log(searchInput);
}

const NavBar = () => {
  return (
    <nav className='nav'>
      <button
        onClick={() => {
          optionBtnFunction(optionMenu);
        }}
        className='nav__btn'
      ></button>
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
          onClick={() => {
            optionBtnFunction(searchInput);
          }}
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
