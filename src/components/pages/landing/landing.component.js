import React from 'react';
import './landing.styles.scss';
import Top from '../../top/top.component';
import Directory from '../../directory/directory.components';
import LandingMenu from '../../landingMenu/landingMenu.component';

const LandingPage = props => {
  return (
    <div>
      <Top />
      <LandingMenu />
      <Directory />
    </div>
  );
};

export default LandingPage;
