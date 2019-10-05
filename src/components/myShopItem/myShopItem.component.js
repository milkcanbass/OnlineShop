import React, { useState } from 'react';
import './myShopItem.styles.scss';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import MyButton from '../myButton/myButton.component';
import Spinner from '../spinner/spinner.component';

const MyShopItem = ({
  title, item: {
    name, imageUrl, price, id,
  }, history, match,
}) => {
  const [loading, setLoading] = useState({
    loading: true,
  });

  return (
    <div className="myShopItemContainer">
      <div className="imgContainer">
        {loading.loading ? <Spinner /> : null}
        <img
          src={imageUrl}
          className="img"
          onLoad={() => setLoading({ loading: false })}
          alt="img"
        />
      </div>
      <div className="details">
        <div className="texts">
          <div className="name">{name}</div>
          <div className="price">
$
            {price}
          </div>
          {' '}
        </div>
        <MyButton onClick={() => history.push(`${match.path}/${title.toLowerCase()}/${id}`)}>
          Detail
        </MyButton>
      </div>
    </div>
  );
};

MyShopItem.propTypes = {
  title: PropTypes.string.isRequired,
  item: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])).isRequired,
  history: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])).isRequired,
  match: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])).isRequired,
};

export default withRouter(MyShopItem);
