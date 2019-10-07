import React, { useState } from 'react';
import './itemDetail.styles.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import MyButton from '../../myButton/myButton.component';
import Spinner from '../../spinner/spinner.component';

import { addItem } from '../../../redux/cart/cart.action';

const ItemDetailPage = ({ match, myShopData, addItem }) => {
  const [loading, setLoading] = useState({
    loading: true,
  });
  let itemData;
  try {
    const { title, id } = match.params;
    itemData = myShopData[title].items[id];
  } catch (error) {
    return <Redirect to="/" />;
  }
  const {
    name, description, imageUrl, price,
  } = itemData;

  return (
    <div>
      <div className="itemDetailContainer">
        <div className="imgContainer">
          {loading.loading ? <Spinner /> : null}
          <img
            className="img"
            src={imageUrl}
            onLoad={() => setLoading({ loading: false })}
            alt="img"
          />
        </div>
        <div className="textContainer">
          <div className="name">{name}</div>
          <div className="price">
$
            {price}
          </div>
          <div className="description">{description}</div>
          <MyButton onClick={() => addItem(itemData)}>Add cart</MyButton>
        </div>
      </div>
    </div>
  );
};

ItemDetailPage.propTypes = {
  match: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  ).isRequired,
  myShopData: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
    .isRequired,
  addItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ItemDetailPage);
