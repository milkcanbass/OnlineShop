import React from 'react';
import './landing.styles.scss';
import Top from '../../top/top.component';
import LandingMenu from '../../landingMenu/landingMenu.component';

const LandingPage = () => (
  <div className="landingPageContainer">
    <Top />
    <LandingMenu />
  </div>
);

export default LandingPage;
