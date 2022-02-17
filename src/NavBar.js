import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='nav'>
      <button className='nav__btn'>
        <img className='nav__img' src='./public/logo192.png' alt='react logo' />
      </button>
      <div className='nav__link-container'>
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
      </div>
      <div className='nav__search-container'>
        <input type='search' className='nav__search' />
        <img className='nav__search-img' src='' alt='search img' />
      </div>
    </nav>
  );
};

export default NavBar;
