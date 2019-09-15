import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/shopping-bag.svg';
import './header.styles.scss';

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
        <Link to="/cart" className="option">
          <Logo className="cart" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
