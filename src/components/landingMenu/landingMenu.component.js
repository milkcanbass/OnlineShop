import React from 'react';
import './landingMenu.styles.scss';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectLandingData } from '../../redux/landing/landing.selector';
import ItemCard from '../itemCard/itemCard.component';

const LandingMenu = ({ landingData }) => {
  console.log(landingData);

  return (
    <div className="landingItemsContainer">
      {landingData.map(item => (
        <ItemCard key={item.id} item={item} />
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
