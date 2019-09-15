import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';

const Header = () => {
  return (
    <div className="header">
      <div className="titleContainer">
        <h1 className="brandName">Jiafeimao&Handagou</h1>
      </div>
      <div className="optionContainer">
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        <Link to="/laginAndSignin" className="option">
          LOGIN&SIGNIN
        </Link>
        <CartIcon className="option" />
      </div>
    </div>
  );
};

export default Header;
