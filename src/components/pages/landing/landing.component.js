import React from 'react';
import Directory from '../../directory/directory.components';
import './landing.styles.scss';
import Top from '../../top/top.component';

const LandingPage = props => {
  return (
    <div>
      <Top />
      <Directory />
    </div>
  );
};

export default LandingPage;
