import React, { useState } from 'react';
import './myShopItem.styles.scss';
import { withRouter } from 'react-router-dom';
import MyButton from '../myButton/myButton.component';
import Spinner from '../spinner/spinner.component';

const MyShopItem = ({ title, item, history, match }) => {
  const { name, imageUrl, price, id } = item;
  const [loading, setLoading] = useState({
    loading: true,
  });

  console.log(loading.loading);

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
          <div className="price">${price}</div>
        </div>
        <MyButton onClick={() => history.push(`${match.path}/${title}/${id}`)}>Detail</MyButton>
      </div>
    </div>
  );
};

export default withRouter(MyShopItem);
