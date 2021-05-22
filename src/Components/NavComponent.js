import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.scss';

const NavBar = () => {
  const [isPressed, setPressed] = useState(false);

  const handlePress = () => {
    //set pressed state to true/false
    isPressed ? setPressed(false) : setPressed(true);
  };

  return (
    <div className='nav__container'>
      <div className='nav__content'>
        <h1>E-Future</h1>
        <button onClick={() => handlePress()} id='nav__burger'>
          <MenuIcon fontSize='default' />
        </button>
        <ul className='nav__links--desktop-show'>
          <li className='nav__links_link'>
            <Link className='link' to='/'>
              Home
            </Link>
          </li>
          <li className='nav__links_link'>
            <Link className='link' to='/food'>
              Food
            </Link>
          </li>
          <li className='nav__links_link'>
            <Link className='link' to='/location'>
              Location
            </Link>
          </li>
        </ul>
      </div>
      <ul
        className={
          isPressed ? 'nav__links--mobile-show' : 'nav__links--mobile-hidden'
        }
      >
        <li className='nav__links_link'>
          <Link onClick={() => handlePress()} className='link' to='/'>
            Home
          </Link>
        </li>
        <li className='nav__links_link'>
          <Link onClick={() => handlePress()} className='link' to='/food'>
            Food
          </Link>
        </li>
        <li className='nav__links_link'>
          <Link onClick={() => handlePress()} className='link' to='/location'>
            Location
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
