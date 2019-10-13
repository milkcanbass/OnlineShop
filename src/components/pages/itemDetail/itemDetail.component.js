import React, { useState } from 'react';
import './itemDetail.styles.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import MyButton from '../../myButton/myButton.component';
import Spinner from '../../spinner/spinner.component';
import { addItem } from '../../../redux/cart/cart.action';
import { selectUserId } from '../../../redux/user/user.selectors';
import { modalToggleWindow } from '../../../redux/modal/modal.action';
import { addItemToCart } from '../../../firebase/firebase.utils';

const ItemDetailPage = ({
  match, myShopData, addItem, userId, modalToggleWindow,
}) => {
  const [loading, setLoading] = useState({
    loading: true,
  });
  let itemData;
  try {
    const { title, id } = match.params;

    const itemList = myShopData[title].items;
    itemData = itemList.find((obj) => obj.id.toString() === id);
  } catch (error) {
    return <Redirect to="/" />;
  }
  const {
    name, description, imageUrl, price,
  } = itemData;

  const test = () => {
    addItemToCart(userId, itemData);
  };

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
          {userId ? (
            <MyButton onClick={() => addItem(itemData)}>Add cart</MyButton>
          ) : (
            <MyButton
              role="button"
              id="signInAndSignUp"
              onClick={(e) => {
                modalToggleWindow(e.target.id);
              }}
              googleButton
            >
              Sign In to add cart
            </MyButton>
          )}
          <button onClick={() => test()}>test </button>
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
  modalToggleWindow: PropTypes.func.isRequired,
  userId: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  modalToggleWindow: (item, message) => dispatch(modalToggleWindow(item, message)),
});

const mapStateToProps = createStructuredSelector({
  userId: selectUserId,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemDetailPage);
