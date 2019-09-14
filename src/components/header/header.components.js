import React from 'react';
import { Link } from 'react-router-dom';
// import {ReactComponent as Logo} from 'SVG'
import './header.styles.scss';

const Header = () => {
  return (
    <div className="headerWrapper">
      <h1 className="brandName">Jiafeimao & Handagou</h1>
      <div className="headerItems">
        <Link to="/contact" className="contact">
          CONTACT
        </Link>
        <Link to="/laginAndSignin" className="loginAndSignin">
          LOGIN&SIGNIN
        </Link>
        <Link to="/cart" className="cart">
          CART
        </Link>
      </div>
    </div>
  );
};

export default Header;
