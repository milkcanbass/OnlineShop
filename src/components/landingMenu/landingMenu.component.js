import React from 'react';
import './landingMenu.styles.scss';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectLandingData } from '../../redux/landing/landing.selector';
import LandingMenuItem from '../landingMenuItem/landingMenuItem.component';

const LandingMenu = ({ landingData }) => {
  return (
    <div className="landingMenuContainer">
      {landingData.map(item => (
        <LandingMenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

LandingMenu.propType = {
  landingData: PropTypes.array,
};

const mapsStateToProps = createStructuredSelector({
  landingData: selectLandingData,
});

export default connect(mapsStateToProps)(LandingMenu);
