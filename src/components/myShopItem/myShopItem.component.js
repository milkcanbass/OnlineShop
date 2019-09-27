import React from 'react';
import './myShopItem.styles.scss';
import { withRouter } from 'react-router-dom';
import MyButton from '../myButton/myButton.component';

const MyShopItem = ({ title, item, history, match }) => {
  console.log(title);
  const { name, imageUrl, price, id } = item;

  return (
    <div className="myShopItemContainer">
      <img src={imageUrl} className="img" />
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
