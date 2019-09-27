import React from 'react';
import './myShopItem.styles.scss';
import MyButton from '../myButton/myButton.component';

const MyShopItem = ({ item }) => {
  const { name, imageUrl, price } = item;

  return (
    <div className="myShopItemContainer">
      <img src={imageUrl} className="img" />
      <div className="details">
        <div className="texts">
          <div className="name">{name}</div>
          <div className="price">${price}</div>
        </div>
        <MyButton>Detail</MyButton>
      </div>
    </div>
  );
};

export default MyShopItem;
