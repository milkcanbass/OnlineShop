import React, { useState } from 'react';
import './itemDetail.styles.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import MyButton from '../../myButton/myButton.component';
import Spinner from '../../spinner/spinner.component';
import { selectUser } from '../../../redux/user/user.selectors';
import { addItem } from '../../../redux/cart/cart.action';
import { modalToggleWindow } from '../../../redux/modal/modal.action';

const ItemDetailPage = ({
  match, myShopData, addItem, user, modalToggleWindow,
}) => {
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
          {user ? (
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
  modalToggleWindow: (id, message) => dispatch(modalToggleWindow(id, message)),
});

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemDetailPage);
