import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
import './collectionItem.styles.scss';

import MyButton from '../myButton/myButton.component';
import PropTypes from 'prop-types';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collectionItemContainer">
      <div
        className="image"
        style={{
          background: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="collectionFooter">
        <span className="name">{name}</span>
        <span className="price">{price} </span>
      </div>
      <MyButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </MyButton>
    </div>
  );
};

CollectionItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(
  null,
  mapDispatchToProps,
)(CollectionItem);
